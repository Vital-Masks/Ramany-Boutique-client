import { ChevronUpIcon, HomeIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

const Aside = ({ open }) => {
  return (
    <aside>
      <p className="text-gray-400 text-sm flex items-center gap-3">
        <Link href={`/`} passHref>
          <HomeIcon className="w-5 h-5 text-gray-400" />
        </Link>{" "}
        / All Products
      </p>

      <Disclosure>
        {({ open }) => (
          <div className="border border-gray-200 my-5">
            <Disclosure.Button className="focus:outline-none flex w-full justify-between p-4 text-left text-sm font-semibold text-gray-800 hover:bg-gray-200">
              <span>OCCASION TYPE</span>
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
                  <Link href={`#`} passHref>
                    Engagement
                  </Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`} passHref>
                    Sangeet & Mehendi
                  </Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`} passHref>
                    Wedding/ Bridal
                  </Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`} passHref>
                    Cocktail & Party
                  </Link>
                </li>
                <li className="my-4 hover:text-base active:text-base transition-transform">
                  <Link href={`#`} passHref>
                    Day to Day Wear
                  </Link>
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
              <span>SIZE</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
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

      <Disclosure>
        {({ open }) => (
          <div className="border border-gray-200 my-5">
            <Disclosure.Button className="focus:outline-none flex w-full justify-between p-4 text-left text-sm font-semibold text-gray-800 hover:bg-gray-200">
              <span>COLOR</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-gray-800`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-sm text-gray-700 font-medium ">
              <div className="flex flex-row border border-gray-200 divide-x-2 ">
                <div className="basis-1/4 grid place-items-center aspect-square p-2">
                  <div className="bg-black w-full h-full"></div>
                </div>
                <div className="basis-1/4 grid place-items-center aspect-square p-2">
                  <div className="bg-red-500 w-full h-full"></div>
                </div>
                <div className="basis-1/4 grid place-items-center aspect-square p-2">
                  <div className="bg-yellow-500 w-full h-full"></div>
                </div>
                <div className="basis-1/4 grid place-items-center aspect-square p-2">
                  <div className="bg-slate-500 w-full h-full"></div>
                </div>
                <div className="basis-1/4 grid place-items-center aspect-square p-2">
                  <div className="bg-stone-600 w-full h-full"></div>
                </div>
                <div className="basis-1/4 grid place-items-center aspect-square p-2">
                  <div className="border w-full h-full"></div>
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
