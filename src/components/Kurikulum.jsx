import React from "react";
import img1 from "../images/mdec.png";
import img2 from "../images/RHB.jpg";
import img3 from "../images/teztrack.png";
import BG from "../images/Mask group.png";

const Kurikulum = () => {
  return (
    <div>
      
    <div className="py-20 relative">
      <div className=" mx-auto p-4 ">
        <h3 className=" lg:text-3xl text-3xl font-bold text-center text-white">
          Terokai Lalu Pembelajaran Kami
        </h3>
        <p className="text-sm lg:text-base py-2 text-center text-gray-400 mt-2">
          Pilih laluan anda untuk mempelajari asas web3!
        </p>
      </div>

      <div className="px-3 py-10 mx-2 sm:mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-18 ">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-gray-100 bg-opacity-5 shadow-lg rounded-lg ">
            <img
              src={img1}
              className="h-40 w-full rounded-md object-cover aspect-video"
              alt="teztrack"
            />
            <div className="p-5 ">
              <p className="mb-3 font-bold text-white tracking-wide uppercase">
                Pemulaan ke Web3
              </p>
              <p className="mb-3 text-gray-400 text-sm">
                Mulakan dari sini jika anda baru menggunakan web3.
              </p>
              <div className="flex items-center justify-start gap-2 mt-4 ">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-yellow-500 rounded-lg font-semibold text-sm"
                >
                  Mula Belajar
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden transition-shadow duration-300 bg-gray-100 bg-opacity-5 shadow-lg rounded-lg ">
            <img
              src={img2}
              className="h-40 w-full rounded-md object-cover aspect-video"
              alt="teztrack"
            />
            <div className="p-5 ">
              <p className="mb-3 font-bold text-white tracking-wide uppercase">
                NFT
              </p>
              <p className="mb-3 text-gray-400 text-sm">
                Belajar bagaimana cara untuk membeli, menjual dan mint nft.
              </p>
              <div className="flex items-center justify-start gap-2 mt-4 ">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-yellow-500 rounded-lg font-semibold text-sm"
                >
                  Mula Belajar
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden transition-shadow duration-300 bg-gray-100 bg-opacity-5 shadow-lg rounded-lg">
            <img
              src={img3}
              className="h-40 w-full rounded-md object-cover aspect-video"
              alt="teztrack"
            />
            <div className="p-5 ">
              <p className="mb-3 font-bold text-white tracking-wide uppercase">
                DeFi
              </p>
              <p className="mb-3 text-gray-400 text-sm">
                Belajar bagaimana nak menyimpan, meminjam dan melabur aset
                kirpto anda.
              </p>
              <div className="flex items-center justify-start gap-2 mt-4 ">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2  text-yellow-500 rounded-lg font-semibold text-sm"
                >
                  Mula Belajar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 w-full">
          <button className="px-5 py-2 bg-yellow-500 rounded-lg font-semibold text-sm">
            Lihat Semua Laluan
          </button>
        </div>
      </div>
    </div>
    <img src={BG} alt="" className="absolute -mt-[45%] rotate-180 left-0 hidden lg:block" />
    </div>
  );
};

export default Kurikulum;
