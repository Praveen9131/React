import React from "react";
import ApplyBtn from "./ApplyBtn.jsx";
import Footer from "./home/Footer.jsx";

const jobListings = [
  {
    title: "Frontend Developer Intern",
    type: ["Interns", "FullTime"],
    description:
      "Work with modern frontend frameworks and enhance your skills in React.js while building real-world UI experiences.",
  },
  {
    title: "Backend Developer Intern",
    type: ["Interns", "FullTime"],
    description:
      "Get hands-on experience with Node.js or Python-based backend systems and contribute to scalable APIs and services.",
  },
  {
    title: "UI/UX Designer",
    type: ["Interns", "FullTime"],
    description:
      "Design intuitive user experiences and work alongside developers to bring wireframes and visual concepts to life.",
  },
  {
    title: "AI/ML Engineer",
    type: ["Interns", "FullTime"],
    description:
      "Develop, test, and deploy machine learning models. Work on LLMs, data pipelines, and intelligent features in production systems.",
  },
  {
    title: "Cloud Engineer",
    type: ["Interns", "FullTime"],
    description:
      "Architect and manage cloud-based deployments using AWS, Azure, or GCP for scalable and secure applications.",
  },
  {
    title: "DevOps Engineer",
    type: ["Interns", "FullTime"],
    description:
      "Streamline CI/CD pipelines, automate infrastructure, and ensure smooth deployment and monitoring workflows.",
  },
];

const Careers = () => {
  return (
    <>
      <div className="bg-blue-50 text-black min-h-screen py-10 px-4 md:px-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Open Roles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobListings.map((job, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-xl p-6 shadow-sm shadow-gray-400 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-lg md:text-2xl font-semibold mb-3">
                {job.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.type.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-200 text-blue-900 text-sm font-medium px-2.5 py-0.5 rounded border border-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-6 line-clamp-3">
                {job.description}
              </p>
              <ApplyBtn />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Careers;
