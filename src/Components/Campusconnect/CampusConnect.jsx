import React from "react";
import Aiworkshops from "./Aiworkshops";
import pythonimg from "/Coursesimgs/python.png";
import javaimg from "/Coursesimgs/java.png";
import mlimg from "/Coursesimgs/ml.png";
import Research from "./Research";
import Footer from "../home/Footer";

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
      <section className="bg-[#0a0f1e]">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-white bg-clip-text mb-6">
            Our Courses
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our expertly crafted courses in DevOps, MLOps, AI, Python,
            Frontend Development, Backend Development, Machine Learning, and
            Complete AI Master Class with clear pricing and detailed plans.
          </p>
        </div>
        <div className="grid grid-cols-1 p-4 text-white md:grid-cols-1 lg:grid-cols-3 gap-2 lg:pl-8 ">
          <div class="group relative overflow-hidden  h-fit backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl flex flex-col">
            <div class="relative h-76 w-md overflow-hidden rounded-t-3xl flex-shrink-0 ">
              <img
                alt=""
                loading="lazy"
                width="200"
                height="400"
                decoding="async"
                data-nimg="1"
                class="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110"
                src={pythonimg}
                style={{ color: "transparent" }}
              />
            </div>
            <div class="p-6 w-md  flex-1 flex flex-col rounded-b-3xl bg-gray-700/30">
              <div class="flex-col h-full">
                <h3 class="text-3xl font-semibold  line-clamp-2 mb-2  transition-colors duration-300 leading-tight">
                  Python
                </h3>
                <p class="text-lg text-white/80 line-clamp-3 leading-relaxed mt-auto">
                  Master Python programming, covering fundamentals, data
                  analysis, and AI libraries like TensorFlow and PyTorch.
                </p>
                <span className="text-2xl">₹4500</span>
                <div class="flex items-start  justify-center pr-10 gap-4 mt-6 md:gap-10">
                  <button className="py-2 px-8 text-md text-white rounded-md border border-white hover:bg-white hover:text-black hover:text-lg">
                    Course plan
                  </button>
                  <button className="py-2 px-8 text-md bg-white text-black rounded-md border hover:bg-white/80 hover:text-lg">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="group relative  overflow-hidden  h-fit backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl flex flex-col">
            <div class="relative h-76 w-md overflow-hidden rounded-t-3xl flex-shrink-0">
              <img
                alt=""
                loading="lazy"
                width="200"
                height="400"
                decoding="async"
                data-nimg="1"
                class="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110"
                src={javaimg}
                style={{ color: "transparent" }}
              />
            </div>
            <div class="p-6 w-md  flex-1 flex flex-col rounded-b-3xl bg-gray-700/30">
              <div class="flex-col h-full">
                <h3 class="text-3xl font-semibold  line-clamp-2 mb-2  transition-colors duration-300 leading-tight">
                  Java
                </h3>
                <p class="text-lg text-white/80 line-clamp-3 leading-relaxed mt-auto">
                  Learn Java programming from basics to advanced, including OOP,
                  data structures, algorithms, and building robust backend
                  applications.
                </p>
                <span className="text-2xl">₹5000</span>
                <div class="flex items-start  justify-center pr-10 gap-4 mt-6 md:gap-10">
                  <button className="py-2 px-8 text-md text-white rounded-md border border-white hover:bg-white hover:text-black hover:text-lg">
                    Course plan
                  </button>
                  <button className="py-2 px-8 text-md bg-white text-black rounded-md border hover:bg-white/80 hover:text-lg">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="group relative  overflow-hidden  h-fit backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl flex flex-col">
            <div class="relative h-76 w-md overflow-hidden rounded-t-3xl flex-shrink-0">
              <img
                alt=""
                loading="lazy"
                width="200"
                height="400"
                decoding="async"
                data-nimg="1"
                class="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110"
                src={mlimg}
                style={{ color: "transparent" }}
              />
            </div>
            <div class="p-6 w-md  flex-1 flex flex-col rounded-b-3xl bg-gray-700/30">
              <div class="flex-col h-full">
                <h3 class="text-3xl font-semibold  line-clamp-2 mb-2  transition-colors duration-300 leading-tight">
                  Machine Learning
                </h3>
                <p class="text-lg text-white/80 line-clamp-3 leading-relaxed mt-auto">
                  Explore algorithms, neural networks, and data modeling
                  techniques to build predictive systems with tools like
                  Scikit-learn and Keras.
                </p>
                <span className="text-2xl">₹4500</span>
                <div class="flex items-start  justify-center pr-10 gap-4 mt-6 md:gap-10">
                  <button className="py-2 px-8 text-md text-white rounded-md border border-white hover:bg-white hover:text-black hover:text-lg">
                    Course plan
                  </button>
                  <button className="py-2 px-8 text-md bg-white text-black rounded-md border hover:bg-white/80 hover:text-lg">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-12">
          <a
            href=""
            className="bg-white text-black py-4 px-28 text-xl font-semibold rounded-lg mt-8 hover:bg-white/80"
          >
            Explore All
          </a>
        </div>
      </section>
      <section>
        <Aiworkshops />
        <Research />
      </section>
      <Footer></Footer>
    </>
  );
}

export default CampusConnect;
