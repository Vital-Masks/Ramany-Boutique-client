import { ChevronUpIcon, HomeIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

const MobileAside = ({ open }) => {
  return (
    <>
        <div className="bg-white bg-opacity-95 absolute left-0 top-14 w-full z-10">
          <Disclosure>
            {({ open }) => (
              <div className="border border-gray-200">
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
        </div>
     
    </>
  );
};

export default MobileAside;
