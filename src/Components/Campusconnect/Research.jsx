import React from "react";
import { FaFlask, FaDatabase, FaFileAlt, FaLightbulb } from "react-icons/fa";

function Research() {
  const researchItems = [
    {
      icon: <FaFlask className="text-white text-3xl" />,
      title: "Joint Research Projects",
      desc: "Collaborative projects with students and faculty in cutting-edge AI domains.",
    },
    {
      icon: <FaDatabase className="text-white text-3xl" />,
      title: "Resources & Labs",
      desc: "Access to datasets, GPU-powered computing resources, and model experimentation labs.",
    },
    {
      icon: <FaFileAlt className="text-white text-3xl" />,
      title: "Publication & Patents",
      desc: "Guidance on academic publishing, filing patents, and capstone project execution.",
    },
    {
      icon: <FaLightbulb className="text-white text-3xl" />,
      title: "Innovation & Excellence",
      desc: "Support for AI clubs, innovation labs, and Centers of Excellence in research.",
    },
  ];

  return (
    <section className="text-white bg-[#0a0f1e] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold  text-white">
          Research & Innovation Engagement
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Empowering academic and industry collaboration through knowledge,
          tools, and innovation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {researchItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-700/30 p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/70 text-md mb-4">{item.desc}</p>
            </div>
            <button className="mt-auto px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-white/70 transition duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;
