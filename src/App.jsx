import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import Careers from "./Components/Careers.jsx";
import HeroSection from "./Components/home/HeroSection.jsx";
import CampusConnect from "./Components/Campusconnect/CampusConnect.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetinTouch from "./Components/GetinTouch.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Privacy from "./Components/home/Privacy.jsx";
import Terms from "./Components/home/Terms.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen ">
          <Navbar />

          <main className="h-[calc(100%-64px)]">
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/campus-connect" element={<CampusConnect />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/get-in-touch" element={<GetinTouch />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
