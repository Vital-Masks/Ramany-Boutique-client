import Link from "next/link";
import { Transition } from "@headlessui/react";
import { HOME, APPLIANCES, PACKAGES, FURNITURE } from "../../constants/root";
import NavItems from './navItems';

const MobileNav = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <div className="fixed z-20 right-0 top-14 md:top-20 lg:hidden h-screen bg-gray-50 w-72 p-5 flex flex-col space-y-5 divide-y shadow-lg">
          <NavItems />
        </div>
      )}
    </>
  );
};

export default MobileNav;
