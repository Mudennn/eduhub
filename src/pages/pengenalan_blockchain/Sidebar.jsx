import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiCloseFill } from "react-icons/ri";

// Side bar untuk pengenalan Blockchain
const Sidebar = () => {
  const menus = [
    { name: "Prinsip Blockchain", link: "/prinsip_blockchain" },
    { name: "Blockchain adalah konsep", link: "/blockchain_adalah_konsep" },
    { name: "Artikel: Fiat vs Kripto", link: "/fiat_vs_kripto" },
    { name: "Quiz", link: "/" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="w-full lg:w-[300px] p-6   text-gray-100 lg:min-h-screen z-10 ">
        <div>
          <h2 className="hidden lg:block lg:text-2xl font-semibold tracking-wide text-yellow-400">Blockchain</h2>
          <hr className="hidden lg:block my-2"/>
          {menus.map((menu, i) => (
            <nav>
              <ul key={i}>
                <li className=" hidden lg:block mt-3">
                  <Link
                    to={menu.link}
                    className="text-gray-100 transition-colors duration-200 hover:text-yellow-400"
                  >
                    {menu.name}
                  </Link>
                </li>
              </ul>
            </nav>
          ))}
          {/* Topik Button  */}
          <div className="lg:hidden flex justify-start ">
            <button
              className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <div className="flex items-center">
                <span className="md:text-xl sm:text-md">Topik</span>{" "}
                <RiArrowDropDownLine className="text-3xl" />
              </div>
            </button>

            {/* Mobile Navbar  */}
            {isMenuOpen && (
              <div className="absolute top-[110px] left-0 p-5  w-full z-20 ">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between  mb-2 ">
                    <h2 className=" font-semibold tracking-wider text-yellow-400 uppercase">Blockchain</h2>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 --mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <RiCloseFill className="text-gray-600 text-3xl" />
                      </button>
                    </div>
                  </div>
                  <hr />
                  {menus.map((menu, i) => (
                    <nav>
                      <ul key={i}>
                        <li className=" mt-4">
                          <Link
                            to={menu.link}
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-yellow-400"
                          >
                            {menu.name}
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
