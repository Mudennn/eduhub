import React from "react";

const CTA = () => {
  return (
    <div>
      {/* <section className="px-4 py-6 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 ">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <div className="lg:w-1/2 w-full">
          <h1 className="lg:text-3xl text-2xl font-semibold leading-tight text-center lg:text-left text-white">
            Blockchain adalah masa depan, jadilah yang pertama belajar
            tentangnya!
          </h1>
          </div>
          <button className="px-5 py-2 bg-yellow-500 rounded-lg font-semibold text-sm">
            Mula Belajar Sekarang!
          </button>
        </div>
      </section> */}
      <section  className="px-4 py-6 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 ">
        <div className=" bg-gray-100 bg-opacity-5 shadow-lg rounded-2xl  p-10 text-center mx-auto">
        <h1 className="lg:text-3xl text-2xl font-semibold leading-tight text-center text-white">
            Blockchain adalah masa depan, jadilah yang pertama belajar
            tentangnya!
          </h1>
        <button className="button2 px-5 py-2 mt-10 bg-yellow-500 rounded-lg font-semibold text-sm">
            Mula Belajar Sekarang!
          </button>
        </div>
      
        <hr className="mt-10"/>
      </section>
    </div>
  );
};

export default CTA;
