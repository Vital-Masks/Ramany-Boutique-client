import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

import Account from "./account";
import Cart from "./cart";
import NavItems from "./navItems";
import Search from "./search";
import MobileAside from "../Layout/mobileAside";
import { useState } from "react";
import MobileNav from "./mobileNav";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <MobileNav open={openMenu} />
      <div className="fixed z-30 bg-white lg:relative border-b flex items-center justify-between max-w-screen-lg 2xl:max-w-screen-xl mx-auto w-full py-2 md:py-5 px-5 md:px-20 xl:px-0">
        <div className="flex items-center gap-10">
          <Link href="/" passHref>
            <div className="relative h-10 w-20 md:h-12 md:w-24 cursor-pointer">
              <Image
                src={`https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80`}
                layout="fill"
                objectFit="cover"
                alt="img"
              />
            </div>
          </Link>
          <div className="hidden lg:inline-block">
            <Search />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden lg:inline-block">
            <NavItems />
          </div>
          <Cart />
          <Account />
          {openMenu ? (
            <button onClick={() => setOpenMenu(!openMenu)}>
              <XIcon className="w-5 h-5 text-gray-500 lg:hidden" />
            </button>
          ) : (
            <button onClick={() => setOpenMenu(!openMenu)}>
              <MenuIcon className="w-5 h-5 text-gray-500 lg:hidden" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
