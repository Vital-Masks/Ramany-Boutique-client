import Link from "next/link";
import Card from "./Card";
import { PRODUCTS } from "../../constants/root";
import Loader from "./../Ui/Loader";

const CardSection = ({ products, loading }) => {
  return (
    <div className="px-5 md:px-20 xl:px-0 max-w-screen-lg 2xl:max-w-screen-xl mx-auto my-20">
      <div className="flex items-center justify-between my-10">
        <p className="text-lg font-semibold">Selected just for you</p>
        <Link href={PRODUCTS}>
          <a className="border border-gray-400 p-2 px-4 rounded-full">
            Show more
          </a>
        </Link>
      </div>
      {products && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 gap-y-10">
          {products.map(
            ({ _id, productName, productCode, price, mainImage }) => (
              <div key={_id}>
                <Card id={_id} name={productName} code={productCode} image={mainImage} />
              </div>
            )
          )}
        </div>
      )}
      <div className="grid place-items-center">
        <Loader load={loading} />
      </div>
    </div>
  );
};

export default CardSection;
