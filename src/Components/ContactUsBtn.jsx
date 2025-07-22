import React, { useState } from "react";
import { FiMail } from "react-icons/fi";

const ContactUsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center py-6">
      <button
        className="inline-flex items-center gap-2 px-6 py-3 text-black bg-white hover:bg-white/70 focus:ring-4 focus:outline-none focus:ring-white/20 font-medium rounded-full shadow-md transition-all duration-300 text-lg"
        onClick={() => setIsOpen(true)}
      >
        <FiMail className="text-xl" />
        Contact Us
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="text-white bg-gray-900 rounded-xl p-8 max-w-md w-full shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-white dark:text-white mb-4">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-white text-black rounded-lg hover:bg-white/70 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsButton;
