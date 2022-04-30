import { ChevronUpIcon, HomeIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

const Aside = ({ open }) => {
  return (
    <aside>
      <p className="text-gray-400 text-sm flex items-center gap-3">
        <Link href={`/`}>
          <HomeIcon className="w-5 h-5 text-gray-400" />
        </Link>{" "}
        / All Products
      </p>

      <Disclosure>
        {({ open }) => (
          <div className="border border-gray-200 my-5">
            <Disclosure.Button className="focus:outline-none flex w-full justify-between p-4 text-left text-sm font-semibold text-gray-800 hover:bg-gray-200">
              <span>Occasion Type</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-gray-800`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-sm text-gray-700 font-medium ">
              <ul>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`}>Engagement</Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`}>Sangeet & Mehendi</Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`}>Wedding/ Bridal</Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`}>Cocktail & Party</Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`}>Day to Day Wear</Link>
                </li>
              </ul>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className="border border-gray-200 my-5">
            <Disclosure.Button className="focus:outline-none flex w-full justify-between p-4 text-left text-sm font-semibold text-gray-800 hover:bg-gray-200">
              <span>PRODUCT TYPE</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-gray-800`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-sm text-gray-700 font-medium ">
              <ul>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`}>Engagement</Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`}>Sangeet & Mehendi</Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`}>Wedding/ Bridal</Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`}>Cocktail & Party</Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`}>Day to Day Wear</Link>
                </li>
              </ul>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </aside>
  );
};

export default Aside;
