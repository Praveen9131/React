import React from "react";
import Aiworkshops from "./Aiworkshops";
import Research from "./Research";
import Footer from "../home/Footer";
import ContactUsButton from "../ContactUsBtn";
import { div } from "framer-motion/client";

function CampusConnect() {
  return (
    <>
      <section className="bg-[#0a0f1e] py-14 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              🎓 AI Talent Development & <br />
              <span className="inline-block  pt-2">Academic Collaboration</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We collaborate with educational institutions to strengthen
              teaching-learning ecosystems and build a future-ready AI
              workforce. Our student-focused programs are aligned with national
              education policies and global industry demands.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-[300px] md:h-[400px]">
            <img
              src=""
              alt=""
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* our courses */}
      <section className="bg-[#0a0f1e] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl text-white md:text-5xl font-bold text-center mb-6">
            Our Courses
          </h1>
          <div className="flex items-center justify-center">
            <p className="text-lg w-full md:w-2/3 lg:w-1/2 text-center text-white/70 py-4 md:py-8">
              Discover our expertly crafted courses in DevOps, MLOps, AI,
              Python, Frontend Development, Backend Development, Machine
              Learning, and Complete AI Master Class with clear pricing and
              detailed plans.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-3 w-full">
            {/* Python Course */}
            <div className="animate_top group relative h-fit rounded-lg border border-stroke bg-gray-700/30 p-6 sm:p-7.5 shadow-solid-10 dark:border-strokedark">
              <h3 className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                INR 4.5k
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-semiBold text-white">
                Python Course
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Master Python programming, covering fundamentals, data analysis,
                and AI libraries like TensorFlow and PyTorch.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-white/60">
                <ul>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Java Course */}
            <div className="animate_top group relative h-fit rounded-lg border border-stroke bg-gray-700/30 p-6 sm:p-7.5 shadow-solid-10 dark:border-strokedark">
              <h3 className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                INR 5k
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-semiBold text-white">
                Java Course
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Learn Java programming from basics to advanced, including OOP,
                data structures, algorithms, and building robust backend
                applications.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-white/60">
                <ul>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Machine Learning Course */}
            <div className="animate_top group relative h-fit rounded-lg border border-stroke bg-gray-700/30 p-6 sm:p-7.5 shadow-solid-10 dark:border-strokedark">
              <h3 className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                INR 4.5k
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-semiBold text-white">
                Machine Learning Course
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Explore algorithms, neural networks, and data modeling
                techniques to build predictive systems with tools like
                Scikit-learn and Keras.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-white/60">
                <ul>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* AI Master Class Course */}
            <div className="animate_top group relative h-fit rounded-lg border border-stroke bg-gray-700/30 p-6 sm:p-7.5 shadow-solid-10 dark:border-strokedark">
              <h3 className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                INR 12.5k
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-semiBold text-white">
                AI Master Class Course
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                A comprehensive course covering AI fundamentals, machine
                learning, generative AI, and agentic systems for a holistic AI
                education.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-white/60">
                <ul>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Generative AI Course */}
            <div className="animate_top group relative h-fit rounded-lg border border-stroke bg-gray-700/30 p-6 sm:p-7.5 shadow-solid-10 dark:border-strokedark">
              <h3 className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                INR 5k
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-semiBold text-white">
                Generative AI Course
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Build advanced generative models like GANs and LLMs to create
                innovative AI applications for creative industries.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-white/60">
                <ul>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Agentics AI Course */}
            <div className="animate_top group relative h-fit rounded-lg border border-stroke bg-gray-700/30 p-6 sm:p-7.5 shadow-solid-10 dark:border-strokedark">
              <h3 className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                INR 7k
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-semiBold text-white">
                Agentics AI Course
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Develop intelligent AI agents capable of autonomous
                decision-making and task automation.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-white/60">
                <ul>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Frontend Development Course */}
            <div className="animate_top group relative h-fit rounded-lg border border-stroke bg-gray-700/30 p-6 sm:p-7.5 shadow-solid-10 dark:border-strokedark">
              <h3 className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                INR 5k
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-semiBold text-white">
                Frontend Development Course
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Design responsive, user-friendly web interfaces using modern
                frameworks like React, Vue.js, and Angular.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-white/60">
                <ul>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Backend Development Course */}
            <div className="animate_top group relative h-fit rounded-lg border border-stroke bg-gray-700/30 p-6 sm:p-7.5 shadow-solid-10 dark:border-strokedark">
              <h3 className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                INR 6.5k
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-semiBold text-white">
                Backend Development Course
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Develop scalable backend systems with Node.js, Django, and
                databases like MongoDB and PostgreSQL.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-white/60">
                <ul>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* MLOps Course */}
            <div className="animate_top group relative h-fit rounded-lg border border-stroke bg-gray-700/30 p-6 sm:p-7.5 shadow-solid-10 dark:border-strokedark">
              <h3 className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                INR 5.5k
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-semiBold text-white">
                MLOps Course
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Learn to deploy and manage machine learning models at scale
                using MLOps tools and best practices.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-white/60">
                <ul>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Devops Course */}
            <div className="animate_top group relative h-fit rounded-lg border border-stroke bg-gray-700/30 p-6 sm:p-7.5 shadow-solid-10 dark:border-strokedark">
              <h3 className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                INR 10k
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-semiBold text-white">
                Devops Course
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Master DevOps practices, including CI/CD pipelines,
                containerization with Docker, and orchestration with Kubernetes.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-white/60">
                <ul>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Cloud Computing Course */}
            <div className="animate_top group relative h-fit rounded-lg border border-stroke bg-gray-700/30 p-6 sm:p-7.5 shadow-solid-10 dark:border-strokedark">
              <h3 className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                INR 8k
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-semiBold text-white">
                Cloud Computing Course
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Learn cloud architecture, deployment, and management using AWS,
                Azure, and Google Cloud with hands-on projects.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-white/60">
                <ul>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Aiworkshops />
        <Research />
      </section>
      <div className="bg-[#0a0f1e]">
        <ContactUsButton />
      </div>
      <Footer></Footer>
    </>
  );
}

export default CampusConnect;
