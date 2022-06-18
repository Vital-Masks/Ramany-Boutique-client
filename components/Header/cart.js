import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/solid";

import { CARTS } from "../../constants/root";
import { CartSystem } from "../../pages/_app";

const Cart = () => {
  const { state } = useContext(CartSystem);

  const cartCount = state?.reduce((total, item) => {
    return total + item.quantity;
  }, 0);



  return (
    <Link href={CARTS}>
      <a className="relative cursor-pointer">
        <ShoppingCartIcon className="w-5 h-5 md:w-7 md:h-7 text-gray-500" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 border border-white rounded-full flex items-center justify-center text-xs text-white font-bold">
            {cartCount}
          </span>
        )}
      </a>
    </Link>
  );
};

export default Cart;
