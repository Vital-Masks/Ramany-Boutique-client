import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { isLoggedIn } from '../../utils/manageUser';

const AuthGuard = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <>
      {isAuthenticated ? (
        children
      ) : (
        <div className="flex flex-col min-h-full pt-16 pb-12 bg-white">
          <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="py-16">
              <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">401</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  You don&apos;t have access.
                </h1>
                <p className="mt-2 text-base text-gray-500">Please Sign in.</p>
                <div className="mt-6">
                  <Link href="/">
                    <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                      Go back home
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default AuthGuard;
