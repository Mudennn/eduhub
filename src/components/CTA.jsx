import React from "react";

const CTA = () => {
  return (
    <div>
      <section className="px-4 py-6 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 ">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <div className="w-1/2">
          <h1 className="lg:text-3xl sm:text-xl font-semibold leading-tight text-center lg:text-left text-white">
            Blockchain adalah masa depan, jadilah yang pertama belajar
            tentangnya!
          </h1>
          </div>
          <button className="px-5 py-2 bg-yellow-500 rounded-lg font-semibold text-sm">
            Mula Belajar Sekarang!
          </button>
        </div>
      </section>
    </div>
  );
};

export default CTA;
