import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CHECKOUT, PRODUCTS } from "../../constants/root";
import { getProduct } from "../../services/products";
import toast, { Toaster } from "react-hot-toast";
import { TrashIcon } from "@heroicons/react/solid";
import Loader from "./../../components/Ui/Loader";
import { CartContext } from "../../context/cartContext";

const Carts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { cart, clearCart: clear, clearCartItem } = useContext(CartContext);

  const fetchProduct = async () => {
    setIsLoading(true);
    const data = await Promise.all(
      cart?.map((cart) => getProduct(cart.productId))
    );

    if (data) {
      let cartArray = [];
      cart.map((cart) =>
        cartArray.push({
          id: cart.id,
          productId: cart.productId,
          name: data.find((x) => x._id === cart.productId).productName,
          code: data.find((x) => x._id === cart.productId).productCode,
          size: cart.size,
          qty: cart.quantity,
        })
      );
      setCartItems(cartArray);
    }

    setIsLoading(false);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    clear();
    toast.success("Cart cleared successfully!");
  };

  const deleteCartItem = async (id) => {
    await clearCartItem(id);
    await fetchProduct();
    toast.success("Cart item removed successfully!");
  };

  useEffect(() => {
    if (cart) {
      fetchProduct();
    }
  }, [cart]);

  return (
    <div className="relative max-w-screen-xl mx-auto w-full py-3 md:py-5 px-5 md:px-20 xl:px-0 mt-20 lg:mt-28 xl:mt-12">
      <Toaster />
      <div>
        <h5 className="text-xl font-bold">Shopping Cart</h5>
        <div className="relative h-[600px] overflow-y-auto mt-16">
          <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className=" text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
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
                <th scope="col" className="px-6 py-3 w-12"></th>
              </tr>
            </thead>
            <tbody >
              {cartItems.length ? (
                cartItems.map((cart, index) => (
                  <tr key={index} className="text-gray-900">
                    <th
                      scope="row"
                      className="px-6 py-8 font-medium flex items-center gap-4"
                    >
                      <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
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
                        <TrashIcon className="w-5 h-5 text-gray-400 hover:text-gray-500 transition-colors" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : isLoading ? (
                <tr>
                  <td></td>
                  <td className="px-6 py-8 font-medium flex items-center justify-center gap-4 text-center w-full">
                    <Loader load={isLoading} />
                  </td>
                </tr>
              ) : (
                <tr>
                  <td></td>
                  <td className="px-6 py-8 font-medium flex items-center justify-center gap-4 text-center w-full">
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
        <div className="flex flex-col-reverse md:flex-row gap-2 items-center justify-end">
          <button
            onClick={() => clearCart()}
            className="bg-gray-100 text-gray-400 py-2 px-8 rounded-full text-sm font-bold uppercase hover:text-gray-600  transition-colors md-max:w-full"
          >
            Clear cart
          </button>
          <Link href={PRODUCTS}>
            <a className="bg-white border text-black py-2 px-8 rounded-full text-sm font-bold uppercase hover:bg-gray-100 transition-colors text-center md-max:w-full">
              Continue shopping
            </a>
          </Link>
          <Link href={CHECKOUT}>
            <a className="bg-orange-400 text-black py-2 px-8 rounded-full text-sm font-bold uppercase hover:bg-orange-500 transition-colors text-center md-max:w-full">
              Checkout
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carts;
