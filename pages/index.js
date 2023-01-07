import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import Banner from '../components/Views/Banner';
import CardSection from '../components/Views/CardSection';
import CategoryCard from '../components/Views/CategoryCard';

import { Toaster } from 'react-hot-toast';
import { CategoryContext } from '../context/categoryContext';
import { ProductContext } from '../context/productContext';
import { getRandom } from '../utils/getRandom';
import { JewelleryContext } from '../context/jewelleryContext';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [types, setTypes] = useState([]);

  const { categories: categoriesState } = useContext(CategoryContext);
  const { products: productsState } = useContext(ProductContext);
  const { jewelleries: jewelleriesState } = useContext(JewelleryContext);

  // useEffect(() => {
  //   setIsLoading(true);
  //   if (productsState) {
  //     setProducts(getRandom(productsState, 4));
  //   }
  //   setIsLoading(false);
  // }, [productsState]);

  useEffect(() => {
    setIsLoading(true);
    if (jewelleriesState) {
      setProducts(getRandom(jewelleriesState, 4));
    }
    setIsLoading(false);
  }, [jewelleriesState]);

  useEffect(() => {
    if (categoriesState) {
      const grouped = categoriesState?.reduce((cat, curr) => {
        if (!cat[curr.categoryType]) cat[curr.categoryType] = []; //If this type wasn't previously stored
        cat[curr.categoryType].push(curr);
        return cat;
      }, {});

      if (grouped) {
        setTypes(Object.keys(grouped));
      }
    }
  }, [categoriesState]);

  return (
    <div className="relative h-full">
      <Head>
        <title>The Ramya Boutique</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      {/* Banner Section */}
      <Banner />

      {/* Products Section */}
      <CardSection type={'jewellery'} products={products} loading={isLoading} />

      {/* Category Type Section */}
      <div className="flex max-w-6xl gap-3 px-5 mx-auto my-20 overflow-x-scroll md:px-20 xl:px-0 2xl:max-w-screen-xl lg:overflow-hidden">
        {types?.map((categoryType, index) => (
          <CategoryCard
            key={index}
            index={index}
            size={index === 0 ? 'large' : 'small'}
            title={categoryType}
          />
        ))}
      </div>

      {/* Products Section */}
      <CardSection type={'jewellery'} products={products} loading={isLoading} />
    </div>
  );
}
