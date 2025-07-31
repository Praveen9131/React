import React from "react";
import ContactUsButton from "../ContactUsBtn";
import { FaSunPlantWilt } from "react-icons/fa6";
import {
  FaBookOpen as FaBookS,
  FaHeart,
  FaBuilding,
  FaPiggyBank,
  FaMicrochip,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaMicrochip size={40} />,
    title: "AI for Semiconductor Design",
    description:
      "Accelerating chip design with machine learning, fault localization, and EDA optimization techniques.",
  },
  {
    icon: <FaBookS size={40} />,
    title: "AI in Education",
    description:
      "Enhancing personalized learning, automated assessment, and intelligent tutoring systems with AI.",
  },
  {
    icon: <FaHeart size={40} />,
    title: "AI in Healthcare",
    description:
      "Empowering diagnostics, treatment planning, and patient monitoring through AI-driven insights..",
  },
  {
    icon: <FaBuilding size={40} />,
    title: "AI in Banking",
    description:
      "Enabling fraud detection, customer insights, and automated financial operations with smart AI tools.",
  },
  {
    icon: <FaPiggyBank size={40} />,
    title: "AI in Finance",
    description:
      "Advanced analytics for fraud detection, credit scoring, and risk assessment with real-time financial monitoring.",
  },
  {
    icon: <FaSunPlantWilt size={40} />,
    title: "AI in Agriculture",
    description:
      "Boosting crop yield, disease detection, and resource efficiency using precision agriculture AI.",
  },
];

const Service = () => {
  return (
    <section className="bg-[#1c1c1c] text-white py-16 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Services<span className="text-blue-500">.</span>
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          From regulated sectors to fast-moving markets, we build tailored AI
          solutions that solve real-world challenges and integrate seamlessly
          into your business environment.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((item, index) => (
          <div
            key={index}
            className="hover:bg-[#2a2a2a] p-6 rounded-lg  transition duration-300"
          >
            <div className="flex justify-center text-white mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-center mb-3">{item.title}</h3>
            <p className="text-center text-gray-300 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <ContactUsButton />
      </div>
    </section>
  );
};

export default Service;
