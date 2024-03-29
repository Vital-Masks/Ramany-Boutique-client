import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Head>
        <title>The Ramya Boutique</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="relative w-full h-[500px] 2xl:h-[700px]">
        <Image
          priority
          src={'/assets/5E7A3876.jpg'}
          layout="fill"
          objectFit="cover"
          alt="banner"
        />
        <div className="absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full text-white bg-black bg-opacity-40">
          <div className="max-w-6xl mx-auto justify-between flex w-full px-5 2xl:max-w-screen-xl md:px-20 xl:px-0">
            <h1 className="text-5xl font-extrabold tracking-wide  lg:text-6xl xl:text-7xl xl:leading-snugg">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="flex max-w-6xl gap-3 px-5 mx-auto overflow-x-scroll 2xl:max-w-7xl md:px-20 xl:px-0 lg:overflow-hidden">
          <div className="grid items-center grid-cols-1 gap-20 lg:grid-cols-2">
            <div className="py-4">
              <h1 className="text-3xl font-bold leading-loose">Who We Are?</h1>
              <p className="mt-2 text-stone-800">
                The Ramya boutique has formed long-lasting connections with
                clients by base to form founded on trust, excelling in service,
                and offering customers attractive jewels and one-of-a-kind
                handcrafted pieces of jewelry. We embrace diversity and
                versatility in the world of fashion and make it our aim to
                fulfill the ever-evolving taste requirements of our customers.
                Our mission is to constantly surpass your expectations regarding
                the level of engagement and connectedness that you have of
                jewelers, and we want to accomplish this by providing the
                highest possible level of customer service. Our owner Ramani has
                been brilliant in providing you with the best-ever jewelries. As
                a solo entrepreneur, she has mastered everything in the art
                behind jewelries, crafts, design, and fashion. Her efforts in
                fulfilling your needs with the exceptional handiwork that we do
                have earned us recognition not just in Canada but also all
                across the world. We craft heirloom-worthy pieces of personal
                adornment by utilizing the purest kind of gold combined with
                zircons and precious stones of the highest quality. Customers
                who want wonderful adornments for their special day to celebrate
                remarkable achievements may enjoy the benefits of the many
                personalized services that we provide here at our business.
              </p>
            </div>
            <div className="relative w-full m-5 aspect-square">
              <Image
                src={'/assets/NIC18490.jpg'}
                priority
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
