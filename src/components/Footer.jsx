import React from "react";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
  } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="text-xl font-bold tracking-wide text-white uppercase">
                MySekolah Kripto
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-400">
              Sekolah Kripto adalah pusat Inter-Operasi ilmu yang menyediakan pembelajaran dan kesedaran tentang Blockchain, Aset Kripto, DeFi & NFT di Malaysia.
              </p>
            </div>
            <div className="mt-8 text-3xl flex items-center justify-start gap-4">
                  <a
                    href="https://twitter.com/Mudennn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillTwitterCircle className="text-gray-400" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-najmuddin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin className="text-gray-400" />
                  </a>
                  <a
                    href="https://github.com/Mudennn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub className="text-gray-400" />
                  </a>
                </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
              <p className="font-semibold tracking-wide text-white">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                Apples
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
          <p className="text-sm text-gray-400">
            © Copyright 2023 MySekolah Kripto. All rights reserved.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
