import React from 'react'
import Image from "../images/hero.png"

const Hero = () => {
  return (
    <section>
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24  ">
            <div className="flex flex-wrap items-center mx-auto max-w-7xl ">
              <div className='ellipse1 z-1 lg:block hidden'></div>
              <div className="flex flex-col items-center lg:items-start lg:mt-12 mb-16  lg:flex-grow lg:w-1/2 lg:pr-6 xl:pr-24 md:mb-0 xl:mt-0 z-10">
                <h1 className="text-4xl  font-bold leading-none  text-white md:text-6xl lg:text-6xl ">
                Terokai ilmu 
                </h1>
                <h1 className="relative inline-flex text-4xl font-bold leading-none  text-white md:text-6xl lg:text-6xl ">
                Blockchain!
                </h1>
                <p className="mb-8 mt-5 text-base leading-relaxed text-center lg:text-left text-gray-400">
                Modul disediakan khusus bagi mereka yang tidak mempunyai pengalaman di dalam dunia Blockchain!
                </p>
                <div className="text-3xl mx-auto sm:mx-0 gap-4">
                  <button className='text-base font-semibold py-3 px-5 rounded-lg bg-yellow-500'>Mula Belajar</button>
                </div>
              </div>

              {/* <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl mt-0 md:mt-10  ">
                <div>
                  <div className='ellipse2'></div>
                  <div className="relative w-56 mx-auto lg:w-full md:w-80 max-w-lg">
                    <div className="relative">
                      <img
                        className="object-cover object-center mx-auto "
                        alt="Muhammad Najmuddin"
                        src={Image}
                      />
                    </div>
                  </div>
                </div>
              </div> */}  
              <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl mt-0 md:mt-10">
                <div>
                  <div className="relative mx-auto w-full  max-w-lg">
                    <div className="ellipse2 z-1 lg:block hidden"></div>
                    <div className="relative z-10">
                      <img
                        className="object-cover object-center mx-auto"
                        alt="MySekolahKripto"
                        src={Image}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero