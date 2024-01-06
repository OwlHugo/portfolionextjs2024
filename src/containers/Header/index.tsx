import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full md:px-30 mb-2">
      <div style={{ backgroundColor: "#1a202c" }} className="shadow-md bg-dark-900 rounded-lg w-full h-20 p-2 flex justify-center items-center space-y-2">
        <div className="flex justify-center items-center space-x-4">
          <div className="relative">
            <button className={`rounded-lg mr-2 flex items-center justify-center p-4 transition duration-300 transform hover:scale-110 bg-white`}>
              <FaHome className="text-red-600" />
            </button>
          </div>
          <div className="relative">
            <button className={`rounded-lg mr-2 flex items-center justify-center p-4 transition duration-300 transform hover:scale-110 bg-white`}>
              <FaUser className="text-red-600" />
            </button>
          </div>
          <div className="relative">
            <button className={`rounded-lg mr-2 flex items-center justify-center p-4 transition duration-300 transform hover:scale-110 bg-white`}>
              <FaProjectDiagram className="text-red-600" />
            </button>
          </div>
          <div className="border-l border-gray-800 h-6 mx-4"></div>
          <a href="https://www.linkedin.com/in/hugo-adriano-de-oliveira-07b46321b/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <div className="relative">
              <button className={`rounded-lg mr-2 flex items-center justify-center p-4 transition duration-300 transform hover:scale-110 bg-white`}>
                <FaLinkedin className="text-red-600" />
              </button>
            </div>
          </a>
          <a href="https://github.com/HugoOwl" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <div className="relative">
              <button className={`rounded-lg mr-2 flex items-center justify-center p-4 transition duration-300 transform hover:scale-110 bg-white`}>
                <FaGithub className="text-black" />
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
