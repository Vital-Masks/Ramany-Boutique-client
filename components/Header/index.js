import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";

import Account from "./account";
import Cart from "./cart";
import NavItems from "./navItems";
import Search from "./search";

const Header = () => {

  return (
    <>
      <div className="border-b flex items-center justify-between max-w-screen-lg 2xl:max-w-screen-xl mx-auto w-full py-2 md:py-5 px-5 md:px-20 xl:px-0">
        <div className="flex items-center gap-10">
          <div className="relative h-10 w-20 md:h-12 md:w-24">
            <Image
              src={`https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80`}
              layout="fill"
              objectFit="cover"
            />
          </div>
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
          <MenuIcon className="w-5 h-5 text-gray-500 lg:hidden" />
        </div>
      </div>
    </>
  );
};

export default Header;
