import React from "react";
import Sidebar from "./Sidebar";

const ModulNFT = () => {
  return (
    <div className="text-white mx-auto m:max-w-xl md:max-w-full lg:max-w-screen-xl flex">
      <Sidebar />
      <div className="mx-auto w-full">
        <div>
        <h2 className="text-2xl mt-5 ml-5 font-semibold">1.1 Introduction</h2>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zEA3cbJI8io?start=962"
              title="Digital Wallet"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mx-auto px-20 mt-10">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut dicta in, ducimus quidem voluptatem culpa alias soluta, maxime dolorem laudantium fuga modi reiciendis, debitis sint voluptatum nihil excepturi sapiente?</p>
        </div>
      </div>
    </div>
  );
};

export default ModulNFT;
