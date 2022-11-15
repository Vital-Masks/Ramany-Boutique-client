import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HOME, JEWELLERIES, PRODUCTS } from '../../constants/root';
import price from './../../utils/price';
import { getProduct, makeOrder } from '../../services/products';
import Loader from './../../components/Ui/Loader';
import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { CartContext } from '../../context/cartContext';
import { getAuth, isLoggedIn } from '../../utils/manageUser';
import * as Yup from 'yup';
import { getJewelleryById } from '../../services/jewellery';
import Head from 'next/head';
import { useRouter } from 'next/router';

const CheckoutSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  number: Yup.string().required('Required'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
});

function calculateTotalCost(obj) {
  return obj.reduce((acc, o) => acc + parseInt(o.netPrice), 0);
}

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [initialState, setInitialState] = useState({
    email: '',
    number: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postal: '',
  });

  const { cart, clearCart } = useContext(CartContext);
  const loggedIn = isLoggedIn();
  const router = useRouter();

  const fetchProduct = async () => {
    setIsLoading(true);

    const cloth = await Promise.all(
      cart?.map((cart) => getProduct(cart.productId))
    );

    const jewellery = await Promise.all(
      cart?.map((cart) => getJewelleryById(cart.productId))
    );

    let cartArray = [];

    if (cloth.find((x) => x._id === cart[0].productId)?.clothName) {
      cart.map((cart) =>
        cartArray.push({
          id: cart.id,
          productId: cart.productId,
          name: cloth.find((x) => x._id === cart.productId).clothName,
          code: cloth.find((x) => x._id === cart.productId).clothCode,
          type: cloth.find((x) => x._id === cart.productId).clothType,
          img: cloth.find((x) => x._id === cart.productId).mainImage,
          size: cart.size,
          qty: cart.quantity,
        })
      );
    }

    if (jewellery.find((x) => x._id === cart[0].productId)?.jewelleryName) {
      cart.map((cart) =>
        cartArray.push({
          id: cart.id,
          productId: cart.productId,
          name: jewellery.find((x) => x._id === cart.productId).jewelleryName,
          code: jewellery.find((x) => x._id === cart.productId).jewelleryCode,
          type: jewellery.find((x) => x._id === cart.productId).jewelleryType,
          img: jewellery.find((x) => x._id === cart.productId).mainImage,
          size: cart.size,
          qty: cart.quantity,
        })
      );
    }
    setCartItems(cartArray);
    setIsLoading(false);
  };

  const fetchBuyNowProduct = async (obj) => {
    const { productId, qty } = obj;
    const product = await getJewelleryById(productId);

    setCartItems([
      {
        id: cart.id,
        productId: productId,
        name: product.jewelleryName,
        code: product.jewelleryCode,
        type: product.jewelleryType,
        img: product.mainImage,
        size: 'free',
        qty: qty,
      },
    ]);
  };

  const handleSubmit = async (value) => {
    if (cartItems.length === 0) {
      toast.error('No items in cart!');
    } else if (!loggedIn) {
      toast.error('You have to log in!');
    } else {
      const sellProducts = [];
      const rentProducts = [];

      cartItems
        .filter((x) => x.type === 'Sale')
        .map((cart) =>
          sellProducts.push({
            productName: cart.name,
            productId: cart.productId,
            quantity: cart.qty,
            productPrice: 0,
            netPrice: 0,
          })
        );

      cartItems
        .filter((x) => x.type === 'Rent')
        .map((cart) =>
          rentProducts.push({
            productName: cart.name,
            productId: cart.productId,
            quantity: cart.qty,
            productPrice: 0,
            netPrice: 0,
          })
        );

      const sellCart = {
        customerId: value.id,
        totalCost: 0,
        status: 'Pending',
        orderType: 'Sale',
        jewelleryDetails: sellProducts,
      };

      const rentCart = {
        customerId: value.id,
        totalCost: 0,
        status: 'pending',
        orderType: 'Rent',
        jewelleryDetails: rentProducts,
      };

      try {
        if (sellProducts.length > 0) {
          await makeOrder(sellCart);
        }
        if (rentProducts.length > 0) {
          await makeOrder(rentCart);
        }

        const message = `Hello, I made an order at TheRamyaBoutique.com.`;
        const whatsAppURL = `https://wa.me/94777453835?text=${message}`;
        window.open(whatsAppURL, '_blank').focus();

        toast.success('Order made successfully!');
        if (localStorage.getItem('buyNow')) {
          localStorage.removeItem('buyNow');
        } else {
          localStorage.removeItem('cart');
          clearCart();
        }
        setCartItems([]);
        await router.push(HOME);
      } catch (error) {
        toast.error('Soemthing went wrong!');
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const buyNowItem = localStorage.getItem('buyNow');

    if (buyNowItem) {
      fetchBuyNowProduct(JSON.parse(buyNowItem));
    } else if (cart) {
      fetchProduct();
    }
  }, [cart]);

  useEffect(() => {
    const user = getAuth();
    if (user) {
      setInitialState({
        email: user.email,
        number: user.phone,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        city: user.city,
        id: user._id,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>The Ramya Boutique</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Formik
        initialValues={initialState}
        enableReinitialize
        validationSchema={CheckoutSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form>
            <div className="relative w-full max-w-screen-xl px-5 py-3 mx-auto mt-20 md:py-5 md:px-20 xl:px-0 lg:mt-28 xl:mt-12">
              <Toaster />

              <h5 className="text-xl font-bold">Shipping and Payment</h5>

              <div className="grid gap-1 mt-6 lg:grid-cols-5">
                <div className="lg:col-span-3 lg:pr-20">
                  <p>Shipping information</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="w-full">
                      <Field
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none"
                        name="email"
                        disabled
                      />
                      {errors.email && touched.email ? (
                        <p className="pl-4 text-sm text-red-500">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                    <div className="w-full">
                      <Field
                        placeholder="Phone"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none"
                        name="number"
                        disabled
                      />
                      {errors.number && (
                        <p className="pl-4 text-sm text-red-500">
                          {errors.number}
                        </p>
                      )}
                    </div>
                    <div className="w-full">
                      <Field
                        placeholder="First Name"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none"
                        name="firstName"
                        disabled
                      />
                      {errors.firstName && (
                        <p className="pl-4 text-sm text-red-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="w-full">
                      <Field
                        placeholder="Last Name"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none"
                        name="lastName"
                        disabled
                      />
                      {errors.lastName && (
                        <p className="pl-4 text-sm text-red-500">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                    <div className="w-full">
                      <Field
                        placeholder="Address"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none"
                        name="address"
                        disabled
                      />
                      {errors.address && (
                        <p className="pl-4 text-sm text-red-500">
                          {errors.address}
                        </p>
                      )}
                    </div>
                    <div className="w-full">
                      <Field
                        placeholder="City"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none"
                        name="city"
                        disabled
                      />
                      {errors.city && (
                        <p className="pl-4 text-sm text-red-500">
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:col-span-2">
                  <p>Your Cart</p>
                  <div className="flex flex-col items-center justify-between w-full mt-4 space-y-3">
                    {cartItems.length ? (
                      cartItems.map((cart, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-between w-full gap-4"
                        >
                          <div className="flex items-center w-full gap-4">
                            <div className="relative w-12 h-12 overflow-hidden rounded-full shrink-0">
                              <Image
                                src={cart?.img?.base64URL ?? '/no-image.png'}
                                layout="fill"
                                objectFit="cover"
                                alt="img"
                              />
                            </div>
                            <div>
                              <p className="font-bold shrink-1">{cart.name}</p>
                              <p className="text-sm text-gray-400 font-semibild shrink-1">
                                {cart.code}
                              </p>
                            </div>
                          </div>
                          <p>x{cart.qty}</p>
                        </div>
                      ))
                    ) : isLoading ? (
                      <Loader load={isLoading} />
                    ) : (
                      <p>no item</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 mt-4">
                <Link href={JEWELLERIES}>
                  <a
                    onClick={() => localStorage.removeItem('buyNow')}
                    className="px-8 py-2 text-sm font-bold text-black uppercase bg-white border rounded-full"
                  >
                    Continue shopping
                  </a>
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-2 text-sm font-bold text-black uppercase bg-orange-400 rounded-full"
                >
                  Make order
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Checkout;
Checkout.auth = true;
