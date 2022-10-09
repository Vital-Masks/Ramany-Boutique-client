import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '../../constants/root';
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
          size: cart.size,
          qty: cart.quantity,
        })
      );
    }
    setCartItems(cartArray);
    setIsLoading(false);
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
        .filter((x) => x.type === 'Sell')
        .map((cart) =>
          sellProducts.push({
            orderType: 'sale',
            productName: cart.name,
            productId: cart.id,
            quantity: cart.qty,
            netPrice: cart.qty * cart.price,
          })
        );

      cartItems
        .filter((x) => x.type === 'Rental')
        .map((cart) =>
          rentProducts.push({
            orderType: 'rent',
            productName: cart.name,
            productId: cart.id,
            quantity: cart.qty,
            netPrice: cart.qty * cart.price,
          })
        );

      const sellCart = {
        customerId: value.id,
        totalCost: calculateTotalCost(sellProducts),
        status: 'pending',
        productDetails: sellProducts,
      };

      const rentCart = {
        customerId: value.id,
        totalCost: calculateTotalCost(rentProducts),
        status: 'pending',
        productDetails: rentProducts,
      };

      try {
        await makeOrder(sellCart);
        await makeOrder(rentCart);

        const message = `Order from ${value.number}`;
        const whatsAppURL = `https://wa.me/94777453835?text=${message}`;
        window.open(whatsAppURL, '_blank').focus();

        toast.success('Order made successfully!');
        localStorage.removeItem('cart');
        setCartItems([]);
        clearCart();
      } catch (error) {
        toast.error('Soemthing went wrong!');
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (cart) {
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

              <div className="grid gap-1 mt-6 lg:grid-cols-4">
                <div className="lg:col-span-3 lg:pr-20">
                  <p>Shipping information</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="w-full">
                      <Field
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none"
                        name="email"
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
                      />
                      {errors.city && (
                        <p className="pl-4 text-sm text-red-500">
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <p>Your Cart</p>
                  <div className="flex flex-col items-center justify-between w-full mt-4 space-y-3">
                    {cartItems.length ? (
                      cartItems.map((cart, index) => (
                        <div
                          key={index}
                          className="flex items-center w-full gap-4"
                        >
                          <div className="relative w-10 h-10 overflow-hidden rounded-full">
                            <Image
                              src={`https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
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
                <Link href={PRODUCTS}>
                  <a className="px-8 py-2 text-sm font-bold text-black uppercase bg-white border rounded-full">
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
