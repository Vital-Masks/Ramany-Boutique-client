import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Banner = () => {
  return (
    <div className="relative h-[500px] lg:h-[800px]">
      <Image
        src={`https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 h-full bg-black bg-opacity-60 text-white flex flex-col justify-center items-start w-full">
        <div className="md:w-[70%] ml-10 lg:ml-40 xl:w-[50%]">
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl tracking-wide xl:leading-snug font-extrabold"> Make your Big Day More Colorful!</h1>
            <button className="group flex items-center gap-6 mt-4">
              <ArrowRightIcon className="w-8 h-8 bg-blue-600 rounded-full p-2" />
              <p className="uppercase font-semibold tracking-widest group-hover:translate-x-2 transition-transform">Shop Now</p>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
