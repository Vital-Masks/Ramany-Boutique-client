import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ImageCarousel from '../../components/Ui/ImageCarousel';
import { CartContext } from '../../context/cartContext';
import Image from 'next/image';
import { getJewelleryById } from '../../services/jewellery';
import Head from 'next/head';
import { CHECKOUT } from '../../constants/root';
import { isLoggedIn } from '../../utils/manageUser';

const Jewellery = () => {
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState();
  const { addToCart: add } = useContext(CartContext);
  const loggedIn = isLoggedIn();

  const router = useRouter();
  const { jewelleyId } = router.query;

  const addToCart = () => {
    if (!loggedIn) toast.error('You have to log in!');
    if (!jewelleyId) toast.error('Something went wrong!');
    if (!qty) toast.error('Quantity must be > 0!');

    if (jewelleyId && loggedIn && qty) {
      const product = {
        productId: jewelleyId,
        quantity: qty,
        size: 'free',
      };
      add(product);
      fetchProduct();
      toast.success('Product added to cart!');
    }
  };

  const fetchProduct = async () => {
    try {
      let data = await getJewelleryById(jewelleyId);

      setProduct(data);
    } catch (err) {
      console.log('😟 error at [jewelleyId].js line:43');
    }
  };

  const handleBuyNow = () => {
    if (!loggedIn) toast.error('You have to log in!');
    if (!jewelleyId) toast.error('Something went wrong!');
    if (!qty) toast.error('Quantity must be > 0!');

    if (jewelleyId && loggedIn && qty) {
      const obj = {
        productId: jewelleyId,
        qty: qty,
      };
      localStorage.setItem('buyNow', JSON.stringify(obj));
      router.push(CHECKOUT);
    }
  };

  useEffect(() => {
    if (jewelleyId) {
      fetchProduct();
    }
  }, [jewelleyId]);

  return (
    <div>
      <Head>
        <title>The Ramya Boutique</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Toaster />
      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-10 px-5 py-3 mx-auto mt-20 md:py-5 md:px-20 xl:px-0 lg:mt-28 xl:mt-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {product?.subImage?.length > 0 ? (
            <ImageCarousel images={product?.subImage} />
          ) : (
            product && (
              <div className="relative object-contain w-auto h-full">
                <Image
                  src={product?.mainImage?.base64URL ?? '/no-image.png'}
                  layout="fill"
                  objectFit="contain"
                  alt="image"
                />
              </div>
            )
          )}
        </div>
        <div className="flex flex-col justify-between p-2">
          <div>
            <h2 className="text-2xl font-semibold">{product?.jewelleryName}</h2>
            <div className="flex items-center gap-2">
              <p className="mt-1 font-bold text-red-500 text-md">
                {product?.jewelleryCode}
              </p>
              <p className="px-2 py-1 text-xs text-red-400 rounded-full bg-red-50">
                {product?.quantity} item{product?.quantity > 1 && 's'} left
              </p>
            </div>
            {product?.occasionTypeId?.map(({ categoryName }, index) => (
              <p
                key={index}
                className="my-2 text-sm font-semibold text-gray-400"
              >
                {categoryName}
              </p>
            ))}

            <p className="my-2 text-sm font-semibold text-gray-400 capitalize">
              {product?.jewelleryingCategoryId?.categoryName}
            </p>

            <div className="my-8">
              <p className="font-bold uppercase">Description</p>
              <p className="mt-2 text-sm text-gray-500">
                {product?.description || ''}
              </p>
            </div>
          </div>

          <div>
            <div className="my-4 ">
              <p className="font-bold uppercase">QTY:</p>
              <div className="mt-2">
                <button
                  className="px-2 py-1 text-center border border-r-0 border-gray-300"
                  onClick={() => setQty(qty > 1 ? --qty : 1)}
                >
                  -
                </button>
                <input
                  type="text"
                  disabled
                  value={qty}
                  className="w-10 py-1 text-center border-t border-b border-gray-300 focus:outline-none"
                />
                <button
                  className="px-2 py-1 text-center border border-l-0 border-gray-300"
                  onClick={() =>
                    setQty(
                      product?.quantity > 4 && qty > 4
                        ? 5
                        : qty < product?.quantity
                        ? ++qty
                        : product?.quantity
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
            {product?.quantity > 0 ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleBuyNow()}
                  className="px-8 py-2 my-2 text-sm font-bold uppercase bg-orange-400 rounded-full"
                >
                  {product?.jewelleryType === 'Rent' ? 'Rent Now' : 'Buy Now'}
                </button>
                <button
                  className="px-8 py-2 my-2 text-sm font-bold uppercase bg-orange-400 rounded-full"
                  onClick={() => {
                    localStorage.removeItem('buyNow');
                    addToCart();
                  }}
                >
                  Add to cart
                </button>
              </div>
            ) : (
              <button
                className="px-8 py-2 my-2 text-sm font-bold uppercase bg-orange-400 rounded-full"
                disabled
              >
                Out of stock
              </button>
            )}
          </div>
        </div>
      </div>
      {/* <CardSection /> */}
    </div>
  );
};

export default Jewellery;
