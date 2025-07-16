import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import HeroSection from "./Components/home/HeroSection.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="h-[calc(100vh-64px)] ">
          <HeroSection />
        </main>
      </div>
    </>
  );
}

export default App;
