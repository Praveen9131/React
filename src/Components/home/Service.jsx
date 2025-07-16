import React from "react";

function Service() {
  return (
    <section>
      <section id="who-we-serve" className="py-24 px-6 bg-[#02041A] ">
        <div className="max-w-7xl text-white mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl text-white md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text  mb-6">
              Who We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI education and solutions tailored for every
              learner and organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-[#0f1629]/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300  hover:shadow-sky-500/10 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-building2 w-10 h-10 text-white"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  For Industries
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AI/ML solutions and workforce training for enterprises
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">
                      Industry Solutions
                    </span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">
                      Workforce Training
                    </span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group  backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-[#0f1629]/60  hover:shadow-sky-500/10 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {/*  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-briefcase w-10 h-10 text-white"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  For Professionals
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Advanced AI training for career advancement
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href="https://vizuara.ai/live-ai-courses"
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">LIVE Courses</span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">
                      Self-Paced Courses
                    </span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <div>
                    <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg">
                      <span className="flex items-center">
                        Research Bootcamp
                      </span>
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
                        className="lucide lucide-chevron-right w-4 h-4"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">
                      MS/PhD application
                    </span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-[#0f1629]/60  hover:shadow-sky-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300  hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-users w-10 h-10 text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  For Undergraduate Students
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Research programs and advanced AI/ML courses
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">LIVE Courses</span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://vizuara.ai/self-paced-courses"
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">
                      Self-Paced Courses
                    </span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <div>
                    <button className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg">
                      <span className="flex items-center">
                        Research Bootcamp
                      </span>
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
                        className="lucide lucide-chevron-right w-4 h-4"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">
                      MS/PhD application
                    </span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-[#0f1629]/60  hover:shadow-sky-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-graduation-cap w-10 h-10 text-white"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  For School Students
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Interactive AI learning platform for K-12 education
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">
                      AI-ML Research Bootcamp (LIVE)
                    </span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">
                      Interactive AI-ML Learning Platform
                    </span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">
                      Undergraduate application
                    </span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-[#0f1629]/60  hover:shadow-sky-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300  hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-school w-10 h-10 text-white"
                  >
                    <path d="M14 22v-4a2 2 0 1 0-4 0v4"></path>
                    <path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"></path>
                    <path d="M18 5v17"></path>
                    <path d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"></path>
                    <path d="M6 5v17"></path>
                    <circle cx="12" cy="9" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  For Schools
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comprehensive AI education programs and curriculum
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">Teacher training</span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">AI-ML curriculum</span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-[#0f1629]/60  hover:shadow-sky-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-university w-10 h-10 text-white"
                  >
                    <circle cx="12" cy="10" r="1"></circle>
                    <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"></path>
                    <path d="M6 17v.01"></path>
                    <path d="M6 13v.01"></path>
                    <path d="M18 17v.01"></path>
                    <path d="M18 13v.01"></path>
                    <path d="M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  For Universities
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Academic partnerships and research collaborations
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">Minor in AI</span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">
                      Program Electives in AI
                    </span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-[#0f1629]/60  hover:shadow-sky-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300  hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-user-check w-10 h-10 text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <polyline points="16 11 18 13 22 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  For School Teachers
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Training programs and teaching resources
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">
                      Self-paced Teacher Training Module
                    </span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-[#0f1629]/60  hover:shadow-sky-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-package w-10 h-10 text-white"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                    <path d="M12 22V12"></path>
                    <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
                    <path d="m7.5 4.27 9 5.15"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Products for Everyone
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Accessible AI tools and platforms for all users
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">DynaRoute</span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">Vizz-AI Tutor</span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">ReadEasy</span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-[#0f1629]/60  hover:shadow-sky-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-heart w-10 h-10 text-white"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Free Content for Learners
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  YouTube courses and free educational resources
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">YouTube Channel</span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 cursor-pointer h-9 px-3 w-full justify-between text-left  text-white/60  hover:text-white rounded-lg"
                  >
                    <span className="flex items-center">Newsletter</span>
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
                      className="lucide lucide-external-link w-4 h-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Service;
