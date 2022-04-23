import Image from "next/image";

const Card = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-96">
        <Image
          src={`https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="mt-2 text-center px-2 font-semibold text-gray-600">Grand Matte Silver Bridal Wedding Set</h3>
      <p className="text-center mt-2 text-gray-500 text-sm">SKU: A2663R</p>
    </div>
  );
};

export default Card;
