import React, { useState } from "react";

function About() {
  return (
    <div className="min-h-scree flex flex-col bg-black font-sans">
      <header className="py-8 px-4 md:px-8 text-center">
        <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 md:text-5xl font-bold mb-4">
          About Us
        </h1>
        <h2 className="text-2xl text-white md:text-3xl font-semibold mb-4">
          AceAI Technologies
        </h2>
        <p className="text-lg text-white md:text-xl max-w-3xl mx-auto leading-relaxed">
          Limitless intelligence that transcends the boundaries of time and
          place.
        </p>
      </header>

      <div className="text-white  lg:gap-12 items-start md:items-center">
        <section className="px-46 py-6">
          <p className="mb-4 text-lg md:text-centre leading-relaxed">
            At AceAI Technologies, we envision a world where artificial
            intelligence is not just a tool—but an intelligent companion
            accessible to all, powering every task, in every domain, at any time
            and from any place. Our mission is to make this vision a reality.
          </p>
        </section>

        <main className="grid md:grid-cols-2 px-4 gap-8 md:gap-20 md:px-10 py-8 space-y-8 max-w-5xl mx-auto">
          <section>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Our Vision
            </h3>
            <p className="mb-4 text-md md:text-lg leading-relaxed">
              As a premier AI solutioning company, we deliver advanced,
              scalable, and sector-specific AI technologies that redefine how
              businesses operate and innovate. Our work spans across
              industries—healthcare, finance, education, logistics,
              manufacturing, retail, public services—and addresses critical
              functions with precision, agility, and foresight.
            </p>
          </section>

          <section>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Our Philosophy
            </h3>
            <p className="mb-4 text-md md:text-lg leading-relaxed">
              At the heart of our philosophy is limitless intelligence that
              transcends the boundaries of time and place. We are committed to
              delivering AI solutions that are inclusive, adaptable, and
              transformative. Built on a foundation of ethics, transparency, and
              innovation, our AI is designed to empower people and
              organizations—wherever they are, whenever they need it.
            </p>
          </section>

          <section>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Our Expertise
            </h3>
            <ul className="list-disc list-inside space-y-2 text-md md:text-lg leading-relaxed">
              <li>End-to-end AI strategy and consulting</li>
              <li>Custom AI model development</li>
              <li>Functional and industry-specific automation</li>
              <li>Seamless integration and lifecycle support</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Join Us</h3>
            <p className="text-md md:text-lg leading-relaxed max-w-3xl mx-auto">
              Join AceAI Technologies as we shape a smarter, more connected
              world—where intelligence is not a privilege, but a platform for
              progress.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default About;
