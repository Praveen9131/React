import React from "react";

function CampusConnect() {
  const programs = [
    {
      title: "AI Talent Development & Academic Collaboration",
      emoji: "🎓",
      items: [
        "We collaborate with educational institutions to strengthen teaching-learning ecosystems and build a future-ready AI workforce. Our student-focused programs are aligned with national education policies and global industry demands.",
      ],
    },
    {
      title: "Training & Skill Development",
      emoji: "📚",
      items: [
        "AI foundation and advanced training programs",
        "Industry-relevant workshops and bootcamps",
        "Certification courses in ML, Deep Learning, NLP, etc.",
        "Faculty Development Programs and Train-the-Trainer",
      ],
    },
    {
      title: "Internships & Experiential Learning",
      emoji: "💼",
      items: [
        "On-site/remote internships for students",
        "Real-time project-based learning",
        "Exposure to live enterprise AI deployments",
        "Expert mentorship and agile workflows",
      ],
    },
    {
      title: "Academic Events & Outreach",
      emoji: "🎤",
      items: [
        "Guest lectures and expert talks",
        "Seminars, symposiums, and AI conferences",
        "Ideathons, hackathons, and AI challenges",
        "Technical exhibitions and AI expos",
      ],
    },
    {
      title: "Research & Innovation Engagement",
      emoji: "🔬",
      items: [
        "Joint research projects with students/faculty",
        "Access to datasets and computing resources",
        "Guidance on publications and patents",
        "Support for innovation labs and AI clubs",
      ],
    },
    {
      title: "Teaching-Learning Support",
      emoji: "📖",
      items: [
        "Co-creation of AI course content",
        "Blended learning models",
        "Career readiness and resume building",
        "Mentorship for student startups",
      ],
    },
    {
      title: "Vision: AI-Ready Graduates for the Future Workforce",
      subheading:
        "Through Campus Connect, AceAI Technologies empowers students to:",
      emoji: " 📈 ",
      items: [
        " Build deep, practical AI competencies",
        " Enhance employability and industry readiness",
        " Engage in innovation and entrepreneurial ventures",
        " Become contributors to the AI ecosystem, not just consumers",
        ,
      ],
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-black to-[#40435c] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Campus Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Empowering Future AI Talent with AceAI Technologies
          </p>
          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-white/60 transition duration-300"
          >
            Join Us
          </a>
        </div>
      </section>

      <section id="programs" className="py-20 bg-[#02041A]">
        <div className="max-w-5xl mx-auto px-4">
          <p className=" text-lg md:text-xl  text-white text-center mb-14">
            At AceAI Technologies, we go beyond building intelligent
            solutions—we cultivate intelligent talent. Our Campus Connect
            initiative is dedicated to bridging the gap between academia and
            industry by equipping students with the skills, experiences, and
            opportunities they need to thrive in the AI-driven future.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 ">
            {programs.map((program, index) => (
              <div
                key={index}
                className="text-white bg-[#0f1629]/60  p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300  hover:shadow-sky-500/10 hover:-translate-y-1 "
              >
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>{program.emoji}</span> {program.title}
                  <br />
                </h3>
                <span className="text-lg mb-4 text-center text-white/90 ">
                  {program.subheading}
                </span>
                <ul className="list-disc list-inside text-white/60 space-y-2 text-base">
                  {program.items.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex items-start justify-center bg-[#02041A] py-10">
        <a
          href=""
          className="inline-block bg-white text-black px-9 py-3 rounded-lg hover:bg-white/60 transition"
        >
          Contact us
        </a>
      </div>
      <footer className="bg-gray-900 text-white py-6 px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} AceAI Technologies. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

export default CampusConnect;
