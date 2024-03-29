import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Aside from '../../components/Layout/aside';
import MobileAside from '../../components/Layout/mobileAside';
import Card from '../../components/Views/Card';
import Loader from './../../components/Ui/Loader';
import { AdjustmentsIcon } from '@heroicons/react/outline';
import ReactPaginate from 'react-paginate';

import { CategoryContext } from '../../context/categoryContext';
import { JewelleryContext } from '../../context/jewelleryContext';

import Search from '../../components/Header/search';
import {
  getJewelleryByCategory,
  getJewelleryByOccasion,
} from '../../services/jewellery';
import Head from 'next/head';

function Items({ products }) {
  return (
    <>
      {products?.map(
        ({ _id, jewelleryName, jewelleryCode, mainImage, jewelleryType }) => (
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
    </>
  );
}

export default function Jewelleries() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRental, setIsRental] = useState(false);
  const [total, setTotal] = useState(0);
  const { categories: categoriesState } = useContext(CategoryContext);
  const { jewelleries: jewelleriesState } = useContext(JewelleryContext);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const router = useRouter();
  const { category, occasion } = router.query;

  const fetchJewelleryByCategory = async (category) => {
    setIsLoading(true);
    try {
      const categoryProductsResults = await getJewelleryByCategory(category);
      setTotal(categoryProductsResults.length);
      setProducts(categoryProductsResults);
      setCurrentItems(categoryProductsResults);
    } catch (error) {
      setProducts([]);
      setCurrentItems([]);
      console.log(error);
    }
    setIsLoading(false);
  };

  const fetchJewelleryByOccasion = async (category) => {
    setIsLoading(true);
    try {
      const categoryProductsResults = await getJewelleryByOccasion(category);
      setTotal(categoryProductsResults.length);
      setProducts(categoryProductsResults);
      setCurrentItems(categoryProductsResults);
    } catch (error) {
      setProducts([]);
      setCurrentItems([]);
      console.log(error);
    }
    setIsLoading(false);
  };

  const filterProduct = (val) => {
    if (val) {
      setAllProducts(currentItems);
      const pro = currentItems?.filter((x) => x.jewelleryType === 'Rent');
      setPageCount(Math.ceil(pro.length / 9));
      setTotal(pro.length);
      setCurrentItems(pro);
    } else {
      setPageCount(Math.ceil(products.length / 9));
      setTotal(products.length);
      setCurrentItems(allProducts);
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % jewelleriesState.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setIsLoading(true);
    if (jewelleriesState.length > 0) {
      setTotal(jewelleriesState.length);
      setProducts(jewelleriesState);
      setCurrentItems(jewelleriesState);
      setIsLoading(false);
    }

    if (categoriesState) {
      setCategories(categoriesState);
    }

    filterProduct(isRental);
  }, [jewelleriesState, categoriesState, isRental]);

  useEffect(() => {
    setIsRental(false);
    if (category) {
      fetchJewelleryByCategory(category);
    } else if (occasion) {
      fetchJewelleryByOccasion(occasion);
    } else {
      setProducts(jewelleriesState);
      setCurrentItems(jewelleriesState);
    }
  }, [category, occasion, jewelleriesState]);

  useEffect(() => {
    // Fetch items from another resources.
    if (products) {
      const endOffset = itemOffset + 9;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setPageCount(Math.ceil(products.length / 9));
    }
  }, [products, itemOffset]);

  return (
    <>
      <Head>
        <title>The Ramya Boutique</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="relative grid w-full max-w-6xl grid-cols-4 gap-10 px-5 mx-auto my-16 md:px-20 xl:px-0 2xl:max-w-7xl">
        <div className="hidden lg:block">
          <Aside categories={categories} />
          <div className="form-check">
            <input
              onChange={(e) => setIsRental(e.target.checked)}
              className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
              type="checkbox"
              value={isRental}
              id="flexCheckDefault"
              checked={isRental}
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
          <MobileAside
            categories={categories}
            openMobileMenu={openMobileMenu}
          />
        </div>
        <div className="col-span-4 lg:col-span-3">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b lg:items-baseline">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-3 shrink-0">
                <AdjustmentsIcon
                  className="w-5 h-5 text-gray-500 lg:hidden"
                  onClick={() => setOpenMobileMenu(!openMobileMenu)}
                />
                <h4>All ({total})</h4>
              </div>
            </div>
            <div className="flex items-baseline gap-4 shrink-0 lg:mt-10">
              {/* <div className="">
                <Search />
              </div> */}
              {/* <p>Show products:</p>
            <Dropdown /> */}
            </div>
          </div>
          {isLoading ? (
            <div className="grid my-4 place-items-center">
              <Loader load={isLoading} />
            </div>
          ) : currentItems?.length ? (
            <div className="flex flex-col">
              <div className="grid grid-cols-1 gap-12 py-5 md:grid-cols-2 xl:grid-cols-3 gap-y-10 font">
                <Items products={currentItems} />
              </div>

              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className="flex items-center self-end gap-5 px-4 py-1 bg-gray-100 rounded-full mt-7"
                activeClassName="font-semibold"
              />
            </div>
          ) : (
            <p className="my-10 text-center">No Items!</p>
          )}
        </div>
      </div>
    </>
  );
}
