import Image from "next/image";
import Link from "next/link";

const Card = ({id,name,code,image}) => {
  return (
    <Link href={`/products/${id}`} passHref>
      <div className="w-full cursor-pointer">
        <div className="relative w-full h-96">
          <Image
            src={image === 'url' ? `https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80` : image}
            layout="fill"
            objectFit="cover"
            alt="img"
          />
        </div>
        <h3 className="mt-2 text-center px-2 font-semibold text-gray-600">
          {name}
        </h3>
        <p className="text-center mt-2 text-gray-500 text-sm">{code}</p>
      </div>
    </Link>
  );
};

export default Card;
