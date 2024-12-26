import React from "react";

function Header() {
  return (
    <div className="w-full">
      <img
        className="w-full object-cover hidden md:block"
        src="https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Beautiful mountain image"
      />
      <img
        className="w-full md:hidden"
        src="https://images.pexels.com/photos/29267769/pexels-photo-29267769/free-photo-of-close-up-of-pine-cones-on-evergreen-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Home in europe"
      />
    </div>
  );
}

export default Header;
