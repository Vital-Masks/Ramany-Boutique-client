import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "../../constants/root";
import price from './../../utils/price';

const Checkout = () => {
  const Input = ({ type, name, placeholder }) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="focus:outline-none border py-2 px-4 rounded-full"
      />
    );
  };

  

  return (
    <div className="relative max-w-screen-lg 2xl:max-w-screen-xl mx-auto w-full py-3 md:py-5 px-5 md:px-20 xl:px-0 mt-14">
      <h5 className="text-xl font-bold">Shipping and Payment</h5>

      <div className="grid lg:grid-cols-4 gap-1 mt-6">
        <div className="col-span-3 lg:pr-20">
          <p>Shipping information</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Input type="email" name="email" placeholder="Email" />
            <Input type="text" name="number" placeholder="Phone" />
            <Input type="text" name="fName" placeholder="First Name" />
            <Input type="text" name="lName" placeholder="Last Name" />
            <Input type="text" name="address" placeholder="Address" />
            <Input type="text" name="city" placeholder="City" />
            <Input type="text" name="postal" placeholder="Postal Code / ZIP" />
          </div>
        </div>
        <div>
          <p>Your Cart</p>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                  layout="fill"
                  objectFit="cover"
                  alt="img"
                />
              </div>
              <p className="font-bold shrink-1">T-Shirt Summer Vibes</p>
            </div>
            <p className="font-bold">$ {price(29999)}</p>
          </div>
          <div className="bg-gray-100 flex items-center justify-between py-3 px-5 rounded-full mt-4">
            <p>Total cost:</p> <span className="font-bold">$ {price(29999)}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center justify-end mt-4">
        <Link href={PRODUCTS}>
          <a className="bg-white border text-black py-2 px-8 rounded-full text-sm font-bold uppercase">
            Continue shopping
          </a>
        </Link>
        <a className="bg-orange-400 text-black py-2 px-8 rounded-full text-sm font-bold uppercase">
          Proceed Payment
        </a>
      </div>
    </div>
  );
};

export default Checkout;
