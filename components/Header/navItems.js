import Link from "next/link";
import { APPLIANCES, FURNITURE, HOME, PACKAGES } from "../../constants/root";

const NavItems = () => {
  return (
    <div className="flex gap-4">
      <Link href={HOME}>
        <a className="font-normal text-gray-500 hover:text-gray-700 hover:font-semibold transition-colors">Home</a>
      </Link>
      <Link href={PACKAGES}>
        <a className="font-normal text-gray-500 hover:text-gray-500 hover:font-semibold transition-colors">Packages</a>
      </Link>
      <Link href={FURNITURE}>
        <a className="font-normal text-gray-500 hover:text-gray-500 hover:font-semibold transition-colors">Furniture</a>
      </Link>
      <Link href={APPLIANCES}>
        <a className="font-normal text-gray-500 hover:text-gray-500 hover:font-semibold transition-colors">Appliances</a>
      </Link>
    </div>
  );
};

export default NavItems;
