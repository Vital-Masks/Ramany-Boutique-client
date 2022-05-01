import React, { useState } from "react";
import ImageCarousel from "../../components/Ui/ImageCarousel";
import CardSection from "../../components/Views/CardSection";

const Product = () => {
  const [qty, setQty] = useState(1);
  return (
    <div>
      <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto w-full py-3 md:py-5 px-5 md:px-20 xl:px-0 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <ImageCarousel />
        </div>
        <div className="p-2 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Antique Gold Plated Kundan Bridal Necklace Set
            </h2>
            <h5 className="text-red-500 font-bold mt-1 text-lg">SKU: A2701R</h5>
            <div className="my-4">
              <p className="uppercase font-bold">Description</p>
              <p className="text-gray-500 text-sm mt-2">
                INCLUSIONS : Choker Necklace Set: 1, Earrings: 1 Pair,
                Mathapatti / Maang Tika: 1, Hand Ornaments: 1 Pair, Nose Ring: 1{" "}
              </p>
            </div>
          </div>
          <div className="mb-28">
            <div className="flex gap-3 items-center my-4">
              Qty:
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
            <button className="my-2 bg-orange-400 py-2 px-8 rounded-full text-sm font-bold uppercase">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <CardSection/>
    </div>
  );
};

export default Product;
