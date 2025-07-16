import { useState } from "react";
import logoImg from "../assets/Ace-Ai-logo.jpg"; // adjust path
import Signin from "./Signin.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  return (
    <>
      <header className="w-full bg-[#02041A]">
        <div className="max-w-[88rem] mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src={logoImg} alt="Logo" className="h-12 w-12" />
            <div className="text-white text-sm">
              <div className="font-bold">Ace AI</div>
              <div className="text-xs">Technology</div>
            </div>
          </a>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <nav
            className={`absolute lg:static top-20 left-0 w-full lg:w-auto bg-[#02041A] lg:bg-transparent transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            } lg:flex`}
          >
            <ul className="flex flex-col lg:flex-row items-center lg:space-x-6 text-[#c5bcbc] font-medium">
              <li className="px-4 py-2 hover:text-white hover:bg-[#1a2030] rounded-full cursor-pointer">
                Home
              </li>
              <li className="px-4 py-2 hover:text-white hover:bg-[#1a2030] rounded-full cursor-pointer">
                Interns
              </li>
              <li className="px-4 py-2 hover:text-white hover:bg-[#1a2030] rounded-full cursor-pointer">
                Courses
              </li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* SVG Icon 1 */}
            <svg viewBox="0 0 512 512" className="fill-white w-6 h-6">
              <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"></path>
            </svg>

            {/* SVG Icon 2 */}
            <svg
              fill="currentColor"
              viewBox="0 0 512 512"
              className="fill-white w-6 h-6"
            >
              <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-253.927,424.544c135.939,0 210.268,-112.643 210.268,-210.268c0,-3.218 0,-6.437 -0.153,-9.502c14.406,-10.421 26.973,-23.448 36.935,-38.314c-13.18,5.824 -27.433,9.809 -42.452,11.648c15.326,-9.196 26.973,-23.602 32.49,-40.92c-14.252,8.429 -30.038,14.56 -46.896,17.931c-13.487,-14.406 -32.644,-23.295 -53.946,-23.295c-40.767,0 -73.87,33.104 -73.87,73.87c0,5.824 0.613,11.494 1.992,16.858c-61.456,-3.065 -115.862,-32.49 -152.337,-77.241c-6.284,10.881 -9.962,23.601 -9.962,37.088c0,25.594 13.027,48.276 32.95,61.456c-12.107,-0.307 -23.448,-3.678 -33.41,-9.196l0,0.92c0,35.862 25.441,65.594 59.311,72.49c-6.13,1.686 -12.72,2.606 -19.464,2.606c-4.751,0 -9.348,-0.46 -13.946,-1.38c9.349,29.426 36.628,50.728 68.965,51.341c-25.287,19.771 -57.164,31.571 -91.8,31.571c-5.977,0 -11.801,-0.306 -17.625,-1.073c32.337,21.15 71.264,33.41 112.95,33.41Z"></path>
            </svg>

            {/* Sign In Button */}
            <div className="flex items-center space-x-4"></div>
            <div className="px-2 py-2 text-sm lg:px-4 lg:text-base">
              <button
                onClick={() => setShowSignin(true)}
                className="bg-white text-black px-4 py-2 rounded-xl font-medium flex items-center hover:opacity-85 transition-opacity duration-200"
              >
                Sign In
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
                  className="lucide lucide-log-in w-4 h-4 ml-2"
                  aria-hidden="true"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" x2="3" y1="12" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {showSignin && <Signin onClose={() => setShowSignin(false)} />}
    </>
  );
}

export default Navbar;
