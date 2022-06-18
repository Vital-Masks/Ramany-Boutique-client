import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Aside from "../../components/Layout/aside";
import MobileAside from "../../components/Layout/mobileAside";
import Dropdown from "../../components/Ui/Dropdown";
import Card from "../../components/Views/Card";
import Loader from "./../../components/Ui/Loader";
import { AdjustmentsIcon } from "@heroicons/react/outline";

import { getProducts } from "../../services/products";
import {
  getCategories,
  getProductsByCategory,
} from "../../services/categories";

export default function Products() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const router = useRouter();
  const { category } = router.query;

  const fetchProducts = async () => {
    setIsLoading(true);
    const productsResults = await getProducts();
    setProducts(productsResults);
    setIsLoading(false);
  };

  const fetchCategories = async () => {
    const categoriesResults = await getCategories();
    setCategories(categoriesResults);
  };

  const fetchProductByCategory = async (category) => {
    setIsLoading(true);
    const categoryProductsResults = await getProductsByCategory(category);
    setProducts(categoryProductsResults);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (category) {
      fetchProductByCategory(category);
    } else {
      fetchProducts();
    }
  }, [category]);

  return (
    <div className="relative max-w-screen-lg 2xl:max-w-screen-xl mx-auto w-full py-3 md:py-5 px-5 md:px-20 xl:px-0 mt-14 grid grid-cols-4 gap-10">
      <div className="hidden lg:block">
        <Aside categories={categories} />
      </div>
      <div className="col-span-3 lg:hidden">
        <MobileAside openMobileMenu={openMobileMenu} />
      </div>
      <div className="col-span-4 lg:col-span-3">
        <div className="flex items-center lg:items-baseline justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <AdjustmentsIcon
              className="lg:hidden w-5 h-5 text-gray-500"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            />
            <h4>All ({products?.length || 0})</h4>
          </div>
          <div className="flex items-baseline gap-4 lg:mt-10">
            <p>Show products:</p>
            <Dropdown />
          </div>
        </div>
        {isLoading ? (
          <div className="grid place-items-center my-4">
            <Loader load={isLoading} />
          </div>
        ) : products?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 gap-y-10 py-5">
            {products.map(({ _id, productName, productCode, mainImage }) => (
              <div key={_id}>
                <Card
                  id={_id}
                  name={productName}
                  code={productCode}
                  image={mainImage}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center my-10">Not Items!</p>
        )}
      </div>
    </div>
  );
}
