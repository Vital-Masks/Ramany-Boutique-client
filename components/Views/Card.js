import Image from 'next/image';

const Card = ({ name, code, image, type }) => {
  const srcImage = image?.base64URL ?? '/no-image.png';

  return (
    <div className="relative w-full cursor-pointer">
      {type?.toLowerCase() === 'rent' && (
        <span className="absolute top-2 right-2 z-10 bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
          {type}
        </span>
      )}

      <div className="relative w-full h-96">
        <Image src={srcImage} layout="fill" objectFit="cover" alt="img" />
      </div>
      <h3 className="px-2 mt-2 font-semibold text-center text-gray-600">
        {name}
      </h3>
      <p className="mt-2 text-sm text-center text-gray-500">{code}</p>
    </div>
  );
};

export default Card;
