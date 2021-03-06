import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex flex-col">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between border border-gray-200 py-2 px-4 rounded-full"
        type="button"
        data-dropdown-toggle="dropdown"
      >
        10
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {open && (
        <div
          className="absolute top-8 right-0 bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
          id="dropdown"
        >
          <ul className="py-1" aria-labelledby="dropdown">
            <li>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                10
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                20
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                30
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
