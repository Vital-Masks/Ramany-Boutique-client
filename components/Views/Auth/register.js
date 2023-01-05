import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { registerCustomer } from '../../../services/auth';
import { setAuth } from '../../../utils/manageUser';

const CANADA_NUMBER = /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters!')
    .required('Required'),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  country: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .matches(CANADA_NUMBER, 'Phone number is not valid')
    .required('Required'),
});

const Register = ({ setIsRegister, setIsLogin }) => {
  const [error, setError] = useState('');

  const handleSubmit = async (formObj) => {
    try {
      const results = await registerCustomer(formObj);
      setAuth(results.customerDetail);
      toast.success('Successfully registered!');
      setIsRegister(false);
    } catch (error) {
      setError(error?.response?.data);
      // toast.error(error?.response?.data);
      console.log('error', error?.response?.data);
    }
  };

  return (
    <div className="absolute z-10 p-5 bg-white shadow-xl top-16 md:top-24 rounded-xl right-5 md-max:left-5 md:w-1/2 md:right-20 lg:w-1/3 xl:w-2/5 xl:right-22">
      <p
        className="font-extrabold text-right text-gray-400 cursor-pointer hover:text-gray-500"
        onClick={() => setIsRegister(false)}
      >
        X
      </p>
      <div className="space-y-6 text-center">
        <p className="text-lg font-bold">Register</p>
        <small className="text-red-500">{error}</small>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            phone: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Field
                    placeholder="First Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus-within:outline-none"
                    name="firstName"
                  />
                  {errors.firstName && touched.firstName ? (
                    <p className="ml-3 text-sm text-left text-red-500">
                      {errors.firstName}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Field
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus-within:outline-none"
                    name="lastName"
                  />
                  {errors.lastName && touched.lastName ? (
                    <p className="ml-3 text-sm text-left text-red-500">
                      {errors.lastName}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Field
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus-within:outline-none"
                    name="email"
                  />
                  {errors.email && touched.email ? (
                    <p className="ml-3 text-sm text-left text-red-500">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Field
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus-within:outline-none"
                    name="password"
                  />
                  {errors.password && touched.password ? (
                    <p className="ml-3 text-sm text-left text-red-500">
                      {errors.password}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Field
                    placeholder="Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus-within:outline-none"
                    name="address"
                  />
                  {errors.address && touched.address ? (
                    <p className="ml-3 text-sm text-left text-red-500">
                      {errors.address}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Field
                    placeholder="City"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus-within:outline-none"
                    name="city"
                  />
                  {errors.city && touched.city ? (
                    <p className="ml-3 text-sm text-left text-red-500">
                      {errors.city}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Field
                    placeholder="Country"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus-within:outline-none"
                    name="country"
                  />
                  {errors.country && touched.country ? (
                    <p className="ml-3 text-sm text-left text-red-500">
                      {errors.country}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Field
                    placeholder="Phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus-within:outline-none"
                    name="phone"
                  />
                  {errors.phone && touched.phone ? (
                    <p className="ml-3 text-sm text-left text-red-500">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>
              </div>
              <button
                className="w-full px-8 py-3 my-2 text-sm font-bold uppercase bg-orange-400 rounded-full"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <div className="flex items-center justify-center gap-2">
          <p>Already a member?</p>
          <button
            className="text-blue-300 underline"
            onClick={() => {
              setIsRegister(false);
              setIsLogin(true);
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
