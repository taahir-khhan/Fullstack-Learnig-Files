import React from "react";

function Card2({ imgUrl, content, title, className }) {
  return (
    <div
      className={` w-60 flex flex-col items-center justify-center space-y-2 ${className}`}
    >
      <img className="w-40 h-40" src={imgUrl} alt="images" />
      <p className="text-white text-3xl font-medium">{title}</p>
      <p className="text-gray-400 text-xl">{content}</p>
    </div>
  );
}

export default Card2;
