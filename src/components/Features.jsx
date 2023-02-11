import React from "react";
// import { RiComputerLine, RiBookLine, RiWalletLine } from "react-icons/ri";
import World from "../images/Saly-44.png";
import Calender from "../images/Saly-42.png";
import Rocket from "../images/Saly-43.png";
import Correct from "../images/Saly-26.png";
import Money from "../images/Saly-45.png";
import PC from "../images/Other 07.png";
import Cart from "../images/Other 16.png";

const Features = () => {
  return (
    <div>
      <div className="px-4 py-16 my-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24 relative">
      <div className="ellipse3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:block hidden"></div>

        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12 relative ">
          <h2 className="max-w-lg mb-6 font-sans text-3xl px-5 sm:px-0 font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            Ciri-Ciri Utama Kurikulum Kami
          </h2>
        </div>
        
        <div className="relative grid pt-10 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 z-10">

          {/* <div className="p-5 text-center">
            <RiComputerLine className="text-3xl text-white mx-auto mb-5"/>
            <div className="mb-2">
              <p className="text-lg font-bold leading-5 text-white">100% Online</p>
            </div>
            <p className="text-sm text-gray-500">
              Mula dan belajar mengikut masa anda sendiri.
            </p>
          </div>
          <div className="p-5 text-center">
            <RiBookLine className="text-3xl text-white mx-auto mb-5"/>
            <div className="mb-2">
              <p className="text-lg font-bold leading-5 text-white">Kualiti</p>
            </div>
            <p className="text-sm text-gray-500">
              Kami mencipta modul pendidikan web3 yang berkualiti tinggi.
            </p>
          </div>
          <div className="p-5 text-center">
            <RiWalletLine className="text-3xl text-white mx-auto mb-5"/>
            <div className="mb-2">
              <p className="text-lg font-bold leading-5 text-white">100% Percuma!</p>
            </div>
            <p className="text-sm text-gray-500">
              Modul ini percuma untuk anda semua!
            </p>
          </div> */}

          {/* Left Column  */}
          <div className="md:text-end text-white grid gap-y-14 mb-5 md:mb-0">
            <div className="flex items-center lg:ml-10 flex-row-reverse md:flex-row">
              <div>
                <p className="font-bold">100% Online</p>
                <p className="text-gray-400">
                  Mula dan belajar mengikut masa anda sendiri
                </p>
              </div>
              <img src={PC} alt="" className="w-10 h-10 ml-3 lg:mr-0 mr-3" />
            </div>
            <div className="flex items-center lg:mr-10 lg:ml-10 flex-row-reverse md:flex-row">
              <div>
                <p className="font-bold">100% Online</p>
                <p className="text-gray-400">
                  Mula dan belajar mengikut masa anda sendiri
                </p>
              </div>
              <img src={Rocket} alt="" className="w-10 h-10 ml-3 lg:mr-0 mr-3" />
            </div>
            <div className="flex items-center lg:ml-10 flex-row-reverse md:flex-row">
              <div>
                <p className="font-bold">100% Online</p>
                <p className="text-gray-400">
                  Mula dan belajar mengikut masa anda sendiri
                </p>
              </div>
              <img src={Calender} alt="" className="w-10 h-10 ml-3 lg:mr-0 mr-3" />
            </div>
          </div>
          {/* Center Column  */}
          <div className="relative">
            {/* <div className="ellipse3 -z-0  lg:block hidden"></div> */}
            {/* <div className="absolute w-72 h-72 bg-purple-300 rounded-full left-14 filter blur-xl "></div> */}
            <img src={World} alt="" className="relative md:w-[70%] w-[50%] mx-auto lg:mt-0 md:mt-[50%] " />
          </div>
          {/* Right Column  */}
          <div className="lg:text-start justify-center text-white grid gap-y-14 mt-5 md:mt-0">
            <div className="flex items-center lg:mr-10">
            <img src={Money} alt="" className="w-10 h-10 mr-3" />
              <div>
                <p className="font-bold">100% Percuma!</p>
                <p className="text-gray-400">
                Modul ini percuma untuk anda semua!
                </p>
              </div>
              
            </div>
            <div className="flex items-center lg:ml-10 ">
            <img src={Correct} alt="" className="w-10 h-10 mr-3" />
              <div>
                <p className="font-bold">Kualiti</p>
                <p className="text-gray-400">
                Kami mencipta modul pendidikan web3 yang berkualiti tinggi.
                </p>
              </div>
              
            </div>
            <div className="flex items-center lg:mr-10">
            <img src={Cart} alt="" className="w-10 h-10 mr-3" />
              <div>
                <p className="font-bold">100% Online</p>
                <p className="text-gray-400">
                  Mula dan belajar mengikut masa anda sendiri
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
