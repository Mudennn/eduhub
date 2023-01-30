import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="w-full p-6 sm:w-60 bg-gray-900 text-gray-100 ">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
              Digital Wallet
            </h2>
            <div className="flex flex-col space-y-1">
              <Link to="/modulnft" className="hover:text-yellow-400">
                1.1 Introduction
              </Link>
              <Link to="/" className="hover:text-yellow-400">
                1.2 Download Metamask 
              </Link>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
