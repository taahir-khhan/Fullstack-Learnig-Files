import React from "react";

function Footer() {
  return (
    <footer className="flex flex-wrap xss:flex-col mds:flex-row  justify-around items-start p-10 bg-slate-600 text-white gap-6">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
          alt="logo"
          className="inline-block mr-2 w-20 mb-4"
        />
        <p className="inline-block text-3xl font-medium">TailwindCSS</p>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
          alt="ISO"
          className="w-16 mx-auto"
        />
      </div>

      <div>
        <h2 className="text-xl font-medium mb-1">Tailwind Quality</h2>
        <div className="bg-yellow-300 w-16 h-1 rounded-lg mb-2"></div>
        <ul>
          <li>Aboout</li>
          <li>Product</li>
          <li>Customer</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-medium mb-1">Tailwind Product</h2>
        <div className="bg-yellow-300 w-16 h-1 rounded-lg mb-2"></div>
        <ul>
          <li>Details</li>
          <li>Baby Boy</li>
          <li>Lot's of Quality product</li>
          <li>Boom boom</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-medium mb-1">Tailwind Social</h2>
        <div className="bg-yellow-300 w-16 h-1 rounded-lg mb-2"></div>
        <ul>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Blusky</li>
          <li>Discord</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
