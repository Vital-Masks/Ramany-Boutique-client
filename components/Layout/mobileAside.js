import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronUpIcon, HomeIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";

const MobileAside = ({ openMobileMenu, categories }) => {
  const router = useRouter()
  const { category } = router.query

  const grouped = categories?.reduce((cat, curr) => {
    if (!cat[curr.categoryType]) cat[curr.categoryType] = []; //If this type wasn't previously stored
    cat[curr.categoryType].push(curr);
    return cat;
  }, {});

  const types = Object.keys(grouped);

  return (
    <>
      {openMobileMenu && (
        <div className="bg-white bg-opacity-95 absolute left-0 top-28 w-full z-10">
          {types.map((type, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="border border-gray-200">
                <Disclosure.Button className="focus:outline-none flex w-full justify-between p-4 text-left text-sm font-semibold text-gray-800 hover:bg-gray-200 uppercase">
                  <span>{type}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "" : "rotate-180 transform"
                    } h-5 w-5 text-gray-800`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 text-sm text-gray-700 font-medium ">
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
        </div>
      )}
    </>
  );
};

export default MobileAside;
