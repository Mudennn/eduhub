import React from "react";
import Sidebar from "./Sidebar";

const ModulNFT = () => {
  return (
    <div className="text-white lg:px-20 mx-auto lg:mt-5 m:max-w-xl md:max-w-full lg:max-w-screen-xl lg:flex lg:flex-row  ">
      
      <Sidebar />
      <div className="mx-auto w-full z-0">
        <div>
        <h2 className="text-2xl mt-5 ml-5 font-semibold">1.1 Introduction</h2>
        </div>
        <div className="mx-5 mt-10">
          <div className="containerVideo aspect-w-16 aspect-h-9">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/zEA3cbJI8io?start=962"
              title="Digital Wallet"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            </div>
        </div>
        <div className="mx-5 mt-10">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut dicta in, ducimus quidem voluptatem culpa alias soluta, maxime dolorem laudantium fuga modi reiciendis, debitis sint voluptatum nihil excepturi sapiente?</p>
        </div>
      </div>
    </div>
  );
};

export default ModulNFT;
