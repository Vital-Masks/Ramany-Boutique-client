import { UserIcon, LogoutIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HOME, PROFILE } from '../../constants/root';
import { getAuth, removeAuth } from '../../utils/manageUser';
import Login from '../Views/Auth/login';
import Register from '../Views/Auth/register';
import Cart from './cart';

const Account = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState();
  const router = useRouter();

  const logout = async () => {
    removeAuth();
    setUser();
    await router.push(HOME);
  };

  useEffect(() => {
    setUser(getAuth());
  }, [isLogin, isRegister]);

  return (
    <>
      {!user && (
        <button onClick={() => setIsLogin(!isLogin)}>
          <UserIcon className="w-5 h-5 text-gray-300 cursor-pointer md:w-7 md:h-7" />
        </button>
      )}
      {user && (
        <>
          <Cart />
          <Link href={PROFILE}>
            <a className="flex items-center gap-4 ">
              <p
                className={`font-bold hover:text-orange-500 ${
                  router.pathname === PROFILE ? 'text-orange-500' : ''
                }`}
              >
                {user.firstName}!{' '}
              </p>
              <LogoutIcon
                onClick={() => logout()}
                className="w-5 h-5 cursor-pointer hover:text-orange-500"
              />
            </a>
          </Link>
        </>
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
