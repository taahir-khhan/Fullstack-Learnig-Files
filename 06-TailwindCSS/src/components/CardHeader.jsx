import React from "react";

function CardHeader({ title }) {
  return (
    <div className="w-full flex flex-col space-y-4 items-center justify-center">
      <h2 className="text-white text-3xl font-bold md:text-5xl">{title}</h2>
      <div className="bg-yellow-400 h-[5px] w-[200px] rounded-lg"></div>
    </div>
  );
}

export default CardHeader;
