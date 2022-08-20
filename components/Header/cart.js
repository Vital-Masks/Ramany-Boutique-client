import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/solid';

import { CARTS } from '../../constants/root';
import { CartSystem } from '../../pages/_app';
import { CartContext } from '../../context/cartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  const cartCount = cart?.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <Link href={CARTS}>
      <a className="relative cursor-pointer">
        <ShoppingCartIcon className="w-5 h-5 text-gray-500 md:w-7 md:h-7 hover:text-orange-500" />
        {cartCount > 0 && (
          <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-500 border border-white rounded-full -top-2 -right-2">
            {cartCount}
          </span>
        )}
      </a>
    </Link>
  );
};

export default Cart;
