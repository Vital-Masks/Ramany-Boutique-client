import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CHECKOUT, PRODUCTS } from "../../constants/root";
import price from "../../utils/price";

const Carts = () => {
  const [qty, setQty] = useState(0);
  return (
    <div className="relative max-w-screen-lg 2xl:max-w-screen-xl mx-auto w-full py-3 md:py-5 px-5 md:px-20 xl:px-0 mt-14">
      <div>
        <h5 className="text-xl font-bold">Shopping Cart</h5>
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-16">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Size
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 w-12"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-900">
              <th
                scope="row"
                className="px-6 py-8 font-medium whitespace-nowrap flex items-center gap-4"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                    layout="fill"
                    objectFit="cover"
                    alt="img"
                  />
                </div>
                <div>
                  T-Shirt Summer Vibes <br />
                  <span className="mt-1 text-gray-400">#261311</span>
                </div>
              </th>
              <td className="px-6 py-8">White</td>
              <td className="px-6 py-8">XL</td>
              <td className="px-6 py-8">
                <div className="flex gap-3 items-center">
                  <div>
                    <button
                      className="border border-r-0 border-gray-300 px-2 py-1 text-center"
                      onClick={() => setQty(--qty)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      onChange={(e) => setQty(e.target.value)}
                      value={qty}
                      className="border-t border-b border-gray-300 w-10 py-1 text-center focus:outline-none"
                    />
                    <button
                      className="border border-l-0 border-gray-300 px-2 py-1 text-center"
                      onClick={() => setQty(++qty)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td className="px-6 py-8">$ {price(29999)}</td>
              <td className="px-6 py-8 text-right">X</td>
            </tr>
            <tr className="text-gray-900">
              <th
                scope="row"
                className="px-6 py-8 font-medium whitespace-nowrap flex items-center gap-4"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                    layout="fill"
                    objectFit="cover"
                    alt="img"
                  />
                </div>
                <div>
                  T-Shirt Summer Vibes <br />
                  <span className="mt-1 text-gray-400">#261311</span>
                </div>
              </th>
              <td className="px-6 py-8">White</td>
              <td className="px-6 py-8">XL</td>
              <td className="px-6 py-8">
                <div className="flex gap-3 items-center">
                  <div>
                    <button
                      className="border border-r-0 border-gray-300 px-2 py-1 text-center"
                      onClick={() => setQty(--qty)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      onChange={(e) => setQty(e.target.value)}
                      value={qty}
                      className="border-t border-b border-gray-300 w-10 py-1 text-center focus:outline-none"
                    />
                    <button
                      className="border border-l-0 border-gray-300 px-2 py-1 text-center"
                      onClick={() => setQty(++qty)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td className="px-6 py-8">$ {price(29999)}</td>
              <td className="px-6 py-8 text-right">X</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan="2" className="py-8 text-right">
                Total Cost:{" "}
                <span className="ml-2 text-lg text-black font-semibold">
                $ {price(29999)}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex gap-2 items-center justify-end">
          <Link href={PRODUCTS}>
            <a className="bg-white border text-black py-2 px-8 rounded-full text-sm font-bold uppercase">
              Continue shopping
            </a>
          </Link>
          <Link href={CHECKOUT}>
            <a className="bg-orange-400 text-black py-2 px-8 rounded-full text-sm font-bold uppercase">
              Checkout
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carts;
