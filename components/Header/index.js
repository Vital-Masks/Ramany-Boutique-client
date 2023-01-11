import { MenuIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import Account from './account';
import MobileNav from './mobileNav';
import NavItems from './navItems';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <MobileNav open={openMenu} />
      <div className="fixed z-50 flex items-center justify-between w-full max-w-6xl px-5 py-2 mx-auto bg-transparent border-b lg:relative 2xl:max-w-screen-xl md:py-2 md:px-20 xl:px-0">
        <div className="flex items-center gap-10">
          <Link href="/" passHref>
            <div className="relative w-10 h-10 cursor-pointer md:h-16 md:w-16">
              <Image
                src={`/ramyalogo.png`}
                layout="fill"
                objectFit="cover"
                alt="img"
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden lg:inline-block">
            <NavItems />
          </div>

          <Account />
          {openMenu ? (
            <button onClick={() => setOpenMenu(!openMenu)}>
              <XIcon className="w-5 h-5 text-gray-300 lg:hidden" />
            </button>
          ) : (
            <button onClick={() => setOpenMenu(!openMenu)}>
              <MenuIcon className="w-5 h-5 text-gray-300 lg:hidden" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
