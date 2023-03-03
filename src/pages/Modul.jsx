import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/tezos1.jpg";
import img2 from "../images/tezos2.jpg";
import img3 from "../images/tezos3.jpg";
import { TbArrowUpRight } from "react-icons/tb";

//Page list modul yang ada 
const Modul = () => {
  return (
    <>
      <div className=" py-10 px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 ">
        <div className="p-4 ">
          <h3 className=" lg:text-3xl text-3xl font-bold text-center  text-white">
            Modul
          </h3>
          <p className="text-sm lg:text-base py-2 text-center text-gray-400 mt-2">
            Pilih laluan anda untuk mempelajari asas web3!
          </p>
        </div>

        <div className="px-4 py-8 mx-2 sm:mx-auto max-w-7xl lg:py-18 ">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <div className="card cursor-pointer overflow-hidden bg-transparent bg-gray-300 bg-opacity-20 shadow-lg rounded-lg ">
              <img
                src={img1}
                className=" w-full rounded-md object-cover aspect-square"
                alt="Solana KL"
              />
              <div className="p-5 ">
                <p className="mb-1 font-bold text-white tracking-wide uppercase">
                  Pengenalan Kepada Blockchain
                </p>
                <p className="mb-3 text-gray-400 text-sm  ">
                  Belajar tentang apa itu blockchain dan ketahui apa prinsip blockchain.
                </p>
                <div className="flex items-center justify-start gap-2 mt-auto">
                  <Link
                    className="group text-yellow-400 transition-all duration-300 ease-in-out"
                    to="/prinsip_blockchain"
                  >
                    <span className=" flex items-center gap-2 bg-left-bottom bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Mula Belajar{" "}
                      <span>
                        <TbArrowUpRight />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card cursor-pointer overflow-hidden bg-transparent bg-gray-300 bg-opacity-20 shadow-lg rounded-lg ">
              <img
                src={img2}
                className=" w-full rounded-md object-cover aspect-square"
                alt="pitchIn"
              />
              <div className="p-5 ">
                <p className="mb-1 font-bold text-white tracking-wide uppercase">
                  NFT
                </p>
                <p className="mb-3 text-gray-400 text-sm ">
                  Belajar bagaimana cara untuk membeli, menjual dan mint nft.
                </p>
                <div className="flex items-center justify-start gap-2 mt-auto ">
                  <Link
                    className="group text-yellow-400 transition-all duration-300 ease-in-out"
                    to="/modulnft"
                  >
                    <span className=" flex items-center gap-2 bg-left-bottom bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Mula Belajar{" "}
                      <span>
                        <TbArrowUpRight />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card cursor-pointer overflow-hidden bg-transparent bg-gray-300 bg-opacity-20 shadow-lg rounded-lg">
              <img
                src={img3}
                className="w-full rounded-md object-cover aspect-square"
                alt="Cardano Malaysia"
              />
              <div className="p-5 ">
                <p className="mb-1 font-bold text-white tracking-wide uppercase">
                  DeFi
                </p>
                <p className="mb-3 text-gray-400 text-sm ">
                  Belajar bagaimana nak menyimpan, meminjam dan melabur aset
                  kirpto anda.
                </p>
                <div className="flex items-center justify-start gap-2 mt-auto ">
                  <Link
                    className="group text-yellow-400 transition-all duration-300 ease-in-out"
                    to="/modulnft"
                  >
                    <span className=" flex items-center gap-2 bg-left-bottom bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Mula Belajar{" "}
                      <span>
                        <TbArrowUpRight />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modul;
