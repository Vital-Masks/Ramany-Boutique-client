import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { JEWELLERIES, PRODUCTS } from '../../constants/root';

const Banner = () => {
  return (
    <div className="relative h-[500px] lg:h-[800px]">
      <Image
        priority
        src={`/assets/bannerImg.jpg`}
        layout="fill"
        objectFit="cover"
        alt="banner"
      />
      <div className="absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full text-white bg-black bg-opacity-40">
        <div className="md:w-[70%] ml-10 lg:ml-24 xl:ml-32 xl:w-[60%]">
          <h1 className="text-2xl font-extrabold tracking-wide md:text-5xl lg:text-6xl xl:text-7xl xl:leading-snug">
            {' '}
            Make your <br /> Big Day <br /> More Colorful!
          </h1>
          <button className="flex items-center gap-6 mt-4 group">
            <ArrowRightIcon className="w-8 h-8 p-2 bg-blue-600 rounded-full" />
            <Link href={JEWELLERIES} passHref>
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
