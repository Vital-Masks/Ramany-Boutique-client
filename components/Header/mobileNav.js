import Link from "next/link";
import { Transition } from "@headlessui/react";
import { HOME, APPLIANCES, PACKAGES, FURNITURE } from "../../constants/root";

const MobileNav = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <div className="fixed z-20 right-0 top-14 h-screen bg-gray-50 w-72 p-5 flex flex-col space-y-5 divide-y shadow-lg">
          <Link href={HOME} >
            <a className="font-normal text-gray-500 hover:text-gray-700 hover:font-semibold transition-colors">
              Home
            </a>
          </Link>
          <Link href={PACKAGES}>
            <a className="font-normal text-gray-500 hover:text-gray-500 hover:font-semibold transition-colors">
              Packages
            </a>
          </Link>
          <Link href={FURNITURE}>
            <a className="font-normal text-gray-500 hover:text-gray-500 hover:font-semibold transition-colors">
              Furniture
            </a>
          </Link>
          <Link href={APPLIANCES}>
            <a className="font-normal text-gray-500 hover:text-gray-500 hover:font-semibold transition-colors">
              Appliances
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default MobileNav;
