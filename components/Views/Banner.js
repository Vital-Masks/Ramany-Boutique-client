import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { PRODUCTS } from '../../constants/root';

const Banner = () => {
  return (
    <div className="relative h-[500px] lg:h-[800px]">
      <Image
        priority
        src={`https://images.unsplash.com/photo-1629231537930-c37842a36fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
        layout="fill"
        objectFit="cover"
        alt="img"
      />
      <div className="absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full text-white bg-black bg-opacity-40">
        <div className="md:w-[70%] ml-10 lg:ml-40 xl:ml-60 xl:w-[60%]">
          <h1 className="text-2xl font-extrabold tracking-wide md:text-5xl lg:text-6xl xl:text-8xl xl:leading-snug">
            {' '}
            Make your Big Day More Colorful!
          </h1>
          <button className="flex items-center gap-6 mt-4 group">
            <ArrowRightIcon className="w-8 h-8 p-2 bg-blue-600 rounded-full" />
            <Link href={PRODUCTS} passHref>
              <p className="font-semibold tracking-widest uppercase transition-transform group-hover:translate-x-2">
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
