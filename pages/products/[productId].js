import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import ImageCarousel from "../../components/Ui/ImageCarousel";
import CardSection from "../../components/Views/CardSection";
import { getProduct } from "../../services/products";
import toast, { Toaster } from "react-hot-toast";

import { CartSystem } from "../_app";

import { ADD_TO_CART } from "../../constants/actionTypes";

const Product = () => {
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [product, setProduct] = useState();

  const { state, dispatch } = useContext(CartSystem);

  const router = useRouter();
  const { productId } = router.query;

  const fetchProduct = async () => {
    try {
      let data = await getProduct(productId);
      setProduct(data);
    } catch (err) {
      console.log("😟 error at [productId].js line:19");
    }
  };

  const addToCart = () => {
    if (!selectedSize) toast.error("Please select a size!")
    if (!productId) toast.error("Something went wrong!")
    if (!qty) toast.error("Quantity must be > 0!")

    if (selectedSize && productId) {
      const product = {
        productId: productId,
        quantity: qty,
        size: selectedSize,
      };
      dispatch({ type: ADD_TO_CART, payload: product });
    }
  };

  useEffect(() => {
    if (productId) fetchProduct();
  }, [productId]);

  return (
    <div>
      <Toaster />
      <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto w-full py-3 md:py-5 px-5 md:px-20 xl:px-0 lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className=" col-span-2">
          <ImageCarousel />
        </div>
        <div className="p-2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{product?.productName}</h2>
            <p className="text-red-500 font-bold mt-1 text-md">
              {" "}
              {product?.productCode}
            </p>

            {/* <h5 className="my-2 text-3xl font-bold text-gray-600">Rs {price(product?.price || 0)} </h5> */}
            <div className="my-8">
              <p className="uppercase font-bold">Description</p>
              <p className="text-gray-500 text-sm mt-2">
                INCLUSIONS : Choker Necklace Set: 1, Earrings: 1 Pair,
                Mathapatti / Maang Tika: 1, Hand Ornaments: 1 Pair, Nose Ring: 1{" "}
              </p>
            </div>
          </div>

          <div className="md:mb-28">
            <div className="my-8">
              <p className="uppercase font-bold">Size:</p>
              <div className="flex items-center gap-2 mt-2">
                {product?.sizeAndCount?.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size.size)}
                    className={`w-10 h-10 border-2 flex items-center justify-center uppercase cursor-pointer hover:bg-black hover:text-white transition-colors ${
                      selectedSize === size.size && "bg-black  text-white"
                    }`}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>

            <div className=" my-4">
              <p className="uppercase font-bold">QTY:</p>
              <div className="mt-2">
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
            <div className="flex items-center gap-2">
              <button className="my-2 bg-orange-400 py-2 px-8 rounded-full text-sm font-bold uppercase">
                Buy Now
              </button>
              <button
                className="my-2 bg-orange-400 py-2 px-8 rounded-full text-sm font-bold uppercase"
                onClick={() => addToCart()}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <CardSection />
    </div>
  );
};

export default Product;
