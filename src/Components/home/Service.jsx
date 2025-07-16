import React from "react";

function Service() {
  const sectors = [
    "Healthcare",
    "Finance & Insurance",
    "Banking",
    "Retail & E-Commerce",
    "Education & EdTech",
    "Logistics & Supply Chain",
    "Manufacturing",
    "Government & Public Sector",
    "Law & Enforcement",
    "Human Resources",
    "Agriculture & Environment",
  ];

  const emergingSectors = [
    {
      title: "Semiconductor & Chip Design",
      points: [
        "AI-assisted architecture and SoC design",
        "EDA tool acceleration with ML",
        "Fault localization and yield optimization using computer vision",
        "Design space exploration with reinforcement learning",
        "Power-performance-area (PPA) prediction models",
      ],
    },
    {
      title: "Electric Vehicles (EV) & Smart Mobility",
      points: [
        "Battery lifecycle prediction and smart charging",
        "EV route optimization and trip planning",
        "AI for motor control, inverter optimization, and power management",
        "Computer vision for ADAS and autonomous navigation",
        "Predictive maintenance and telematics analytics",
      ],
    },
    {
      title: "Renewable Energy & CleanTech",
      points: [
        "Renewable generation forecasting (solar/wind/hydro)",
        "AI-driven smart grid optimization",
        "Load forecasting and energy distribution management",
        "Predictive maintenance for turbines, panels, and inverters",
        "Climate impact modeling and energy efficiency insights",
      ],
    },
    {
      title: "Telecommunications & 5G",
      points: [
        "AI for network traffic prediction and optimization",
        "Fault detection and automated resolution",
        "Intelligent customer service with NLP and virtual agents",
        "Edge AI for latency-sensitive applications",
        "Predictive analytics for subscriber churn and usage patterns",
      ],
    },
    {
      title: "Aerospace & Defense",
      points: [
        "Predictive maintenance for aircraft systems",
        "AI for mission planning and simulation",
        "Satellite image processing and object detection",
        "Autonomous UAV navigation and control systems",
        "Cyber threat detection and defense analytics",
      ],
    },
    {
      title: "Pharmaceuticals & Life Sciences",
      points: [
        "Drug discovery acceleration using AI-driven modeling",
        "Clinical trial design and participant matching",
        "Genomic data analysis and biomarker identification",
        "Regulatory document automation",
        "AI for pharmacovigilance and adverse event tracking",
      ],
    },
    {
      title: "Construction & Smart Infrastructure",
      points: [
        "AI-based construction project planning and risk analytics",
        "Drone vision for site inspection and progress tracking",
        "Predictive equipment maintenance",
        "Energy modeling for green buildings",
        "Smart city infrastructure analytics",
      ],
    },
    {
      title: "Gaming, AR/VR & Metaverse",
      points: [
        "AI for NPC behavior and game dynamics",
        "Procedural content generation using generative models",
        "Real-time user engagement and monetization analytics",
        "Emotion recognition and personalization",
        "AI-driven simulation for virtual learning environments",
      ],
    },
    {
      title: "Cybersecurity & Threat Intelligence",
      points: [
        "Anomaly detection and fraud prevention using ML",
        "AI-based threat hunting and attack surface monitoring",
        "Behavioral biometrics and identity verification",
        "Automated incident response and SOC optimization",
        "Cyber risk scoring for enterprise security posture",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-8">
          Our Services
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          At AceAI Technologies, we deliver intelligent, future-ready AI
          solutions tailored to meet the dynamic demands of modern industry.
          From enterprise automation to cutting-edge deep tech, our scalable AI
          systems are domain-aware, data-driven, and deployment-ready.
        </p>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-4">
            🔹 Sector-Specific Solutions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sectors.map((sector, i) => (
              <div
                key={i}
                className="bg-[#292b46] text-center p-4 rounded-lg text-sm font-medium"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            ⚡ Emerging Technology Sectors
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {emergingSectors.map((sector, i) => (
              <div
                key={i}
                className="bg-[#292b46] rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-4">
                  {sector.title}
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                  {sector.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-4">
            💡 Tailored AI Solutions
          </h3>
          <p className="text-white text-md">
            We understand that innovation doesn’t always follow a template.
            That’s why AceAI Technologies offers custom AI development for
            emerging domains, interdisciplinary projects, and visionary
            applications—bringing together AI, data science, and system
            integration at scale.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;
