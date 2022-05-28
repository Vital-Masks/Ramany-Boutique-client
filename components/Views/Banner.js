import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { PRODUCTS } from "../../constants/root";

const Banner = () => {
  return (
    <div className="relative h-[500px] lg:h-[800px]">
      <Image
        priority
        src={`https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80`}
        layout="fill"
        objectFit="cover"
        alt="img"
      />
      <div className="absolute top-0 left-0 h-full bg-black bg-opacity-30 text-white flex flex-col justify-center items-start w-full">
        <div className="md:w-[70%] ml-10 lg:ml-40 xl:ml-60 xl:w-[60%]">
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl tracking-wide xl:leading-snug font-extrabold">
            {" "}
            Make your Big Day More Colorful!
          </h1>
          <button className="group flex items-center gap-6 mt-4">
            <ArrowRightIcon className="w-8 h-8 bg-blue-600 rounded-full p-2" />
            <Link href={PRODUCTS} passHref>
              <p className="uppercase font-semibold tracking-widest group-hover:translate-x-2 transition-transform">
                Shop Now
              </p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
