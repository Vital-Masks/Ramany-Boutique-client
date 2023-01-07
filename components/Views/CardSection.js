import Link from 'next/link';
import { JEWELLERIES, PRODUCTS } from '../../constants/root';
import Loader from './../Ui/Loader';
import Card from './Card';

const CardSection = ({ type, products, loading }) => {
  return (
    <div className="max-w-6xl px-5 mx-auto my-20 md:px-20 xl:px-0 2xl:max-w-screen-xl">
      <div className="flex items-center justify-between my-10">
        <p className="text-lg font-semibold">Selected just for you</p>
        <Link href={JEWELLERIES}>
          <a className="p-2 px-4 border border-gray-400 rounded-full">
            Show more
          </a>
        </Link>
      </div>
      {products && (
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
          {type === 'jewellery'
            ? products.map(
                ({ _id, jewelleryName, jewelleryCode, price, mainImage }) => (
                  <Link href={`/jewellery/${_id}`} key={_id} passHref>
                    <a>
                      <Card
                        id={_id}
                        name={jewelleryName}
                        code={jewelleryCode}
                        image={mainImage}
                      />
                    </a>
                  </Link>
                )
              )
            : products.map(
                ({ _id, clothName, clothCode, price, mainImage }) => (
                  <Link href={`/products/${_id}`} key={_id} passHref>
                    <a>
                      <Card
                        id={_id}
                        name={clothName}
                        code={clothCode}
                        image={mainImage}
                      />
                    </a>
                  </Link>
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
