import Link from "next/link";
import { useRouter } from 'next/router'
import { ChevronUpIcon, HomeIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";

const Aside = ({ categories }) => {
  const router = useRouter()
  const { category } = router.query

  const grouped = categories?.reduce((cat, curr) => {
    if (!cat[curr.categoryType]) cat[curr.categoryType] = []; //If this type wasn't previously stored
    cat[curr.categoryType].push(curr);
    return cat;
  }, {});

  const types = Object.keys(grouped);

  return (
    <aside>
      <p className="text-gray-400 text-sm flex items-center gap-3">
        <Link href={`/`} passHref>
          <HomeIcon className="w-5 h-5 text-gray-400" />
        </Link>{" "}
        <Link href={`/products`} passHref>
          / All Products
        </Link>{" "}

      </p>

      {types.map((type, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div className="border border-gray-200 my-5">
              <Disclosure.Button className="focus:outline-none flex w-full justify-between p-4 text-left text-sm font-semibold text-gray-800 hover:bg-gray-200">
                <span className="uppercase">{type}</span>
                <ChevronUpIcon
                  className={`${ open ? "" : "rotate-180 transform"
                    } h-5 w-5 text-gray-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-4 text-sm">
                <ul>
                  {grouped[type].map((cat, index) => (
                    <li
                      key={index}
                      className={`my-4 hover:text-base active:text-base transition-transform text-gray-500 ${category === cat._id ? 'text-base font-semibold text-gray-700' : ''}`}
                    >
                      <Link href={{ pathname: '/products', query: { category: cat._id } }}>
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

      <Disclosure>
        {({ open }) => (
          <div className="border border-gray-200 my-5">
            <Disclosure.Button className="focus:outline-none flex w-full justify-between p-4 text-left text-sm font-semibold text-gray-800 hover:bg-gray-200">
              <span>SIZE</span>
              <ChevronUpIcon
                className={`${ open ? "" : "rotate-180 transform"
                  } h-5 w-5 text-gray-800`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-sm text-gray-700 font-medium ">
              <div className="flex flex-row border border-gray-200 divide-x-2 ">
                <div className="basis-1/4 grid place-items-center aspect-square">
                  XS
                </div>
                <div className="basis-1/4 grid place-items-center aspect-square">
                  XS
                </div>
                <div className="basis-1/4 grid place-items-center aspect-square">
                  XS
                </div>
                <div className="basis-1/4 grid place-items-center aspect-square">
                  XS
                </div>
                <div className="basis-1/4 grid place-items-center aspect-square">
                  XS
                </div>
                <div className="basis-1/4 grid place-items-center aspect-square">
                  XS
                </div>
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </aside>
  );
};

export default Aside;
