import Link from "next/link";
import { ABOUT, CLOTHINGS, CONTACT, HOME, JEWELL, PRODUCTS } from "../../constants/root";

const NavItems = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 divide-y lg:divide-y-0">
      <Link href={HOME}>
        <a className="font-normal text-gray-500 hover:text-gray-700 hover:font-semibold transition-colors">Home</a>
      </Link>
      <Link href={JEWELL}>
        <a className="font-normal text-gray-500 hover:text-gray-500 hover:font-semibold transition-colors">Jelwell Collections</a>
      </Link>
      <Link href={CLOTHINGS}>
        <a className="font-normal text-gray-500 hover:text-gray-500 hover:font-semibold transition-colors">Clothings</a>
      </Link>
      
      <Link href={ABOUT}>
        <a className="font-normal text-gray-500 hover:text-gray-500 hover:font-semibold transition-colors">About Us</a>
      </Link>
      <Link href={CONTACT}>
        <a className="font-normal text-gray-500 hover:text-gray-500 hover:font-semibold transition-colors">Contact Us</a>
      </Link>
    </div>
  );
};

export default NavItems;
