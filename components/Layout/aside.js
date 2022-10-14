import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronUpIcon, HomeIcon } from '@heroicons/react/outline';
import { Disclosure } from '@headlessui/react';

const Aside = ({ categories }) => {
  const router = useRouter();
  const { pathname, category } = router.query;
  const { route } = router;

  console.log(categories);

  const grouped = categories?.reduce((cat, curr) => {
    if (!cat[curr.categoryType]) cat[curr.categoryType] = []; //If this type wasn't previously stored
    cat[curr.categoryType].push(curr);
    return cat;
  }, {});

  const types = Object.keys(grouped);

  return (
    <aside>
      <p className="flex items-center gap-3 text-sm text-gray-400">
        <Link href={`/`} passHref>
          <HomeIcon className="w-5 h-5 text-gray-400" />
        </Link>{' '}
        <Link href={`/products`} passHref>
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
                        category === cat._id
                          ? 'text-base font-semibold text-gray-700'
                          : ''
                      }`}
                    >
                      <Link
                        href={{
                          pathname: type.includes('jewellery')
                            ? '/jewellery'
                            : type.includes('occasion')
                            ? `jewellery`
                            : '/products',
                          query: { category: cat._id },
                        }}
                      >
                        {cat.categoryName}
                      </Link>
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
