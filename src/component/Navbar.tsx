import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md fixed w-full top-0 z-50">
      <div className="flex items-center gap-2">
        <img src="/assets/logo.svg" alt="Logo" className="h-8" />
        <span className="text-xl font-semibold text-orange-700">SlingShot</span>
      </div>
      <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Case Studies</li>
        <li>Our Client</li>
        <li>How it Works</li>
        <li>FAQ</li>
      </ul>
      <button className="bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-lg">
        Contact us
      </button>
    </nav>
  );
};

export default Navbar;
