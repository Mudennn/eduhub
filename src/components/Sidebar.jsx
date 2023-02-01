import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
import Logo from "../images/Sekolah.png"

const Sidebar = () => {
  const menus = [
    { name: "1.1 Pengenalan", link: "/modulnft" },
    { name: "1.2 Download Metamask", link: "/modulnft" },
    { name: "Quiz", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

<div>
      <div className="w-full p-6 sm:w-60 bg-gray-900 text-gray-100 md:min-h-screen z-10 ">
        <div className="">
          <ul className=" hidden md:block">
            <li>
              <Link
                to="/modul"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                Modul
              </Link>
            </li>
            <li>
              <Link
                to="/ama"
                
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                AMA
              </Link>
            </li>
            <li>
              <Link
                to="/launchpad"
                
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                Launchpad
              </Link>
            </li>
            <li>
              <Link
                to="/hubungikami"
                
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
          
          <div className="md:hidden flex justify-center ">
            <button
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-[110px] left-0 p-5  w-full z-20 ">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex justify-end mb-4">
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/modul"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                        >
                          Modul
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/ama"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                        >
                          AMA
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/launchpad"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                        >
                          Launchpad
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/hubungikami"
        
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200"
                        >
                          Hubungi Kami
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className={` ${open ? "w-56" : "w-0 "} bg-gray-900 lg:h-screen p-5  pt-8 relative duration-300 z-10`}>
        <BsArrowLeftCircle
          className={`absolute cursor-pointer -right-3 top-9 w-7  ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Digital Wallet
          </h1>
        </div>
        <ul className="pt-6">
          {menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.name}
              </span>
            </li>
          ))}
        </ul>
      </div> */}

      {/* <div className={`${open ? "w-72": "w-20"}relative w-full p-6 sm:w-60 bg-gray-900 text-gray-100 min-h-screen z-10`}>
        <BsArrowLeftCircle className="cursor-pointer absolute -right-2"/>
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
              Digital Wallet
            </h2>
            <div className="flex flex-col space-y-1">
              <Link to="/modulnft" className="hover:text-yellow-400">
                1.1 Pengenalan
              </Link>
              <Link to="/" className="hover:text-yellow-400">
                1.2 Download Metamask 
              </Link>
            </div>
          </div>
        </nav>
      </div> */}
    </div>
  );
};

export default Sidebar;
