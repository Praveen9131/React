import React from "react";
import { Link } from "react-router-dom";

import {
  FaPaperPlane,
  FaProjectDiagram,
  FaChartBar,
  FaCogs,
} from "react-icons/fa";

const steps = [
  {
    step: "Step: 1",
    title: "Contact Us",
    description:
      "Fill out our NDA-backed form and schedule a discovery call to discuss your business goals, data readiness, and AI potential.",
    icon: <FaPaperPlane className="text-5xl text-gray-300 mx-auto" />,
  },
  {
    step: "Step: 2",
    title: "Solution Architecture",
    description:
      "Our AI specialists design a tailored solution blueprint based on your tech stack, workflows, and long-term roadmap.",
    icon: <FaProjectDiagram className="text-5xl text-gray-300 mx-auto" />,
  },
  {
    step: "Step: 3",
    title: "Prototype & Validate",
    description:
      "We build a working PoC to validate feasibility, measure early impact, and secure internal alignment.",
    icon: <FaChartBar className="text-5xl text-gray-300 mx-auto" />,
  },
  {
    step: "Step: 4",
    title: "Implementation",
    description:
      "From model training and integration to MLOps and we deliver scalable AI systems with continuous support.",
    icon: <FaCogs className="text-5xl text-gray-300 mx-auto" />,
  },
];

const GetStarted = () => {
  return (
    <section className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Get Started <span className="text-blue-500">with Us</span>
      </h2>
      <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
        Whether you’re exploring AI for the first time or scaling
        enterprise-grade systems, our structured process ensures transparency,
        speed, and impact – all under strict confidentiality
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-md transition hover:shadow-lg"
          >
            <p className="text-gray-400 text-sm font-semibold mb-2">
              {step.step}
            </p>
            <h3 className="text-xl font-bold text-blue-500 mb-4">
              {step.title}
            </h3>
            <p className="text-gray-300 text-sm mb-6">{step.description}</p>
            {step.icon}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full col-span-1 sm:col-span-2 lg:col-span-3 py-6">
        <Link
          to="/get-in-touch"
          className="mt-12 px-6 py-2 bg-blue-500 text-white rounded-full text-lg font-medium hover:bg-blue-600 transition"
        >
          Explore the AceAI Advantage →
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;
