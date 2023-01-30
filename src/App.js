import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="bg-[#13133E]">
      <div className="bg-gradient-to-r from-[#14133F] to-[#6616A2]">
        <Navbar />
      </div>
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
