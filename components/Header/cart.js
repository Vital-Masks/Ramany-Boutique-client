import Link from 'next/link';
import { ShoppingCartIcon } from "@heroicons/react/solid";

import { CARTS } from "../../constants/root";

const Cart = () => {
  return (
    <Link href={CARTS} >
      <a className="relative cursor-pointer">
        <ShoppingCartIcon className="w-5 h-5 md:w-7 md:h-7 text-gray-500" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 border border-white rounded-full flex items-center justify-center text-xs text-white font-bold">
          5
        </span>
      </a>
    </Link>
  );
};

export default Cart;
