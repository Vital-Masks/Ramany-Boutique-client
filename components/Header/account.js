import { UserIcon, LogoutIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PROFILE } from '../../constants/root';
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
        <Link href={PROFILE}>
          <a className="flex items-center gap-4 ">
            <p className="font-bold hover:text-orange-500">
              {user.firstName}!{' '}
            </p>
            <LogoutIcon
              onClick={() => logout()}
              className="w-5 h-5 cursor-pointer hover:text-orange-500"
            />
          </a>
        </Link>
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
