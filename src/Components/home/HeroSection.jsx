import React from "react";
import About from "./About.jsx";
import Service from "./Service.jsx";
import OurTeam from "./OurTeam.jsx";
import Register from "./Register.jsx";
import Footer from "./Footer.jsx";
import video from "../../../public/serviceImages/video.mp4";

function HeroSection() {
  return (
    <>
      <section className="relative flex items-center justify-center h-screen bg-[#02041A] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="relative z-20 mx-auto container px-4 sm:px-20">
          <div className="w-full max-w-4xl space-y-4 sm:space-y-6 md:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-semibold tracking-tight text-white -ml-1">
                Learn anything, anytime, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                  anywhere.
                </span>
              </h1>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="max-w-xl text-base sm:text-lg md:text-xl text-sky-100/90 leading-relaxed">
                Join <span className="font-bold text-white"></span>{" "}
                professionals mastering practical AI development at{" "}
                <b> Ace AI </b>
              </p>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-white/90">
                Learn. Build. Deploy.
              </p>
            </div>

            <div className="flex flex-col text-white sm:flex-row items-center gap-3 sm:gap-4 pt-4 w-full sm:w-fit">
              <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-colors h-11 w-full group text-sm sm:text-base border border-white bg-transparent hover:bg-white hover:text-black p-5"
                href="/genai-course"
              >
                Begin Your AI Journey
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-5 w-5 group-hover:stroke-black"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <button className="inline-flex items-center justify-center rounded-xl bg-white text-black hover:bg-white/90 h-11 px-8 w-full text-base">
                Join With Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <About />
        <Service />
        <OurTeam />
        <Register />
        <Footer />
      </section>
    </>
  );
}

export default HeroSection;
