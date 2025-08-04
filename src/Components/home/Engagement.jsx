import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaCogs, FaLightbulb, FaMagic, FaTools } from "react-icons/fa";

const engagementModels = [
  {
    icon: <FaUsers className="text-blue-500 text-5xl" />,
    title: "Team Augmentation",
    description:
      "Add skilled AI engineers, ML experts, or data scientists to your team to accelerate existing projects.",
  },
  {
    icon: <FaCogs className="text-blue-500 text-5xl" />,
    title: "End-to-End AI Delivery",
    description:
      "We take full ownership – from problem definition and architecture to development, deployment and ongoing optimization.",
  },
  {
    icon: <FaLightbulb className="text-blue-500 text-5xl" />,
    title: "Prototype to Product",
    description:
      "Validate an AI idea with fast prototype, then scale it into a production-ready solution with our technical leadership.",
  },
];

const gridStyles = [
  {
    icon: <FaMagic className="text-blue-500 text-5xl" />,
    title: "Managed AI Services",
    description:
      "Fully managed AI operations – from data pipelines to model retraining – delivered with performance SLAs.",
  },
  {
    icon: <FaTools className="text-blue-500 text-5xl" />,
    title: "Build-Operate-Transfer (BOT)",
    description:
      "We build and run your AI solution, and gradually transfer the system and know-how to your internal team.",
  },
];

const Engagement = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Engagement Models
      </h2>
      <p className="text-gray-600 max-w-2xl md:text-lg mx-auto mb-12">
        Flexible engagement formats to suit your delivery timelines, internal
        bandwidth, and technical complexity.
      </p>

      {/* Grid Section 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {engagementModels.map((model, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-transparent hover:border-blue-200 transition"
          >
            <div className="flex items-center space-x-4 mb-4 justify-center">
              {model.icon}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {model.title}
            </h3>
            <p className="text-gray-700 text-sm">{model.description}</p>
          </div>
        ))}
      </div>

      {/* Grid Section 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {gridStyles.map((model, index) => (
          <div
            key={index}
            className="bg-white  p-6 rounded-xl shadow-md border border-transparent hover:border-blue-200 transition"
          >
            <div className="flex items-center space-x-4 mb-4 justify-center">
              {model.icon}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {model.title}
            </h3>
            <p className="text-gray-700 text-sm">{model.description}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full col-span-1 sm:col-span-2 lg:col-span-3 py-10">
        <Link
          to="/get-in-touch"
          className="px-6 py-2 bg-blue-500 text-white rounded-xl text-lg font-medium hover:bg-blue-600 transition"
        >
          Let’s Build Our Partnership
        </Link>
      </div>
    </section>
  );
};

export default Engagement;
