import React from "react";
import HeroImg from "../../../public/homeImgs/heroImg.png";
import About from "./About.jsx";
import Choose from "./Choose.jsx";
import Approach from "./Approach.jsx";
import Service from "./Service.jsx";
import GetStarted from "./GetStart.jsx";
import Footer from "./Footer.jsx";
import Engagement from "./Engagement.jsx";
import Technologies from "./Technologies.jsx";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <section className="bg-[#0A0A0B] text-white py-12 px-6 lg:px-20 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:ml-10">
          {/* Left content */}
          <div className="w-full lg:w-1/2 mt-10 sm:mt-14 md:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight lg:leading-tight text-white mb-6">
              AI Solution Providers
              <br />
              Driving Scalable,
              <br />
              Intelligent Business Growth.
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mb-8">
              As an AI solution provider, Ace AI delivers advanced AI solutions
              tailored to your business needs — enabling automation, smarter
              analytics, and scalable transformation across operations.
            </p>
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
        <div className="mt-6 md:mt-0 md:pl-12">
          <Link
            to="/get-in-touch"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-lg transition"
          >
            Book a Free Consultation
          </Link>
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
