import { ShoppingCartIcon } from "@heroicons/react/solid";

const Cart = () => {
  return (
    <div className="relative cursor-pointer">
      <ShoppingCartIcon className="w-5 h-5 md:w-7 md:h-7 text-gray-500" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 border border-white rounded-full flex items-center justify-center text-xs text-white font-bold">
        5
      </span>
    </div>
  );
};

export default Cart;
