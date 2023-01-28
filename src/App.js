import "./App.css";
import AboutUs from "./components/AboutUs";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Kurikulum from "./components/Kurikulum";
import Navbar from "./components/Navbar";
import NFT from "./components/NFT";

function App() {
  return (
    <div className="bg-[#13133E]">
      <div className="bg-gradient-to-r from-[#14133F] to-[#6616A2]">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <div className="bg-gradient-to-r from-[#6616A2] to-[#14133F]">
        <NFT />
      </div>
      <AboutUs />
      <div className="bg-gradient-to-r from-[#14133F] to-[#6616A2]">
        <Kurikulum />
      </div >
      <FAQ />
      <div className="bg-gradient-to-r from-[#6616A2] to-[#14133F]">
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;
