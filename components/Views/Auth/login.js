import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { loginCustomer } from '../../../services/auth';
import { setAuth } from '../../../utils/manageUser';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const Login = ({ setIsLogin, setIsRegister }) => {
  const [error, setError] = useState('');

  const handleSubmit = async (formObj) => {
    try {
      const results = await loginCustomer(formObj);
      setIsLogin(false);
      setAuth(results.customerDetails[0]);
      setIsLogin(false);
    } catch (error) {
      setError('username or password is incorrect!');
      console.log('error', error);
    }
  };
  return (
    <div className="absolute z-10 p-5 bg-white shadow-xl top-16 md:top-24 rounded-xl right-5 md-max:left-5 md:w-1/2 md:right-20 lg:w-1/3 xl:w-1/4 xl:right-22">
      <p
        className="font-extrabold text-right text-gray-400 cursor-pointer hover:text-gray-500"
        onClick={() => setIsLogin(false)}
      >
        X
      </p>
      <div className="space-y-6 text-center">
        <p className="text-lg font-bold">Login</p>
        <small className="text-red-500">{error}</small>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-3">
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
          <p>Not a member yet?</p>
          <button
            className="text-blue-300 underline"
            onClick={() => {
              setIsRegister(true);
              setIsLogin(false);
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
