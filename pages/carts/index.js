import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CHECKOUT, PRODUCTS } from '../../constants/root';
import { getProduct } from '../../services/products';
import toast, { Toaster } from 'react-hot-toast';
import { TrashIcon } from '@heroicons/react/solid';
import Loader from './../../components/Ui/Loader';
import { CartContext } from '../../context/cartContext';
import { getJewelleryById } from '../../services/jewellery';

const Carts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { cart, clearCart: clear, clearCartItem } = useContext(CartContext);

  const fetchProduct = async () => {
    setIsLoading(true);
    const cloth = await Promise.all(
      cart?.map((cart) => getProduct(cart.productId))
    );

    const jewellery = await Promise.all(
      cart?.map((cart) => getJewelleryById(cart.productId))
    );

    let cartArray = [];
    if (cloth.find((x) => x._id === cart[0].productId)?.clothName) {
      cart.map((cart) =>
        cartArray.push({
          id: cart.id,
          productId: cart.productId,
          name: cloth.find((x) => x._id === cart.productId).clothName,
          code: cloth.find((x) => x._id === cart.productId).clothCode,
          type: cloth.find((x) => x._id === cart.productId).clothType,
          size: cart.size,
          qty: cart.quantity,
        })
      );
    }

    if (jewellery.find((x) => x._id === cart[0].productId)?.jewelleryName) {
      cart.map((cart) =>
        cartArray.push({
          id: cart.id,
          productId: cart.productId,
          name: jewellery.find((x) => x._id === cart.productId).jewelleryName,
          code: jewellery.find((x) => x._id === cart.productId).jewelleryCode,
          type: jewellery.find((x) => x._id === cart.productId).jewelleryType,
          size: cart.size,
          qty: cart.quantity,
        })
      );
    }

    setCartItems(cartArray);
    setIsLoading(false);
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
    clear();
    toast.success('Cart cleared successfully!');
  };

  const deleteCartItem = async (id) => {
    await clearCartItem(id);
    await fetchProduct();
    toast.success('Cart item removed successfully!');
  };

  useEffect(() => {
    if (cart) {
      fetchProduct();
    }
  }, [cart]);

  return (
    <div className="relative w-full max-w-screen-xl px-5 py-3 mx-auto mt-20 md:py-5 md:px-20 xl:px-0 lg:mt-28 xl:mt-12">
      <Toaster />
      <div>
        <h5 className="text-xl font-bold">Shopping Cart</h5>
        <div className="relative h-[600px] overflow-y-auto mt-16">
          <table className="w-full text-sm text-left text-gray-500 table-auto dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Quantity
                </th>
                <th scope="col" className="w-12 px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length ? (
                cartItems.map((cart, index) => (
                  <tr key={index} className="text-gray-900">
                    <th
                      scope="row"
                      className="flex items-center gap-4 px-6 py-8 font-medium"
                    >
                      <div className="relative flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                        <Image
                          src={`https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                          layout="fill"
                          objectFit="cover"
                          alt="img"
                        />
                      </div>
                      <div>
                        {cart.name} <br />
                        <span className="mt-1 text-gray-400">
                          # {cart.code}
                        </span>
                      </div>
                    </th>
                    <td className="px-6 py-8">{cart.size}</td>
                    <td className="px-6 py-8">{cart.qty}</td>
                    <td className="px-6 py-8 text-right">
                      <button onClick={() => deleteCartItem(cart.id)}>
                        <TrashIcon className="w-5 h-5 text-gray-400 transition-colors hover:text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : isLoading ? (
                <tr>
                  <td></td>
                  <td className="flex items-center justify-center w-full gap-4 px-6 py-8 font-medium text-center">
                    <Loader load={isLoading} />
                  </td>
                </tr>
              ) : (
                <tr>
                  <td></td>
                  <td className="flex items-center justify-center w-full gap-4 px-6 py-8 font-medium text-center">
                    <p>No Items !</p>
                  </td>
                </tr>
              )}

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col-reverse items-center justify-end gap-2 md:flex-row">
          <button
            onClick={() => clearCart()}
            className="px-8 py-2 text-sm font-bold text-gray-400 uppercase transition-colors bg-gray-100 rounded-full hover:text-gray-600 md-max:w-full"
          >
            Clear cart
          </button>
          <Link href={PRODUCTS}>
            <a className="px-8 py-2 text-sm font-bold text-center text-black uppercase transition-colors bg-white border rounded-full hover:bg-gray-100 md-max:w-full">
              Continue shopping
            </a>
          </Link>
          <Link href={CHECKOUT}>
            <a className="px-8 py-2 text-sm font-bold text-center text-black uppercase transition-colors bg-orange-400 rounded-full hover:bg-orange-500 md-max:w-full">
              Checkout
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carts;
