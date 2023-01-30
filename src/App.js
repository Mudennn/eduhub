import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import ModulNFT from "./components/ModulNFT";
import Navbar from "./components/Navbar";
import HubungiKami from "./pages/HubungiKami";
import LandingPage from "./pages/LandingPage";
import Modul from "./pages/Modul"
import TentangKami from "./pages/TentangKami";
import Wagmi from "./pages/Wagmi";

function App() {
  return (
    <>
    <div className="bg-[#13133E]">
      
      <div className="bg-gradient-to-r from-[#14133F] to-[#6616A2]">
        <Navbar />
      </div>
  

      <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/modul" element={<Modul />} />
        <Route path="/wagmi" element={<Wagmi />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/hubungikami" element={<HubungiKami />} />

        <Route path="modulnft" element={<ModulNFT />}  />
      </Routes>
      </div>
     
      <Footer />
    </div>
    
    </>
  );
}

export default App;
