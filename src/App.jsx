import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import HeroSection from "./Components/home/HeroSection.jsx";
import CampusConnect from "./Components/CampusConnect.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Interns from "./Components/Interns.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen ">
          <Navbar />

          <main className="h-[calc(100vh-64px)]">
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/interns" element={<Interns />} />
              <Route path="/campus-connect" element={<CampusConnect />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
