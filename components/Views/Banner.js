import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { JEWELLERIES } from '../../constants/root';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper';

const Banner = () => {
  return (
    <div className="relative h-[500px] 2xl:h-[800px] -top-24">
      <Swiper
        // pagination={{
        //   dynamicBullets: true,
        // }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full mySwiper"
      >
        <SwiperSlide>
          <Image
            priority
            src="/assets/banner/1.jpg"
            layout="fill"
            objectFit="cover"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="/assets/banner/2.jpg"
            layout="fill"
            objectFit="cover"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="/assets/banner/3.jpg"
            layout="fill"
            objectFit="cover"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="/assets/banner/4.jpg"
            layout="fill"
            objectFit="cover"
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-0 left-0 z-40 flex flex-col items-start justify-end w-full h-full pb-20 text-white bg-black bg-opacity-40">
        <div className="flex justify-between w-full max-w-6xl px-5 mx-auto 2xl:max-w-screen-xl md:px-20 xl:px-0">
          <div>
            {' '}
            <h1 className="text-3xl font-extrabold tracking-wide lg:text-6xl xl:text-7xl xl:leading-snug">
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
