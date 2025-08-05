import React from "react";

const categories = [
  {
    title: "AI & ML Frameworks",
    logos: [
      "TensorFlow",
      "PyTorch",
      "Chainer",
      "Keras",
      "scikit-learn",
      "OpenCV",
    ],
  },
  {
    title: "LLMs & NLP",
    logos: ["OpenAI", "Accelerate", "LangChain"],
  },
  {
    title: "MLOps & Deployment",
    logos: ["Airflow", "mlflow", "docker", "kubernetes"],
  },
  {
    title: "Cloud & Data Platforms",
    logos: ["aws", "Azure", "GoogleCloud", "Snowflake", "Databricks"],
  },
  {
    title: "Data Engineering & Storage",
    logos: ["Kafka", "Spark", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Visualization & Reporting",
    logos: ["PowerBI", "Tableau", "Looker"],
  },
];

export default function Technologies() {
  return (
    <div className="px-4 py-12 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Technologies We Use
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto md:text-lg">
        We work across the AI stack – from data engineering to model deployment
        – using scalable, production-grade tools and frameworks.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-6 md:text-2xl">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {category.logos.map((logo, i) => (
                <span
                  key={i}
                  className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full md:text-md"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
