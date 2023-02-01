import React from 'react'
import { Link } from 'react-router-dom'
import cardano from '../images/Cardano.jpeg'
import pitchin from '../images/pitchin.jpeg'
import solana from '../images/solana.jpeg'


const Modul = () => {
  return (
    
    // <div className='flex m:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto'>
        
    //     <Sidebar />
    //     <Routes>
    //         <Route path="/modulenft" element={<ModulNFT />}/>
    //     </Routes>
        
    // </div>
   <>
      <div className="py-20 px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 ">
        <div className="p-4 ">
          <h3 className=" lg:text-3xl text-3xl font-bold  text-white">
            Modul
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
              <div className="p-5 ">
                <p className="mb-1 font-bold text-[#13133e] tracking-wide uppercase">
                  Pemulaan ke Web3
                </p>
                <p className="mb-3 text-gray-400 text-sm  ">
                Mulakan dari sini jika anda baru menggunakan web3.
                </p>
                <div className="flex items-center justify-start gap-2 mt-2 ">
                  <Link
                    to="/modulnft"
                    className="mt-2 text-yellow-500 rounded-lg font-semibold text-sm"
                  >
                    Mula Belajar
                  </Link>
                </div>
              </div>
            </div>

            <div className="card cursor-pointer overflow-hidden bg-white shadow-lg rounded-lg ">
              <img
                src={pitchin}
                className=" w-full rounded-md object-cover aspect-square"
                alt="pitchIn"
              />
              <div className="p-5 ">
                <p className="mb-1 font-bold text-[#13133e] tracking-wide uppercase">
                NFT
                </p>
                <p className="mb-3 text-gray-400 text-sm ">
                Belajar bagaimana cara untuk membeli, menjual dan mint nft.
                </p>
                <div className="flex items-center justify-start gap-2 mt-4 ">
                  <Link
                    to="/"
                    className="mt-2 text-yellow-500 rounded-lg font-semibold text-sm"
                  >
                    Mula Belajar
                  </Link>
                </div>
              </div>
            </div>

            <div className="card cursor-pointer overflow-hidden bg-white shadow-lg rounded-lg">
              <img
                src={cardano}
                className="w-full rounded-md object-cover aspect-square"
                alt="Cardano Malaysia"
              />
              <div className="p-5 ">
                <p className="mb-1 font-bold text-[#13133e] tracking-wide uppercase">
                  DeFi
                </p>
                <p className="mb-3 text-gray-400 text-sm ">
                Belajar bagaimana nak menyimpan, meminjam dan melabur aset kirpto anda.
                </p>
                <div className="flex items-center justify-start gap-2 mt-4 ">
                  <Link
                    to="/"
                    className="mt-2  text-yellow-500 rounded-lg font-semibold text-sm"
                  >
                    Mula Belajar
                  </Link>
                </div>
              </div>
            </div>

          </div>
         
        </div>
      </div>
      </>

    
  )
}

export default Modul