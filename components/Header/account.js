import { UserIcon, LogoutIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { getAuth, removeAuth } from '../../utils/manageUser';
import Login from '../Views/Auth/login';
import Register from '../Views/Auth/register';

const Account = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState();

  const logout = () => {
    removeAuth();
    setUser();
  };

  useEffect(() => {
    setUser(getAuth());
  }, [isLogin, isRegister]);

  return (
    <>
      {!user && (
        <button onClick={() => setIsLogin(!isLogin)}>
          <UserIcon className="w-5 h-5 text-gray-500 cursor-pointer md:w-7 md:h-7" />
        </button>
      )}
      {user && (
        <p className="flex items-center gap-4 font-bold">
          Hello {user.firstName}!{' '}
          <LogoutIcon
            onClick={() => logout()}
            className="w-5 h-5 cursor-pointer"
          />
        </p>
      )}
      {isLogin && (
        <Login setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
      )}
      {isRegister && (
        <Register setIsRegister={setIsRegister} setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default Account;
