import Image from 'next/image';

const CategoryCard = ({ size, title, index }) => {
  const classMap = {
    large: ['w-full lg:w-2/3'],
    small: ['w-full md:w-2/3 lg:w-1/3'],
  };

  const textWidth = {
    large: ['w-[60%]'],
    small: ['w-[80%]'],
  };

  const images = [
    {
      img: 'https://images.unsplash.com/photo-1633685894176-9f715a092b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      img: 'https://images.unsplash.com/photo-1615886753866-79396abc446e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ];

  return (
    <div className={`relative lg-max:shrink-0 ${classMap[size]} h-96`}>
      <Image
        src={images[index].img}
        layout="fill"
        objectFit="cover"
        objectPosition={'0% 30%'}
        alt="img"
      />

      <div className="absolute top-0 flex w-full h-full bg-black bg-opacity-50">
        <div className="self-end p-10 text-white">
          <h1
            className={`text-xl tracking-wider uppercase font-bold ${textWidth[size]}`}
          >
            {title}
          </h1>
          <button className="px-4 py-2 mt-5 text-sm font-bold text-black transition-transform bg-white rounded-full hover:-translate-y-1">
            Show Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
