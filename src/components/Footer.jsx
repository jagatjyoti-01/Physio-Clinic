import React from "react";
import logo from "../image/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f766e] text-[#fff] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Friends Physiotherapy Hospital"
            className="w-50 h-20"
          />
          <h2 className="text-xl font-bold mt-3 text-center md:text-left">
            FRIENDS PHYSIOTHERAPY HOSPITAL
          </h2>
          <p className="text-center md:text-left text-sm mt-2">
            Expert healthcare Physiotherapy provider specializing in diagnosing
            and treating musculoskeletal disorders for enhanced patient
            well-being
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-teal-600 hover:text-[#2d6c5b]">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-teal-600 hover:text-[#2d6c5b]">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="#" className="text-teal-600 hover:text-[#2d6c5b]">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-teal-600 hover:text-[#2d6c5b]">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return And Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Hospital Details */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Hospital</h3>
          <p className="text-sm">
            <span className="font-bold">Address:</span> No.1 ICICI Bank
            Building, Sathy Road, Saravanampatti, Coimbatore - 641035
          </p>
          <p className="text-sm mt-2">
            <span className="font-bold">Phone:</span> +91 4893744389, +91
            7598475398
          </p>
          <p className="text-sm mt-2">
            <span className="font-bold">Email:</span>{" "}
            <a href="mailto:friendsphysio@gmail.com" className="hover:underline">
              dfkjsbvfbsbs@gmail.com
            </a>
          </p>
          <p className="text-sm mt-2">
            <span className="font-bold">Hours:</span> Mon - Sat: 8:00 AM - 9:00
            PM, Sun: 9:00 AM - 1:00 PM
          </p>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-grey-300">
        © 2025 · Friends Physiotherapy Hospital by ZHAR TECH
      </div>
    </footer>
  );
};

export default Footer;
