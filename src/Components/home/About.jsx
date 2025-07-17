import React, { useState } from "react";

function About() {
  return (
    <section className="bg-[#0a0f1e] py-20 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-4 leading-tight">
            Who We Are
          </h2>
          <h3 className="text-3xl font-semibold text-blue-300 mb-2">
            AceAI Technologies
          </h3>
          <p className="text-white/70 mb-6 text-md">
            At AceAI Technologies, we envision AI as a limitless
            companion—accessible anytime, anywhere, and for everyone. Our
            mission is to make intelligent systems integral to every task and
            domain. As a leading AI solutions provider, we deliver advanced,
            scalable, and sector-specific technologies. From healthcare to
            finance and logistics, we empower industries to innovate with
            precision and agility.
          </p>

          <h4 className="text-2xl font-semibold text-blue-300 mb-3">
            Our Expertise
          </h4>
          <ul className="list-disc list-inside text-white/70 space-y-2 text-md mb-8">
            <li>End-to-end AI strategy and consulting</li>
            <li>Custom AI model development</li>
            <li>Functional and industry-specific automation</li>
            <li>Seamless integration and lifecycle support</li>
          </ul>

          {/* Button -- 1 */}
          <div className="bg-[#0f1629] backdrop-blur-sm rounded-xl mb-3 md:rounded-2xl p-4 md:p-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="p-2 md:p-3 bg-sky-500/30 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-sky-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 8l-4 4 4 4M17 8l4 4-4 4M12 4v16"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-md sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                    Software Development
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-400">
                    Custom, scalable, intelligent software solutions.
                  </p>
                </div>
              </div>
              <div style={{ transform: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-right w-4 h-4 md:w-6 md:h-6 text-sky-500"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Button -- 2 */}

          <div className="bg-[#0f1629] backdrop-blur-sm rounded-xl mb-3 md:rounded-2xl p-4 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="p-2 md:p-3 bg-sky-500/30 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-zap w-4 h-4 md:w-6 md:h-6 text-sky-500"
                    aria-hidden="true"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-md sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                    AI Consulting
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-400">
                    Transform Your Business with AI
                  </p>
                </div>
              </div>
              <div style={{ transform: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-right w-4 h-4 md:w-6 md:h-6 text-sky-500"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Button -- 3 */}

          <div className="bg-[#0f1629] backdrop-blur-sm rounded-xl mb-3 md:rounded-2xl p-4 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="p-2 md:p-3 bg-sky-500/30 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-users w-4 h-4 md:w-6 md:h-6 text-sky-500"
                    aria-hidden="true"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-md sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                    Campus Connect
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-400">
                    Connect to the Campus to more
                  </p>
                </div>
              </div>
              <div style={{ transform: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-right w-4 h-4 md:w-6 md:h-6 text-sky-500"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div classNameName="w-full lg:w-1/2 flex justify-center">
          <img
            src="/about-us-illustration.svg"
            alt="About AceAI"
            classNameName="w-full max-w-md object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
