import React from 'react'
import Logo2 from "../images/Roachpunks.jpg"

const NFT = () => {
  return (
    <section>
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div className="flex flex-wrap items-center mx-auto max-w-7xl">
      <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
          <div>
            <div className="relative w-56 mx-auto sm:w-full md:w-80 max-w-lg">
              <div className="relative">
                <img
                  className="nftcard object-cover object-center mx-auto rounded-lg shadow-2xl"
                  alt="Muhammad Najmuddin"
                  src={Logo2}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start mt-12 lg:mb-16 pl-10 lg:flex-grow lg:w-1/2 lg:pr-6 xl:pr-24 md:mb-0 xl:mt-0">
        <p className=" text-base leading-relaxed text-left text-gray-400 tracking-widest">
          NFT TAMAT BELAJAR
          </p>
          <h1 className="text-4xl font-bold leading-none tracking-tighter text-white md:text-7xl lg:text-8xl ">
          NFT
          </h1>
          <h1 className="-mt-5 relative inline-flex text-4xl font-bold tracking-tighter leading-none  text-white md:text-7xl lg:text-8xl ">
          KHAS
          </h1>
          <p className="mt-5 text-base leading-relaxed text-left text-gray-400">
          NFT akan diberikan terus selepas anda berjaya tamakan modul kami!
          </p>

        </div>

        
      </div>
    </div>
  </section>
  )
}

export default NFT