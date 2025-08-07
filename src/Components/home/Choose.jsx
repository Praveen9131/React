import React from "react";
import { Link } from "react-router-dom";

import {
  Wrench,
  Settings,
  Group,
  RefreshCw,
  Bot,
  BarChart2,
} from "lucide-react";

const features = [
  {
    icon: <Settings className="w-6 h-6 text-blue-500" />,
    title: "Built for Production, Not Just Prototypes",
    description:
      "We specialize in delivering deployable, maintainable AI solutions – not just POCs or experiments. Your models go live, stay optimized, and scale as your business grows.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-blue-500" />,
    title: "Seamless Systems Integration",
    description:
      "We ensure your AI integrates smoothly with your existing tools, APIs, databases, and infrastructure – no disruption, no silos.",
  },
  {
    icon: <Group className="w-6 h-6 text-blue-500" />,
    title: "Full-Stack AI Execution Team",
    description:
      "From data engineering to ML modeling, backend APIs to deployment – we bring a complete team of architects, data scientists, and developers to execute end-to-end.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-blue-500" />,
    title: "Continuous Optimization & MLOPs",
    description:
      "Our commitment doesn’t end at deployment. We set up full MLOPs pipelines for automated retraining, performance monitoring, and ongoing optimization.",
  },
  {
    icon: <Bot className="w-6 h-6 text-blue-500" />,
    title: "Domain-Aware AI Design",
    description:
      "We don’t build in silos. Our solutions are trained, tested, and fine-tuned with industry-specific datasets and business logic – whether it’s fintech, healthcare, retail, or beyond.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-blue-500" />,
    title: "Transparent, Metric-Driven Approach",
    description:
      "From Day 1, we align our builds to your KPIs – so you see impact, not just output.",
  },
];

const Choose = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose Ace AI</h2>
        <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
          When it comes to building enterprise-grade AI, you need more than
          strategy – you need a partner who can deliver at scale. Ace AI brings
          deep technical expertise, domain alignment, and production-ready
          engineering to every AI engagement. Here’s what sets us apart from
          others:
        </p>
      </div>
      <div className="grid gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-2 lg:px-20 mb-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-8 mb-4">
            <div className="bg-blue-100 rounded-lg p-4 flex items-center justify-center">
              {feature.icon}
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full col-span-1 sm:col-span-2 lg:col-span-3 py-10">
        <Link
          to="/get-in-touch"
          className="px-6 py-2 bg-blue-500 text-white rounded-xl text-sm sm:text-lg font-medium hover:bg-blue-600 transition"
        >
          Explore the Ace Ai Advantages
        </Link>
      </div>
    </div>
  );
};

export default Choose;
