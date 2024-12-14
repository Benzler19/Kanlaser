import React from "react";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
      {/* Glass Effect Header */}
      <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-lg m-5">
        <div className="mx-auto max-w-screen-xl p-5 flex items-center justify-between">
          {/* Logo */}
          <span className="font-bold text-[24px] text-white sm:text-left dark:text-gray-400">
            Kan Laser
          </span>

          {/* Menu */}
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="mb-6 mt-0 w-[80%] mx-auto border-t-2 border-gray-300"></hr>
    </div>
  );
}
