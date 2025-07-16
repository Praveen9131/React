import React, { useState } from "react";

function About() {
  const ReadMore = ({ children, maxLength = 150 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!children) return null;

    if (children.length <= maxLength) {
      return <p className="text-slate-400">{children}</p>;
    }

    const truncatedText = children.substring(0, maxLength) + "...";

    return (
      <p className="text-slate-400">
        {isExpanded ? children : truncatedText}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sky-500 hover:text-sky-400 ml-1 focus:outline-none font-medium"
        >
          {isExpanded ? " Read Less" : " Read More"}
        </button>
      </p>
    );
  };

  const aboutContent = `is a leading innovator in artificial intelligence solutions, dedicated to helping businesses harness the power of AI to drive growth and efficiency. Founded in 2020 by a team of AI experts and industry veterans, we specialize in developing cutting-edge AI applications, providing comprehensive corporate training programs, and offering strategic AI consulting services to organizations across various sectors. Our mission is to democratize AI technology, making it accessible and actionable for businesses of all sizes. With a focus on practical, real-world applications, we bridge the gap between theoretical AI research and business implementation. Our team combines deep technical expertise with industry knowledge to deliver customized solutions that address specific business challenges. Whether you're looking to automate processes, gain insights from data, or create intelligent products, AceAI Technologies provides the tools, knowledge, and support you need to succeed in today's AI-driven landscape.`;

  return (
    <>
      <section className="bg-[#02041A] relative w-full px-4 py-8 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start md:items-center">
            <div className="space-y-6 md:space-y-8">
              <div style={{ opacity: "1", transform: "none" }}>
                <div
                  className="inline-block"
                  style={{ transform: "rotate(0.28185deg)" }}
                ></div>
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-3 md:mb-6"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                    About Us
                  </span>{" "}
                </h1>
                <p
                  className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <b>AceAI Technologies</b>
                </p>
                <div className="text-sm sm:text-base md:text-lg">
                  <ReadMore maxLength={200}>{aboutContent}</ReadMore>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6 md:max-w-[500px] lg:max-w-[600px]">
                <div style={{ opacity: "1", transform: "none" }}>
                  <div className="bg-[#0f1629] backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="p-2 md:p-3 bg-sky-500/30 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-users w-4 h-4 md:w-6 md:h-6 text-sky-500"
                            aria-hidden="true"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                            Corporate Training
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-slate-400">
                            Build In-House AI Capabilities
                          </p>
                        </div>
                      </div>
                      <div style={{ transform: "none" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevron-right w-4 h-4 md:w-6 md:h-6 text-sky-500"
                          aria-hidden="true"
                        >
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ opacity: "1", transform: "none" }}>
                  <div className="bg-[#0f1629] backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="p-2 md:p-3 bg-sky-500/30 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-zap w-4 h-4 md:w-6 md:h-6 text-sky-500"
                            aria-hidden="true"
                          >
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                            AI Consulting
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-slate-400">
                            Transform Your Business with AI
                          </p>
                        </div>
                      </div>
                      <div style={{ ransform: "none" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevron-right w-4 h-4 md:w-6 md:h-6 text-sky-500"
                          aria-hidden="true"
                        >
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative grid gap-2 md:gap-4 lg:gap-6 grid-cols-3 aspect-square w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto md:mx-0 justify-self-center md:justify-self-end mt-8 md:mt-0">
              <div
                className="relative w-full h-full [perspective:1000px]"
                style={{
                  maxWidth: "calc(-1rem + 33.3333vw)",
                  maxHeight: "calc(-1rem + 33.3333vw)",
                  opacity: "1",
                  transform: "none",
                }}
              >
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] [transform:rotateY(180deg)]">
                  <div className="absolute w-full h-full rounded-lg md:rounded-xl overflow-hidden [backface-visibility:hidden]">
                    <img
                      alt="Event photo"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 200px, 250px"
                      srcSet="/_next/image?url=%2Fevent%2Fgroup_photo.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fevent%2Fgroup_photo.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fevent%2Fgroup_photo.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fevent%2Fgroup_photo.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fevent%2Fgroup_photo.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fevent%2Fgroup_photo.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fevent%2Fgroup_photo.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fevent%2Fgroup_photo.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fevent%2Fgroup_photo.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fevent%2Fgroup_photo.webp&amp;w=3840&amp;q=75 3840w"
                      src="https://www.buildfastwithai.com/_next/image?url=%2Fevent%2Fgroup_photo.webp&amp;w=3840&amp;q=75"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-blue-500/10 to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute w-full h-full rounded-lg md:rounded-xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img
                      alt="Event photo"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 200px, 250px"
                      srcSet="/_next/image?url=%2Fevent%2Fai_meets_product.webp&amp;w=256&amp;q=75 256w, /_next/image?url=%2Fevent%2Fai_meets_product.webp&amp;w=384&amp;q=75 384w, /_next/image?url=%2Fevent%2Fai_meets_product.webp&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fevent%2Fai_meets_product.webp&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fevent%2Fai_meets_product.webp&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fevent%2Fai_meets_product.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fevent%2Fai_meets_product.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fevent%2Fai_meets_product.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fevent%2Fai_meets_product.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fevent%2Fai_meets_product.webp&amp;w=3840&amp;q=75 3840w"
                      src=""
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-blue-500/10 to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
