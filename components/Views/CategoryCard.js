import Image from "next/image";

const CategoryCard = ({ size, title }) => {
  const classMap = {
    large: ["w-full md:w-2/3"],
    small: ["w-full md:w-1/3"],
  };

  const textWidth = {
    large: ["w-[60%]"],
    small: ["w-[80%]"],
  };

  return (
    <div className={`relative lg-max:shrink-0 ${classMap[size]} h-96`}>
      <Image
        src={`https://images.unsplash.com/photo-1571908598182-a3233d316b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
        layout="fill"
        objectFit="cover"
        objectPosition={"0% 30%"}
        alt="img"
      />
      <div className="absolute top-0 bg-black bg-opacity-50 h-full w-full flex">
        <div className="p-10 self-end text-white">
          <h1 className={`text-xl tracking-wider uppercase font-bold ${textWidth[size]}`}>
            {title}
          </h1>
          <button className="mt-5 bg-white px-4 py-2 rounded-full text-black text-sm font-bold hover:-translate-y-1 transition-transform">
            Show Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
