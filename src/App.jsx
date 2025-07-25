import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import Careers from "./Components/Careers.jsx";
import HeroSection from "./Components/home/HeroSection.jsx";
import CampusConnect from "./Components/Campusconnect/CampusConnect.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen ">
          <Navbar />

          <main className="h-[calc(100vh-64px)]">
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/campus-connect" element={<CampusConnect />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
