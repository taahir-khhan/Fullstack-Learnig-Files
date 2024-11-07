import React from "react";

function Navbar() {
  return (
    <nav className="w-full h-10 flex justify-between items-center px-6 py-8 bg-indigo-100">
      <a href="#" className="text-2xl md:text-3xl font-medium tracking-[1.5px]">
        TailwindCSS
      </a>

      <ul className="md:flex hidden items-center justify-center space-x-10 font-semibold">
        <li className="hover:text-orange-400">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-orange-400">
          <a href="#">About</a>
        </li>
        <li className="hover:text-orange-400">
          <a href="#">Serices</a>
        </li>
      </ul>

      <button className="bg-orange-500 py-2 px-8 rounded-lg text-white hidden md:block">
        Login/Signup
      </button>

      <div className="md:hidden">
        <a className="text-4xl" href="#">
          &#8801;
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
