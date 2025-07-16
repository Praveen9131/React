import React from "react";
import About from "./About.jsx";
import Service from "./Service.jsx";

function HeroSection() {
  return (
    <>
      <section className="flex items-center justify-center h-full bg-black sm:pl-16">
        <div className="mx-auto container px-4 sm:px-6 ">
          <div className="z-30 w-full max-w-4xl space-y-4 sm:space-y-6 md:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="__className_9b9fd1 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] font-semibold tracking-tight text-white -ml-1">
                Learn anything, anytime, <br lass="hidden md:block" />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                  anywhere.
                </span>
              </h1>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="max-w-xl text-base sm:text-lg md:text-xl text-sky-100/90 leading-relaxed">
                Join <span className="font-bold text-white">20,000+</span>{" "}
                professionals mastering practical AI development at{" "}
                <b> Ace AI </b>
              </p>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-white/90">
                Learn. Build. Deploy.
              </p>
            </div>
            <div className="flex flex-col text-white sm:flex-row items-center gap-3 sm:gap-4 pt-4 w-full sm:w-fit">
              <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 w-full group text-sm sm:text-base border border-foreground bg-transparent hover:bg-white hover:text-black p-5"
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
                  className="lucide lucide-chevron-right h-5 w-5 stroke-foreground group-hover:stroke-black"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-white/90 h-11 px-8 w-full text-base">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Landing page Section */}
      <section>
        <About />
        <Service />
      </section>
    </>
  );
}

export default HeroSection;
