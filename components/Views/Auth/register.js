import React from "react";

const Register = ({ setIsRegister, setIsLogin }) => {
  return (
    <div className="absolute top-16 md:top-24 z-10 bg-white  p-5 rounded-xl right-5 md-max:left-5 md:w-1/2 md:right-20 lg:w-1/3 xl:w-1/4 xl:right-52">
      <p
        className="text-right font-extrabold text-gray-400 hover:text-gray-500 cursor-pointer"
        onClick={() => setIsRegister(false)}
      >
        X
      </p>
      <div className="text-center space-y-6">
        <p className="text-lg font-bold">Register</p>
        <input
          type="text"
          placeholder="First name"
          className="border border-gray-300 w-full rounded-full py-2 px-4 focus-within:outline-none"
        />
        <input
          type="text"
          placeholder="Last name"
          className="border border-gray-300 w-full rounded-full py-2 px-4 focus-within:outline-none"
        />
        <input
          type="email"
          placeholder="email"
          className="border border-gray-300 w-full rounded-full py-2 px-4 focus-within:outline-none"
        />
        <input
          type="password"
          placeholder="password"
          className="border border-gray-300 w-full rounded-full py-2 px-4 focus-within:outline-none"
        />
        <div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-xs">
              I agree to the Google Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
        <button className="my-2 bg-orange-400 py-3 px-8 rounded-full text-sm font-bold uppercase w-full">
          Sign In
        </button>
        <div className="flex items-center gap-2 justify-center">
          <p>Already a member?</p>
          <button className="underline text-blue-300" onClick={() => {setIsRegister(false); setIsLogin(true)}}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
