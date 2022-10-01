import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { getAuth } from '../../utils/manageUser';
import { PencilAltIcon } from '@heroicons/react/solid';
import toast, { Toaster } from 'react-hot-toast';
import { getOrders } from '../../services/orders';

const Profile = () => {
  const [user, setUser] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [orders, setOrders] = useState([]);
  const [initialState, setInitialState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    number: '',
    country: '',
  });

  const handleSubmit = () => {};

  const fetchUserOrders = async () => {
    const data = await getOrders(initialState.id);
    console.log(data);
  };

  useEffect(() => {
    const user = getAuth();
    setUser(user);
    setInitialState({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: '',
      number: user.phone,
      country: user.country,
    });
  }, []);

  useEffect(() => {
    if (initialState.id) {
      fetchUserOrders();
    }
  }, [initialState]);

  return (
    <div className="max-w-screen-lg px-5 mx-auto my-20 md:px-20 xl:px-0 2xl:max-w-screen-xl">
      <Toaster />
      <div className="pb-5 text-center border-b-2">
        <h5 className="text-lg font-semibold text-gray-800">
          Hi{' '}
          <span>
            {user?.firstName} {user?.lastName}
          </span>
        </h5>
      </div>
      <div className="flex items-start justify-between py-5 border-b-2">
        {isEdit ? (
          <Formik
            initialValues={initialState}
            enableReinitialize
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form>
                <div className="grid gap-1 mt-6 lg:grid-cols-4">
                  <div className="lg:col-span-3 lg:pr-20">
                    <p>Update your information</p>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="w-full">
                        <Field
                          placeholder="First Name"
                          className="w-full px-4 py-2 border rounded-full focus:outline-none"
                          name="firstName"
                        />
                        {errors.firstName && touched.firstName ? (
                          <p className="pl-4 text-sm text-red-500">
                            {errors.firstName}
                          </p>
                        ) : null}
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
                          placeholder="Email"
                          className="w-full px-4 py-2 border rounded-full focus:outline-none"
                          name="email"
                        />
                        {errors.email && (
                          <p className="pl-4 text-sm text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div className="w-full">
                        <Field
                          placeholder="Password"
                          className="w-full px-4 py-2 border rounded-full focus:outline-none"
                          name="password"
                        />
                        {errors.password && (
                          <p className="pl-4 text-sm text-red-500">
                            {errors.password}
                          </p>
                        )}
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
                          placeholder="Country"
                          className="w-full px-4 py-2 border rounded-full focus:outline-none"
                          name="country"
                        />
                        {errors.country && (
                          <p className="pl-4 text-sm text-red-500">
                            {errors.country}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-2 text-sm font-bold text-black uppercase bg-orange-400 rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="flex basis-1/4">
            <div className="font-semibold text-gray-500 basis-2/4">
              <p>Location</p>
              <p>Email</p>
              <p>Phone</p>
            </div>
            <div className="text-gray-700 basis-2/4">
              <p>
                {user?.address},{user?.city}
              </p>
              <p>{user?.email}</p>
              <p>{user?.phone}</p>
            </div>
          </div>
        )}

        <div>
          <PencilAltIcon
            className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800"
            onClick={() => setIsEdit(!isEdit)}
          />
        </div>
      </div>
      <div className="py-5 border-b-2">
        <p>Your recent order details</p>
        <div className="flex flex-col gap-5 mt-4">
          <div className="p-5 border-2 rounded-lg">
            <h4 className="text-lg font-bold">Order #ORD1248</h4>
            <p className="text-sm text-gray-500">20-05-2022</p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full">
                <thead className="text-left">
                  <tr className="border-t border-b">
                    <th className="py-2 pr-5 w-52">Product Code</th>
                    <th className="py-2 pr-5 w-52">Product Name</th>
                    <th className="py-2 pr-5 min-w-52"> Description</th>
                    <th className="py-2 pr-5 w-52">Quantity</th>
                    <th className="py-2 pr-5 w-52">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-top">
                    <td className="py-2 pr-5">PRO 1458</td>
                    <td className="py-2 pr-5">Kundan Jumkhas</td>
                    <td className="py-2 pr-5">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Praesentium possimus veritatis quis mollitia aliquid
                      voluptates eaque suscipit,
                    </td>
                    <td className="py-2 pr-5">x 2</td>
                    <td className="py-2 pr-5">50 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-5 border-2 rounded-lg">
            <h4 className="text-lg font-bold">Order #ORD1248</h4>
            <p className="text-sm text-gray-500">20-05-2022</p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full">
                <thead className="text-left">
                  <tr className="border-t border-b">
                    <th className="py-2 pr-5 w-52">Product Code</th>
                    <th className="py-2 pr-5 w-52">Product Name</th>
                    <th className="py-2 pr-5 min-w-52"> Description</th>
                    <th className="py-2 pr-5 w-52">Quantity</th>
                    <th className="py-2 pr-5 w-52">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-top">
                    <td className="py-2 pr-5">PRO 1458</td>
                    <td className="py-2 pr-5">Kundan Jumkhas</td>
                    <td className="py-2 pr-5">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Praesentium possimus veritatis quis mollitia aliquid
                      voluptates eaque suscipit,
                    </td>
                    <td className="py-2 pr-5">x 2</td>
                    <td className="py-2 pr-5">50 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;