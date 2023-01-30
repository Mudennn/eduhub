import React from "react";
import Sidebar from "./Sidebar";

const ModulNFT = () => {
  return (
    <div className="text-white mx-auto m:max-w-xl md:max-w-full lg:max-w-screen-xl flex">
      <Sidebar />
      <div className="grid w-full">
        <h2 className="text-2xl mt-5 ml-5 font-semibold">1.1 Introduction</h2>
        <div className="mt-10 mx-auto ">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zEA3cbJI8io?start=962"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulNFT;
