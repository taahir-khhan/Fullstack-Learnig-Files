import React from "react";

function Card() {
  return (
    <div className="max-w-sm bg-cyan-50 flex flex-col space-y-2 p-4 rounded-xl">
      <div className="mb-2 rounded-xl shadow-xl">
        <img
          src="https://plus.unsplash.com/premium_photo-1730156312766-e5ab6e27a993?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="girl holding camera"
          className="rounded-xl shadow-xl"
        />
      </div>
      <div>
        <h2 className="text-3xl font-semibold">Learning Tailwind CSS</h2>
        <p className="text-gray-500">Kudos to Hitesh Sir</p>
      </div>
    </div>
  );
}

export default Card;
