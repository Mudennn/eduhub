import React from "react";
import AboutUs from "../components/AboutUs";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Kurikulum from "../components/Kurikulum";
import NFT from "../components/NFT";

const LandingPage = () => {
  return (
    <div className="z-1">
      <div >
        <Hero />
      </div>
      <Features />
      <div className="bg-gradient-to-r from-[#6616A2] to-[#14133F]">
        <NFT />
      </div>
      <AboutUs />
      <div className="bg-gradient-to-r from-[#14133F] to-[#6616A2]">
        <Kurikulum />
      </div>
      <FAQ />
      <div className="bg-gradient-to-r from-[#6616A2] to-[#14133F]">
        <CTA />
      </div>
    </div>
  );
};

export default LandingPage;
