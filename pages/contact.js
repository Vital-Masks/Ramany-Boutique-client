import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
      <div className="relative w-full h-[500px]">
        <Image
          priority
          src={`https://images.unsplash.com/photo-1614951841462-92cb7e25f7fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
          layout="fill"
          objectFit="cover"
          alt="cover image"
        />
        <div className="absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full text-white bg-black bg-opacity-40">
          <div className="md:w-[70%] ml-10 lg:ml-40 xl:ml-60 xl:w-[60%]">
            <h1 className="text-2xl font-extrabold tracking-wide md:text-5xl lg:text-6xl xl:text-8xl xl:leading-snug">
              {' '}
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <div className="px-4 py-10 bg-gray-100 md:py-20 md:px-10 lg:p-20">
        <h1 className="text-4xl font-semibold text-center">Get in touch.</h1>
        <div className="grid items-start max-w-5xl gap-10 mx-auto mt-10 text-center md:grid-cols-3 place-items-center md:text-left">
          <div className="w-full border-t-2">
            <h4 className="mt-1 text-xl text-gray-600">Address</h4>
            <p className="text-gray-500">
              No.15, Dubai kuruku sandhu, <br /> Dubai main road, Dubai
            </p>
          </div>
          <div className="w-full border-t-2">
            <h4 className="mt-1 text-xl text-gray-600">Contact number</h4>
            <p className="text-gray-500">+94 077 123 4567</p>
          </div>
          <div className="w-full border-t-2">
            <h4 className="mt-1 text-xl text-gray-600">Social media</h4>
            <div className="flex items-center justify-center gap-4 mt-1 md:justify-start">
              <Link href={'#'}>
                <a>
                  <BsFacebook className="w-7 h-7 text-[#4267B2]" />
                </a>
              </Link>
              <Link href={'#'}>
                <a>
                  <BsInstagram className="w-7 h-7 text-[#FD1D1D]" />
                </a>
              </Link>
              <Link href={'#'}>
                <a>
                  <BsTwitter className="w-7 h-7 text-[#1DA1F2]" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15731.087810676037!2d80.04231435!3d9.7004949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1653721592018!5m2!1sen!2slk"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
