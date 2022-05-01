import { UserIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Login from '../Views/Auth/login'
import Register from '../Views/Auth/register'

const Account = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      <button onClick={() => setIsLogin(!isLogin)}>
        <UserIcon className="w-5 h-5 md:w-7 md:h-7 text-gray-500 cursor-pointer" />
      </button>
      {isLogin && (
        <Login  setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
      )}
      {isRegister && (
        <Register setIsRegister={setIsRegister} setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default Account;
