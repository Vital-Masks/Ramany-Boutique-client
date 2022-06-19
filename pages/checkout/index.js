import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "../../constants/root";
import price from "./../../utils/price";
import { CartSystem } from "../_app";
import { getProduct } from "../../services/products";
import Loader from "./../../components/Ui/Loader";
import { Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { CLEAR_CART } from "./../../constants/actionTypes";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [initialState, setInitialState] = useState({
    email: "",
    number: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postal: "",
  });
  const { state, dispatch } = useContext(CartSystem);

  const fetchProduct = async () => {
    setIsLoading(true);
    const data = await Promise.all(
      state?.map((state) => getProduct(state.productId))
    );

    if (data) {
      let cartArray = [];
      state.map((cart) =>
        cartArray.push({
          id: cart.id,
          productId: cart.productId,
          name: data.find((x) => x._id === cart.productId).productName,
          code: data.find((x) => x._id === cart.productId).productCode,
          size: cart.size,
          qty: cart.quantity,
        })
      );
      setCartItems(cartArray);
    }
    
    setIsLoading(false)
  };

  const handleSubmit = (value) => {
    if (cartItems.length === 0) {
      toast.error("No items in cart!");
    } else {
      console.log("form >> ", value);
      console.log("cart >> ", cartItems);
      localStorage.removeItem("cart");
      setCartItems([]);
      dispatch({ type: CLEAR_CART, payload: [] });
      toast.success("Order made successfully!");
    }
  };

  useEffect(() => {
    if (state) {
      fetchProduct();
    }
  }, [state]);

  return (
    <Formik
      initialValues={initialState}
      validate={(values) => {
        const errors = {};
        if (
          !values.email ||
          !values.number ||
          !values.firstName ||
          !values.lastName ||
          !values.address ||
          !values.city ||
          !values.postal
        ) {
          errors.email = "Required";
          errors.number = "Required";
          errors.firstName = "Required";
          errors.lastName = "Required";
          errors.address = "Required";
          errors.city = "Required";
          errors.postal = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="relative max-w-screen-xl mx-auto w-full py-3 md:py-5 px-5 md:px-20 xl:px-0 mt-20 lg:mt-28 xl:mt-12">
            <Toaster />

            <h5 className="text-xl font-bold">Shipping and Payment</h5>

            <div className="grid lg:grid-cols-4 gap-1 mt-6">
              <div className="lg:col-span-3 lg:pr-20">
                <p>Shipping information</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="focus:outline-none border py-2 px-4 rounded-full w-full"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-sm pl-4 text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone"
                      className="focus:outline-none border py-2 px-4 rounded-full w-full"
                      value={values.number}
                      onChange={handleChange}
                    />
                    {errors.number && (
                      <p className="text-sm pl-4 text-red-500">
                        {errors.number}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="focus:outline-none border py-2 px-4 rounded-full w-full"
                      value={values.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <p className="text-sm pl-4 text-red-500">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="focus:outline-none border py-2 px-4 rounded-full w-full"
                      value={values.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <p className="text-sm pl-4 text-red-500">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="focus:outline-none border py-2 px-4 rounded-full w-full"
                      value={values.address}
                      onChange={handleChange}
                    />
                    {errors.address && (
                      <p className="text-sm pl-4 text-red-500">
                        {errors.address}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="focus:outline-none border py-2 px-4 rounded-full w-full"
                      value={values.city}
                      onChange={handleChange}
                    />
                    {errors.city && (
                      <p className="text-sm pl-4 text-red-500">{errors.city}</p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="postal"
                      placeholder="Postal Code / ZIP"
                      className="focus:outline-none border py-2 px-4 rounded-full w-full"
                      value={values.postal}
                      onChange={handleChange}
                    />
                    {errors.postal && (
                      <p className="text-sm pl-4 text-red-500">
                        {errors.postal}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <p>Your Cart</p>
                <div className="flex flex-col space-y-3 items-center justify-between w-full mt-4">
                  {cartItems.length ? (
                    cartItems.map((cart, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 w-full"
                      >
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src={`https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                            layout="fill"
                            objectFit="cover"
                            alt="img"
                          />
                        </div>
                        <div>
                          <p className="font-bold shrink-1">{cart.name}</p>
                          <p className="font-semibild text-sm text-gray-400 shrink-1">
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

            <div className="flex gap-2 items-center justify-end mt-4">
              <Link href={PRODUCTS}>
                <a className="bg-white border text-black py-2 px-8 rounded-full text-sm font-bold uppercase">
                  Continue shopping
                </a>
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-400 text-black py-2 px-8 rounded-full text-sm font-bold uppercase"
              >
                Make order
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Checkout;
