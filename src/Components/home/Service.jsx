import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "AI for Semiconductor Design",
    description:
      "Accelerating chip design with machine learning, fault localization, and EDA optimization techniques.",
    image: "/serviceImages/semiconductors.png",
  },
  {
    title: "AI in Education",
    description:
      "Enhancing personalized learning, automated assessment, and intelligent tutoring systems with AI.",
    image: "/serviceImages/education.png",
  },
  {
    title: "AI in Healthcare",
    description:
      "Empowering diagnostics, treatment planning, and patient monitoring through AI-driven insights.",
    image: "/serviceImages/healthcare.png",
  },
  {
    title: "AI in Banking",
    description:
      "Enabling fraud detection, customer insights, and automated financial operations with smart AI tools.",
    image: "/serviceImages/banking.png",
  },
  {
    title: "AI in Law & Enforcement",
    description:
      "Assisting in legal analytics, evidence review, and predictive policing with secure AI solutions.",
    image: "/serviceImages/law.png",
  },
  {
    title: "AI in Human Resources",
    description:
      "Optimizing recruitment, employee engagement, and talent analytics with intelligent automation.",
    image: "/serviceImages/hr.png",
  },
  {
    title: "AI in Agriculture",
    description:
      "Boosting crop yield, disease detection, and resource efficiency using precision agriculture AI.",
    image: "/serviceImages/agriculture.png",
  },
  {
    title: "AI in Finance",
    description:
      "Powering algorithmic trading, credit risk scoring, and real-time financial forecasting.",
    image: "/serviceImages/finance.png",
  },
];
const Service = () => {
  return (
    <section className="bg-[#0a0f1e] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600  mb-6 text-center">
          Our Services
        </h2>
        <div className="md:px-60 text-center mb-10 hover:">
          <p className="text-white/70 text-md sm:text-lg">
            At AceAI Technologies, we build intelligent, scalable AI solutions
            designed for real-world impact. From automation to deep tech, our
            systems are domain-smart, data-driven, and ready to deploy.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
