import { useState } from "react";
import Aside from "../../components/Layout/aside";
import Dropdown from "../../components/Ui/Dropdown";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import MobileAside from "../../components/Layout/mobileAside";
import CardSection from "../../components/Views/CardSection";
import Card from "../../components/Views/Card";

const Products = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  return (
    <div className="relative max-w-screen-lg 2xl:max-w-screen-xl mx-auto w-full py-3 md:py-5 px-5 md:px-20 xl:px-0 lg:mt-14 grid grid-cols-4 gap-10">
      <div className="hidden lg:block">
        <Aside />
      </div>
      <div className="col-span-3 lg:hidden">
        <MobileAside openMobileMenu={openMobileMenu}/>
      </div>
      <div className="col-span-4 lg:col-span-3">
        <div className="flex items-center lg:items-baseline justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <AdjustmentsIcon className="lg:hidden w-5 h-5 text-gray-500" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
            <h4>All (133)</h4>
          </div>
          <div className="flex items-baseline gap-4 lg:mt-10">
            <p>Show products:</p>
            <Dropdown />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 gap-y-10 py-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </div>
    </div>
  );
};

export default Products;
