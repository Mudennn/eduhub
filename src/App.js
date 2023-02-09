import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import ModulNFT from "./components/ModulNFT";
import Navbar from "./components/Navbar";
import Ama from "./pages/Ama";
import HubungiKami from "./pages/HubungiKami";
import LandingPage from "./pages/LandingPage";
import Modul from "./pages/Modul"
import Launchpad from "./pages/Launchpad";


function App() {
  return (
    <>
    <div className="bg-[#13133E]">
      
      <div className="">
        <Navbar />
      </div>
  

      <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/modul" element={<Modul />} />
        <Route path="/ama" element={<Ama />} />
        <Route path="/launchpad" element={<Launchpad />} />
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
