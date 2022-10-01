import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Aside from '../../components/Layout/aside';
import MobileAside from '../../components/Layout/mobileAside';
import Dropdown from '../../components/Ui/Dropdown';
import Card from '../../components/Views/Card';
import Loader from './../../components/Ui/Loader';
import { AdjustmentsIcon } from '@heroicons/react/outline';

import { CategoryContext } from '../../context/categoryContext';
import { JewelleryContext } from '../../context/jewelleryContext';

import Search from '../../components/Header/search';
import { getJewelleryByCategory } from '../../services/jewellery';

export default function Jewelleries() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { categories: categoriesState } = useContext(CategoryContext);
  const { jewelleries: jewelleriesState } = useContext(JewelleryContext);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const router = useRouter();
  const { category } = router.query;

  const fetchJewelleryByCategory = async (category) => {
    setIsLoading(true);
    try {
      const categoryProductsResults = await getJewelleryByCategory(category);
      setProducts(categoryProductsResults);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const filterProduct = (val) => {
    if (val) {
      const products = jewelleriesState.filter(
        (x) => x.jewelleryType === 'Rental'
      );
      setProducts(products);
    } else {
      setProducts(jewelleriesState);
    }
  };

  useEffect(() => {
    console.log(jewelleriesState);
    setIsLoading(true);
    if (jewelleriesState) {
      setProducts(jewelleriesState);
    }
    setIsLoading(false);

    if (categoriesState) {
      setCategories(categoriesState);
    }
  }, [jewelleriesState, categoriesState]);

  useEffect(() => {
    console.log(jewelleriesState);
    if (category) {
      fetchJewelleryByCategory(category);
    } else {
      setProducts(jewelleriesState);
    }
  }, [category, jewelleriesState]);

  return (
    <div className="relative grid w-full max-w-screen-xl grid-cols-4 gap-10 px-5 py-3 mx-auto mt-16 md:py-5 md:px-20 xl:px-0 lg:mt-28 xl:mt-12">
      <div className="hidden lg:block">
        <Aside categories={categories} />
        <div className="form-check">
          <input
            onChange={(e) => filterProduct(e.target.checked)}
            className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="inline-block text-gray-800 form-check-label"
            htmlFor="flexCheckDefault"
          >
            Show rentals only
          </label>
        </div>
      </div>
      <div className="col-span-3 lg:hidden">
        <MobileAside categories={categories} openMobileMenu={openMobileMenu} />
      </div>
      <div className="col-span-4 lg:col-span-3">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b lg:items-baseline">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-3 shrink-0">
              <AdjustmentsIcon
                className="w-5 h-5 text-gray-500 lg:hidden"
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
              />
              <h4>All ({products?.length || 0})</h4>
            </div>
          </div>
          <div className="flex items-baseline gap-4 shrink-0 lg:mt-10">
            <div className="">
              <Search />
            </div>
            {/* <p>Show products:</p>
            <Dropdown /> */}
          </div>
        </div>
        {isLoading ? (
          <div className="grid my-4 place-items-center">
            <Loader load={isLoading} />
          </div>
        ) : products?.length ? (
          <div className="grid grid-cols-1 gap-12 py-5 md:grid-cols-2 xl:grid-cols-3 gap-y-10">
            {products.map(
              ({
                _id,
                jewelleryName,
                jewelleryCode,
                mainImage,
                jewelleryType,
              }) => (
                <Link href={`/jewellery/${_id}`} key={_id}>
                  <a>
                    <Card
                      name={jewelleryName}
                      code={jewelleryCode}
                      image={mainImage}
                      type={jewelleryType}
                    />
                  </a>
                </Link>
              )
            )}
          </div>
        ) : (
          <p className="my-10 text-center">Not Items!</p>
        )}
      </div>
    </div>
  );
}