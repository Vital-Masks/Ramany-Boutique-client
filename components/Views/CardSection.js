import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="px-5 md:px-20 xl:px-0 max-w-screen-lg 2xl:max-w-screen-xl mx-auto my-20">
        <div className="flex items-center justify-between my-10">
            <p className="text-lg font-semibold">Selected just for you</p>
            <button className="border border-gray-400 p-2 px-4 rounded-full">
                Show more
            </button>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 gap-y-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardSection;
