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

  return (
    <div className={`relative lg-max:shrink-0 ${classMap[size]} h-96`}>
      <Image
        src={`/assets/categories/${index}.jpg`}
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
