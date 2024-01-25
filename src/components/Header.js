import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "QR Menu", link: "/" },
    { name: "Subscription Plans", link: "/Subscription" },
    { name: "Updates", link: "/" },
    { name: "Demo Video", link: "/Demo" },
  ];
  let [isOpen, setisOpen] = useState(false);
  return (
    <div className="shadow-md w-full  top-0 left-0">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white ">
        <div className="cursor-pointer items-center">
          <img src={Logo} alt="Logo" className="w-45 h-20 text-blue" />
        </div>
        <div
          onClick={() => setisOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="font-semibold my-7 md:my-0 md:ml-8 hover:text-red-600">
              <a href="/">{link.name}</a>
            </li>
          ))}
          <button className="btn bg-red-600 hover:bg-blue-900 text-white py-1 px-3 md:ml-8 rounded md:static">
            Register
          </button>
          <button className="btn border border-red-600 hover:bg-blue-900 bg-white text-red-600 py-1 px-3 md:ml-8 rounded md:static">
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
