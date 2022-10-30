import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronUpIcon, HomeIcon } from '@heroicons/react/outline';
import { Disclosure } from '@headlessui/react';
import { HOME, JEWELLERIES } from '../../constants/root';

const Aside = ({ categories }) => {
  const router = useRouter();
  const { pathname, category, occasion } = router.query;

  const grouped = categories?.reduce((cat, curr) => {
    if (!cat[curr.categoryType]) cat[curr.categoryType] = []; //If this type wasn't previously stored
    cat[curr.categoryType].push(curr);
    return cat;
  }, {});

  const types = Object.keys(grouped);

  const filterByCategory = (type, id) => {
    if (type.includes('jewellery')) {
      router.push(`/jewellery?category=${id}`);
    } else if (type.includes('occasion')) {
      router.push(`/jewellery?occasion=${id}`);
    } else {
      router.push(`/products?category=${id}`);
    }
  };

  return (
    <aside>
      <p className="flex items-center gap-3 text-sm text-gray-400">
        <Link href={HOME} passHref>
          <HomeIcon className="w-5 h-5 text-gray-400" />
        </Link>{' '}
        <Link href={JEWELLERIES} passHref>
          / All Products
        </Link>{' '}
      </p>

      {types.map((type, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div className="my-5 border border-gray-200">
              <Disclosure.Button className="flex justify-between w-full p-4 text-sm font-semibold text-left text-gray-800 focus:outline-none hover:bg-gray-200">
                <span className="uppercase">
                  {type.toLowerCase() === 'occasiontype'
                    ? 'Occasion Type'
                    : type.toLowerCase() === 'jewellerycategory'
                    ? 'Jewelleries'
                    : 'Clothings'}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? '' : 'rotate-180 transform'
                  } h-5 w-5 text-gray-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-4 text-sm">
                <ul>
                  {grouped[type].map((cat, index) => (
                    <li
                      key={index}
                      className={`my-4 hover:text-base active:text-base transition-transform text-gray-500 ${
                        category === cat._id || occasion === cat._id
                          ? 'text-base font-semibold text-gray-700'
                          : ''
                      }`}
                    >
                      {/* <Link
                        href={{
                          pathname: type.includes('jewellery')
                            ? '/jewellery'
                            : type.includes('occasion')
                            ? `jewellery`
                            : '/products',
                          query: { category: cat._id },
                        }}
                      > */}
                      <button onClick={() => filterByCategory(type, cat._id)}>
                        {cat.categoryName}
                      </button>
                      {/* </Link> */}
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </aside>
  );
};

export default Aside;
