import React from "react";

function About() {
  return (
    <section className="max-w-8xl mx-auto px-4 py-16 mt-10">
      <div className="relative bg-white overflow-hidden">
        {/* Peach background at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-blue-300 -z-10" />

        <h2 className="text-2xl md:text-4xl font-bold text-center text-black mb-6">
          Why Your Business Needs AI Solution Providers
          <span className="text-blue-500">.</span>
        </h2>

        <p className="text-center md:text-lg text-gray-600 max-w-3xl mx-auto mb-12 px-2">
          Modern enterprises face growing demands for automation,
          personalization, and real-time intelligence. While AI offers the
          potential, realizing that potential requires more than strategy it
          requires execution. That’s where AI solution providers come in.
        </p>

        {/* Cards Section */}
        <div className="bg-blue-100 rounded-t-3xl pt-10 pb-6 px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: "1",
                title: "From Idea to Implementation",
                desc: "AI solution providers don’t stop at planning. They turn concepts into working AI systems that are trained, tested, and deployed into your real-world environments.",
              },
              {
                number: "2",
                title: "Production-Ready Engineering",
                desc: "A working model in a lab is just the start. We ensure your AI systems are built for performance, scalability, and reliability – ready to handle live data, users, and scale.",
              },
              {
                number: "3",
                title: "Faster Time to Value",
                desc: "With an execution-focused partner, you move from prototype to production faster – minimizing risk, reducing overhead and accelerating ROI.",
              },
              {
                number: "4",
                title: "Scalable Deployments",
                desc: "Our systems are designed with scale in mind, ensuring seamless growth as your business expands its digital capabilities.",
              },
              {
                number: "5",
                title: "Expert Support",
                desc: "From development to deployment, our expert teams guide you at every stage of your AI journey with 24/7 support.",
              },
              {
                number: "6",
                title: "Secure & Compliant",
                desc: "We prioritize data security and compliance, so your business stays protected while driving innovation.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
              >
                <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-md text-lg font-bold mb-4">
                  {card.number}
                </div>
                <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                <p className="text-gray-600 text-md">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center w-full mt-10">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-xl text-lg font-medium hover:bg-blue-600 transition">
              Let’s Talk About Our Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
