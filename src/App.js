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
import Prinsip_blockchain from "./pages/pengenalan_blockchain/Prinsip_blockchain";
import Blockchain_adalah_konsep from "./pages/pengenalan_blockchain/Blockchain_adalah_konsep";
import Fiat_vs_kripto from "./pages/pengenalan_blockchain/Fiat_vs_kripto.jsx";


function App() {
  return (
    <>
    <div className="bg-[#13133E]">
      
      <div className="relative">
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

        {/* modul 1 */}
        <Route path="/prinsip_blockchain" element={<Prinsip_blockchain />}/>
        <Route path="/blockchain_adalah_konsep" element={<Blockchain_adalah_konsep />}/>
        <Route path="/fiat_vs_kripto" element={<Fiat_vs_kripto />}/>
      </Routes>
      </div>
     
      <Footer />
    </div>
    
    </>
  );
}

export default App;
