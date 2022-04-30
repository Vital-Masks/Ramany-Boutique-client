import Aside from "../../components/Layout/aside";
import { Menu } from "@headlessui/react";
import Dropdown from "../../components/Ui/Dropdown";

const Products = () => {
  return (
    <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto w-full py-2 md:py-5 px-5 md:px-20 xl:px-0 mt-14 grid grid-cols-4 gap-10">
      <Aside />
      <div className="col-span-3">
        <div className="flex items-baseline justify-between">
          <h4>All (133)</h4>
          <div className="flex items-baseline gap-4 mt-10">
            <p>Show products:</p>
            <Dropdown/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
