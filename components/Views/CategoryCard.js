import Image from 'next/image';
import Link from 'next/link';
import { JEWELLERIES } from '../../constants/root';

const CategoryCard = ({ size, title, index }) => {
  const classMap = {
    large: ['w-full lg:w-2/3'],
    small: ['w-full md:w-2/3 lg:w-1/3'],
  };

  const textWidth = {
    large: ['w-[60%]'],
    small: ['w-[80%]'],
  };

  const categoryImage = (category) => {
    switch (category) {
      case 'JEWELLERYCATEGORY':
        return 'https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80';
      case 'CLOTHINGCATEGORY':
        return 'https://images.unsplash.com/photo-1615886753866-79396abc446e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
      case 'OCCASIONTYPE':
        return 'https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
      default:
        break;
    }
  };

  return (
    <div className={`relative lg-max:shrink-0 ${classMap[size]} h-96`}>
      <Image
        src={categoryImage(title.toUpperCase())}
        layout="fill"
        objectFit="cover"
        objectPosition={'0% 30%'}
        alt="img"
      />

      <div className="absolute top-0 flex w-full h-full bg-black bg-opacity-50">
        <div className="self-end p-10 text-white">
          <h1
            className={`text-xl tracking-wider uppercase font-bold mb-5 ${textWidth[size]}`}
          >
            {title}
          </h1>
          <Link href={JEWELLERIES}>
            <a className="px-4 py-2 mt-5 text-sm font-bold text-black transition-transform bg-white rounded-full hover:-translate-y-1">
              Show Collection
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
