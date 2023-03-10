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
      <div>
        <NFT />
      </div>
      <AboutUs />
      <div >
        <Kurikulum />
      </div>
      <FAQ />
      <div>
        <CTA />
      </div>
    </div>
  );
};

export default LandingPage;
