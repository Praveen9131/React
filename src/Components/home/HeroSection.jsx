import React from "react";
import HeroImg from "../../../public/homeImgs/heroImg.png";
import About from "./About.jsx";
import Choose from "./Choose.jsx";
import Approach from "./Approach.jsx";
import Service from "./Service.jsx";
import OurTeam from "./Technologies.jsx";
import Register from "./Engagement.jsx";
import GetStarted from "./GetStart.jsx";
import Footer from "./Footer.jsx";
import Engagement from "./Engagement.jsx";
import Technologies from "./Technologies.jsx";

function HeroSection() {
  return (
    <>
      <section className="bg-[#0A0A0B] text-white py-12 px-6 lg:px-20 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:ml-10">
          {/* Left content */}
          <div className="lg:w-1/2 mt-20">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              AI Solution Providers
              <br />
              Driving Scalable,
              <br />
              Intelligent Business Growth.
            </h1>
            <p className="text-lg mb-8 text-white">
              As an AI solution provider Ace AI, delivers advanced AI solutions
              tailored to your business needs – enabling automation, smarter
              analytics, and scalable transformation across operations.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg transition">
              Book a Free Consultation
            </button>
          </div>

          {/* Right image */}
          <div className="lg:w-2/3 w-full h-full">
            <img
              src={HeroImg}
              alt="AI Solution Design"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </section>
      <section>
        <About />
        <Choose />
        <Approach />
        <Service />
        <Technologies />
        <Engagement />
        <GetStarted />
        <Footer />
      </section>
    </>
  );
}

export default HeroSection;
