import React from "react";

function Aiworkshops() {
  const cards = [
    {
      imageUrl: "/workshopsImgs/expertstalks.png",
      title: "Guest Lectures & Expert Talks",
      description:
        "Guest lectures, expert talks, and interactive knowledge sessions",
    },
    {
      imageUrl: "/workshopsImgs/hakathon.jpg",
      title: "Hackathons",
      description: "Ideathons, hackathons, and AI innovation challenges",
    },
    {
      imageUrl: "/workshopsImgs/ChatGPT Image Jul 21, 2025, 05_05_20 PM.png",
      title: "Seminars & AI Conferences",
      description:
        "Seminars, symposiums, and national/international AI conferences",
    },
    {
      imageUrl: "/workshopsImgs/exhibitions.png",
      title: "Tech Exhibitions & Demo Days",
      description: "Technical exhibitions, AI expos, and demonstration days",
    },
  ];

  return (
    <section className="bg-[#0a0f1e] py-20 px-4">
      <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-8">
        Workshops
      </h2>
      <div className="flex flex-wrap justify-center py-6 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[300px] md:w-[350px] h-64 overflow-hidden rounded-xl group shadow-lg transition-all duration-300"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg md:text-2xl font-semibold mb-1">
                {card.title}
              </h3>
              <p className="text-white/60 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Aiworkshops;
