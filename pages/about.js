import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="relative w-full h-[500px]">
        <Image
          priority
          src={`https://images.unsplash.com/photo-1614951841462-92cb7e25f7fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
          layout="fill"
          objectFit="cover"
          alt="banner"
        />
        <div className="absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full text-white bg-black bg-opacity-40">
          <div className="md:w-[70%] ml-10 lg:ml-40 xl:ml-60 xl:w-[60%]">
            <h1 className="text-2xl font-extrabold tracking-wide md:text-5xl lg:text-6xl xl:text-8xl xl:leading-snug">
              {' '}
              About Us
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="flex max-w-screen-lg gap-3 px-5 mx-auto overflow-x-scroll md:px-20 xl:px-0 2xl:max-w-screen-xl lg:overflow-hidden">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="py-4">
              <h1 className="text-3xl font-bold leading-loose">Who We Are?</h1>
              <p className="text-stone-800">
                You can also use variant modifiers to target media queries like
                responsive breakpoints, dark mode, prefers-reduced-motion, and
                more. For example, use md:aspect-square to apply the
                aspect-square utility at only medium screen sizes and above.
              </p>
            </div>
            <div className="relative w-full aspect-square">
              <Image
                src={`https://images.unsplash.com/photo-1615886753866-79396abc446e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                layout="fill"
                objectFit="cover"
                alt="cover image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
