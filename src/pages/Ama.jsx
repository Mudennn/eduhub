import React from "react";
import cardano from '../images/Cardano.jpeg'
import metaone from '../images/Metaone.jpeg'
import nftpangolin from '../images/NFTPangolin.jpeg'
import pitchin from '../images/pitchin.jpeg'
import solana from '../images/solana.jpeg'


const Ama = () => {
  return (
      <div className="py-20 px-4   mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 ">
        <div className="p-4 ">
          <h3 className=" lg:text-3xl text-3xl font-bold  text-white">
            Ask Me Anything Session!
          </h3>
          <p className="text-sm lg:text-base py-2  text-gray-400 mt-2">
            Sesi AMA yang pernah kami jalankan.
          </p>
        </div>

        <div className="px-4 py-8 mx-2 sm:mx-auto max-w-7xl lg:py-18 ">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <div className="card cursor-pointer overflow-hidden bg-white shadow-lg rounded-lg ">
              <img
                src={solana}
                className=" w-full rounded-md object-cover aspect-square"
                alt="Solana KL"
              />
              <div className="p-5 flex justify-between items-center my-auto">
                <p className=" font-bold text-[#13133e] tracking-wide uppercase">
                  Solana KL
                </p>
                <div className="flex items-center justify-start ">
                  <a
                    href="https://www.youtube.com/live/p3lzcs0n_No?feature=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black px-5 py-1 rounded-lg font-semibold text-sm"
                  >
                    Tonton
                  </a>
                </div>
              </div>
            </div>

            <div className="card cursor-pointer overflow-hidden bg-white shadow-lg rounded-lg ">
              <img
                src={pitchin}
                className=" w-full rounded-md object-cover aspect-square"
                alt="pitchIn"
              />
              <div className="p-5 flex justify-between items-center ">
                <p className=" font-bold text-[#13133e] tracking-wide uppercase">
                  pitchIn : IEO di Malaysia
                </p>
                <div className="flex items-center justify-start">
                  <a
                    href="https://youtu.be/JSVa2TPSf9c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black px-5 py-1 rounded-lg font-semibold text-sm"
                  >
                    Tonton
                  </a>
                </div>
              </div>
            </div>

            <div className="card cursor-pointer overflow-hidden bg-white shadow-lg rounded-lg">
              <img
                src={cardano}
                className="w-full rounded-md object-cover aspect-square"
                alt="Cardano Malaysia"
              />
              <div className="p-5 flex justify-between items-center ">
                <p className="mb-1 font-bold text-[#13133e] tracking-wide uppercase">
                  Cardano
                </p>
                <div className="flex items-center justify-start ">
                  <a
                    href="https://www.youtube.com/live/VxW4lodb_p4?feature=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black px-5 py-1 rounded-lg font-semibold text-sm"
                  >
                    Tonton
                  </a>
                </div>
              </div>
            </div>

            <div className="card cursor-pointer overflow-hidden bg-white shadow-lg rounded-lg">
              <img
                src={nftpangolin}
                className="w-full rounded-md object-cover aspect-square"
                alt="NFTPangolin dan Zetrix Blockchain"
              />
              <div className="p-5 flex justify-between items-center">
                <p className="font-bold text-[#13133e] tracking-wide uppercase">
                  NFTPangolin dan Zetrix Blockchain
                </p>
                <div className="flex items-center justify-start  ">
                  <a
                    href="https://youtu.be/SiyswQMdj3A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black px-5 py-1 rounded-lg font-semibold text-sm"
                  >
                    Tonton
                  </a>
                </div>
              </div>
            </div>

            <div className="card cursor-pointer overflow-hidden bg-white shadow-lg rounded-lg">
              <img
                src={metaone}
                className="w-full rounded-md object-cover aspect-square"
                alt="Metaone"
              />
              <div className="p-5 flex justify-between items-center">
                <p className="mb-1 font-bold text-[#13133e] tracking-wide uppercase">
                  Metaone
                </p>
                <div className="flex items-center justify-start ">
                  <a
                    href="https://www.youtube.com/live/_YIdKbI25oo?feature=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black px-5 py-1rounded-lg font-semibold text-sm"
                  >
                    Tonton
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center mt-10 w-full">
            <button className="px-5 py-2 bg-yellow-500 rounded-lg font-semibold text-sm">
              Lihat Semua Laluan
            </button>
          </div> */}
        </div>
      </div>
  );
};

export default Ama;
