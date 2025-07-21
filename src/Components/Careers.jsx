import React from "react";
import { motion } from "framer-motion";
import Footer from "./home/Footer";
import { FaLaptopCode, FaServer, FaPencilRuler } from "react-icons/fa";

const career = [
  {
    icon: <FaLaptopCode className="text-indigo-600 text-4xl mb-4" />,
    title: "Frontend Development",
    type: "Internship & Full-Time",
    desc: "Build stunning user interfaces with modern frameworks like React.js. Collaborate with designers and backend teams.",
    img: "/Careers/frontend.png",
  },
  {
    icon: <FaServer className="text-green-600 text-4xl mb-4" />,
    title: "Backend Development",
    type: "Internship & Full-Time",
    desc: "Develop scalable APIs, manage databases, and ensure smooth data communication with frontend applications.",
    img: "/Careers/backend.png",
  },
  {
    icon: <FaPencilRuler className="text-pink-500 text-4xl mb-4" />,
    title: "UI/UX Design",
    type: "Internship & Full-Time",
    desc: "Craft intuitive and visually appealing designs focused on user experience, wireframing, and prototyping.",
    img: "/Careers/uiux.png",
  },
];

const Careers = () => {
  return (
    <>
      <section className="bg-[#0a0f1e] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Career Opportunities
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Explore our internship and full-time roles crafted for developers
            and designers passionate about building the future.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {career.map((career, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700/30  rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={career.img}
                alt={career.title}
                className="w-full h-fit object-fill"
              />
              <div className="p-6 text-left">
                {career.icon}
                <h3 className="text-2xl font-semibold text-white">
                  {career.title}
                </h3>
                <span className="text-sm text-indigo-500 font-medium block mb-2">
                  {career.type}
                </span>
                <p className="text-white/70 text-sm mb-4">{career.desc}</p>
                <button className="mt-auto bg-white text-black px-4 py-2 rounded-lg hover:bg-white/70 transition">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <div className=" bg-[#0a0f1e] h-full pt-96">
        <Footer />
      </div>
    </>
  );
};

export default Careers;
