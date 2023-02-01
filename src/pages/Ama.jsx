import React from "react";
import cardano from "../images/Cardano.jpeg";
import metaone from "../images/Metaone.jpeg";
import nftpangolin from "../images/NFTPangolin.jpeg";
import pitchin from "../images/pitchin.jpeg";
import solana from "../images/solana.jpeg";

const Ama = () => {
  const ama = [
    {
      name: "Solana KL",
      image: solana,
      link: "https://www.youtube.com/live/p3lzcs0n_No?feature=share",
    },
    { name: "pitchIn", image: pitchin, link: "https://youtu.be/JSVa2TPSf9c" },
    {
      name: "Cardano",
      image: cardano,
      link: "https://www.youtube.com/live/VxW4lodb_p4?feature=share",
    },
    {
      name: "NFTPangolin dan Zetrix",
      image: nftpangolin,
      link: "https://youtu.be/SiyswQMdj3A",
    },
    {
      name: "Metaone",
      image: metaone,
      link: "https://www.youtube.com/live/_YIdKbI25oo?feature=share",
    },
  ];

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
          {ama.map((menu, i) => (
            <>
              <div
                key={i}
                className="card cursor-pointer overflow-hidden bg-white shadow-lg rounded-lg "
              >
                <img
                  src={menu.image}
                  className=" w-full rounded-md object-cover aspect-square"
                  alt={menu.name}
                />
                <div className="p-5 flex justify-between items-center my-auto">
                  <p className=" font-bold text-[#13133e] tracking-wide uppercase">
                    {menu.name}
                  </p>
                  <div className="flex items-center justify-start ">
                    <a
                      href={menu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-400 text-black px-5 py-1 rounded-lg font-semibold text-sm"
                    >
                      Tonton
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ama;