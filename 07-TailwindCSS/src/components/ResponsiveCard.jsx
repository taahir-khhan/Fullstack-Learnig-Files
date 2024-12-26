import React from "react";

function ResponsiveCard() {
  return (
    <div className="w-[20rem] h-50 bg-slate-200 text-black rounded-lg overflow-hidden flex flex-col md:flex md:flex-row md:space-x-2 md:w-[630px] ">
      <img
        src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="mountain image"
        className="max-w-xs object-cover"
      />
      <div className="p-4">
        <h1 className="text-[25px] font-semibold mb-2">Responsive Component</h1>
        <p className="tracking-tight leading-7">
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className="bg-yellow-500 p-[2px]">Descipline</span> elit. Modi,
          id! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          <span className="bg-yellow-500 p-[2px]">Descipline</span> elit.
          Dolore, similique.
        </p>
      </div>
    </div>
  );
}

export default ResponsiveCard;
