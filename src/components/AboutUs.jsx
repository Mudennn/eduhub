import React from "react";
import Logo2 from "../images/Sekolah.png";

const AboutUs = () => {
  return (
    <div>
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 ">
          <div className="card3 p-5 z-1">
          <div className="flex flex-wrap items-center mx-auto z-10">
            <div className="flex flex-col items-start lg:mt-12 lg:mb-16  lg:flex-grow lg:w-1/2 ">
              <p className="mb-3 mt-5 text-base leading-relaxed text-left text-gray-400 tracking-widest">
                TENTANG KAMI
              </p>
              <h1 className="text-4xl font-bold leading-none  text-white md:text-7xl lg:text-7xl ">
                MySekolah Kripto
              </h1>
              <p className="mb-8 mt-8 text-base leading-relaxed text-left text-gray-400">
                Sekolah Kripto adalah pusat Inter-Operasi ilmu yang menyediakan
                pembelajaran dan kesedaran tentang teknologi Blockchain, Aset
                Kripto, DeFi & NFT di Malaysia. Kami membangunkan
                komuniti-komuniti kripto aset lain seperti Osmosis, Waves Degen
                Malaysia, dan Tezos Degen Malaysia.
              </p>
            </div>
            <div className="w-full  lg:max-w-lg lg:w-1/3 rounded-xl">
              
                <div className="relative w-56 mx-auto sm:w-full md:w-80 max-w-lg">
                  <div className="relative">
                    <img
                      className=" mx-auto w-full"
                      alt="Muhammad Najmuddin"
                      src={Logo2}
                    />
                  </div>
                </div>
              
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
