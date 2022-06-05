import { useState, useEffect } from "react";
import Aside from "../../components/Layout/aside";
import Dropdown from "../../components/Ui/Dropdown";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import MobileAside from "../../components/Layout/mobileAside";
import Card from "../../components/Views/Card";
import { getProducts } from "../../services/products";
import Loader from "./../../components/Ui/Loader";

const Products = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let data = await getProducts();
      setProducts(data.slice(0, 10));
      setLoading(false);
    } catch (err) {
      console.log("😟 error at index.js line:15");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="relative max-w-screen-lg 2xl:max-w-screen-xl mx-auto w-full py-3 md:py-5 px-5 md:px-20 xl:px-0 mt-14 grid grid-cols-4 gap-10">
      <div className="hidden lg:block">
        <Aside />
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
        {products ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 gap-y-10 py-5">
            {products.map(
              ({ _id, productName, productCode, price, mainImage }) => (
                <div key={_id}>
                  <Card id={_id} name={productName} code={productCode} />
                </div>
              )
            )}
          </div>
        ) : <p className='text-center my-10'>Not Items!</p>}
        <div className="grid place-items-center">
          <Loader load={loading} />
        </div>
      </div>
    </div>
  );
};

export default Products;
