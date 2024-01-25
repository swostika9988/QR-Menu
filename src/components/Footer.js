import React from "react";
import Image from "../assets/hi.png";
import Img from "../assets/footer.svg";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div>
        <img src={Img} alt="img" />
        <footer className="bg-blue-950 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 bg-blue-950 text-white">
            <div className="flex flex-col items-center">
              <div className="text-white">
                <img
                  className="md:py-6 px-6 h-35 w-45"
                  src={Image}
                  alt="image"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  <span>Mandikhatar, Ektabasti, Kathmandu</span>
                </div>

                <div className="flex items-center mt-2">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <span>9803019751, 984338476</span>
                </div>

                <div className="flex items-center mt-2">
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  <span>info@hamroqrmenu.com</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="font-semibold ">
                Helpful Links
                <hr className="border-t-2 w-13 mt-3 mb-3 border-blue-300" />
              </div>
              <ul className="list-none">
                <li className="mb-2">Help Center</li>
                <li className="mb-2">Tutorial video guide</li>
                <li className="mb-2">Recent Updates</li>
                <li className="mb-2">Report</li>
                <li>Talk to us</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="font-semibold">
                My Account
                <hr className="border-t-2 w-13 mt-3 mb-3 border-blue-300" />
              </div>
              <ul>
                <li>Login</li>
                <li>Register</li>
                <li>Become a Merchant</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div>
                Policies
                <hr className="border-t-2 w-13 mt-3 mb-3 border-blue-300" />
              </div>
              <ul>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="row gap-y-4">
            <hr className="my-8  border-t border-gray-700" />
            <div className="flex items-center justify-between font-bold">
              <div className="col-lg-7 col-md-12">
                <h1 className="text-lg">
                  © 2024 Digital Menu Solution Pvt.Ltd. All rights reserved.
                  Crafted by:{" "}
                  <a
                    href="https://www.ultrabyteit.com/"
                    className="text-blue-300 hover:underline"
                  >
                    ULTRABYTE
                  </a>
                </h1>
              </div>
              <div className="col-lg-5 col-md-12">
                <ul className="flex space-x-4">
                  <li className="rounded-full bg-blue-950 p-2 border-2 border-white">
                    <a href="https://www.facebook.com/HamroQrMenus">
                      <div className="border-white rounded-full p-2">
                        <CiFacebook className="text-2xl  hover:text-gray-500" />
                      </div>
                    </a>
                  </li>
                  <li className="rounded-full bg-blue-950 p-2 border-2 border-white">
                    <a href="https://www.tiktok.com/@hamro.qr.menu">
                      <div className="border-white rounded-full p-2">
                        <RiTwitterXFill className="text-2xl text-white rounded-md hover:text-blue-500" />
                      </div>
                    </a>
                  </li>
                  <li className="rounded-full bg-blue-950 p-2 border-2 border-white">
                    <a href="https://www.instagram.com/hamroqrmenu/">
                      <div className="border-white rounded-full p-2">
                        <FaInstagramSquare className="text-2xl rounded-md hover:text-pink-500" />
                      </div>
                    </a>
                  </li>
                  <li className="rounded-full bg-blue-950 p-2 border-2 border-white ">
                    <a href="https://www.linkedin.com/">
                      <div className="border-white rounded-full p-2">
                        <CiLinkedin className="text-2xl  hover:text-blue-900" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
