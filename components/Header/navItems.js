import Link from 'next/link';
import {
  ABOUT,
  CLOTHINGS,
  CONTACT,
  HOME,
  JEWELL,
  JEWELLERIES,
  PRODUCTS,
} from '../../constants/root';

const NavItems = () => {
  return (
    <div className="flex flex-col gap-5 divide-y lg:flex-row lg:divide-y-0">
      <Link href={HOME}>
        <a className="font-normal text-gray-500 transition-colors hover:text-orange-500 ">
          Home
        </a>
      </Link>
      <Link href={{ pathname: JEWELLERIES }}>
        <a className="font-normal text-gray-500 transition-colors hover:text-orange-500 ">
          Jewels Collections
        </a>
      </Link>
      {/* <Link href={{ pathname: PRODUCTS }}>
        <a className="font-normal text-gray-500 transition-colors hover:text-orange-500 ">
          Clothings
        </a>
      </Link> */}

      <Link href={ABOUT}>
        <a className="font-normal text-gray-500 transition-colors hover:text-orange-500 ">
          About Us
        </a>
      </Link>
      <Link href={CONTACT}>
        <a className="font-normal text-gray-500 transition-colors hover:text-orange-500 ">
          Contact Us
        </a>
      </Link>
    </div>
  );
};

export default NavItems;
