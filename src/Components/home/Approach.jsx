import React from "react";

const Approach = () => {
  const approachSections = [
    {
      id: 1,
      title: "Solution Design",
      description:
        "Our architects define the technical blueprint - selecting suitable AI models, frameworks, and system integrations that align with your goals.",
      subsections: [
        {
          title: "Requirement Analysis",
          description:
            "We work closely with your teams to understand specific challenges, data availability, and infrastructure readiness.",
        },
      ],
    },
    {
      id: 2,
      title: "Model Development & Testing",
      description:
        "We build, train, and rigorously test machine learning or deep learning models using your domain-specific data.",
    },
    {
      id: 3,
      title: "System Integration",
      description:
        "The solution is integrated with your existing applications, APIs, and data pipelines for seamless operations.",
    },
    {
      id: 4,
      title: "Continuous Support & Optimization",
      description:
        "Post-deployment, we provide ongoing support, periodic retraining, and enhancements to ensure consistent performance and scalability.",
      subsections: [
        {
          title: "Deployment & Monitoring",
          description:
            "We deploy the solution in your preferred environment – on-prem or cloud – and set up a monitoring dashboard for performance tracking.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Approach<span className="text-blue-600">.</span>
          </h1>
          <div className="flex justify-center items-center">
            <p className="text-gray-600 w-4xl text-center md:text-lg">
              At Ace AI, we follow a structured, execution-focused approach to
              deliver AI solutions that are production-ready, scalable, and
              tailored to your business needs.
            </p>
          </div>
        </div>

        {/* Zig-Zag Layout */}
        <div className="space-y-24">
          {approachSections.map((section, idx) => {
            const isEven = section.id % 2 === 0;

            return (
              <div
                key={section.id}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Number */}
                <div className="w-full md:w-1/4 flex justify-center md:justify-center">
                  <div className="text-5xl font-bold text-blue-500">
                    0{section.id}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-3/4 bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{section.description}</p>

                  {section.subsections &&
                    section.subsections.map((sub, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {sub.title}
                        </h3>
                        <p className="text-gray-600">{sub.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center bg-blue-50 p-10 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Start Your AI Journey With Us
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition">
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Approach;
