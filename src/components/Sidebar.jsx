import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai"
import {BsArrowRightCircle, BsArrowLeftCircle} from "react-icons/bs"
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  const menus =[
    {name:"1.1 Pengenalan", link:'/modulnft'},
    {name:"1.2 Download Metamask", link:'/modulnft'},
    {name:"Quiz", link:'/'},
  ]
  const [open, setOpen] = useState(true)

  return (
    <div>
      <div className="relative w-full p-6 sm:w-60 bg-gray-900 text-gray-100 min-h-screen">
        <BsArrowLeftCircle className="cursor-pointer absolute -right-2.5"/>
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
      </div>
     </div>
  );
};

export default Sidebar;
