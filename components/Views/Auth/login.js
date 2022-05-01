import React from "react";

const Login = ({ setIsLogin, setIsRegister }) => {
  return (
    <div className="absolute top-16 md:top-24 z-10 bg-white  p-5 rounded-xl right-5 md-max:left-5 md:w-1/2 md:right-20 lg:w-1/3  xl:w-1/4 xl:right-52">
      <p
        className="text-right font-extrabold text-gray-400 hover:text-gray-500 cursor-pointer"
        onClick={() => setIsLogin(false)}
      >
        X
      </p>
      <div className="text-center space-y-6">
        <p className="text-lg font-bold">Login</p>
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
            <p className="text-sm">keep me signed in</p>
          </div>
        </div>
        <button className="my-2 bg-orange-400 py-3 px-8 rounded-full text-sm font-bold uppercase w-full">
          Sign In
        </button>
        <div className="flex items-center gap-2 justify-center">
          <p>Not a member yet?</p>
          <button
            className="underline text-blue-300"
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
