import { useState } from "react";
import logoImg from "../assets/ace-ailogo (2).png";
import Signin from "./Signin.jsx";
import Signup from "./SignUp.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  // Add to top
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // On mount, check for user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  // Unified close function
  const closeModals = () => {
    setShowSignin(false);
    setShowSignup(false);
  };

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-50">
        <div className="max-w-[88rem] mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src={logoImg} alt="Logo" className="h-10 w-10" />
            <div className="">
              <span className="font-bold text-lg bg-gradient-to-b from-[#4AB699] to-[#09305B] text-transparent  bg-clip-text">
                Ace AI
              </span>
              <br />
              <p className="text-sm font-bold bg-gradient-to-b from-[#4AB699] to-[#09305B] text-transparent  bg-clip-text">
                Technology
              </p>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black"
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

          {/* Nav Links */}
          <nav
            className={`absolute lg:static top-20 left-0 w-full h-full lg:w-auto bg-white lg:bg-transparent transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            } lg:flex`}
          >
            <ul className="flex flex-col lg:flex-row lg:text-lg items-center lg:space-x-6 text-black font-medium">
              {["/", "/careers", "/campus-connect"].map((path, index) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`px-4 py-2 rounded-full cursor-pointer ${
                      location.pathname === path
                        ? "bg-blue-200 text-black"
                        : "hover:text-black hover:bg-blue-200"
                    }`}
                  >
                    {["Home", "Career", "Campus Connect"][index]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div class="w-fit items-center gap-4 hidden sm:flex">
              <a class="cursor-pointer" target="_blank" href="">
                <svg viewBox="0 0 512 512" class="fill-blue-900 w-6 h-6">
                  <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"></path>
                </svg>
              </a>
              <a class="cursor-pointer" target="_blank" href="">
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  class="fill-blue-500 w-6 h-6"
                >
                  <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-253.927,424.544c135.939,0 210.268,-112.643 210.268,-210.268c0,-3.218 0,-6.437 -0.153,-9.502c14.406,-10.421 26.973,-23.448 36.935,-38.314c-13.18,5.824 -27.433,9.809 -42.452,11.648c15.326,-9.196 26.973,-23.602 32.49,-40.92c-14.252,8.429 -30.038,14.56 -46.896,17.931c-13.487,-14.406 -32.644,-23.295 -53.946,-23.295c-40.767,0 -73.87,33.104 -73.87,73.87c0,5.824 0.613,11.494 1.992,16.858c-61.456,-3.065 -115.862,-32.49 -152.337,-77.241c-6.284,10.881 -9.962,23.601 -9.962,37.088c0,25.594 13.027,48.276 32.95,61.456c-12.107,-0.307 -23.448,-3.678 -33.41,-9.196l0,0.92c0,35.862 25.441,65.594 59.311,72.49c-6.13,1.686 -12.72,2.606 -19.464,2.606c-4.751,0 -9.348,-0.46 -13.946,-1.38c9.349,29.426 36.628,50.728 68.965,51.341c-25.287,19.771 -57.164,31.571 -91.8,31.571c-5.977,0 -11.801,-0.306 -17.625,-1.073c32.337,21.15 71.264,33.41 112.95,33.41Z"></path>
                </svg>
              </a>
            </div>

            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-md">
                  👤 {user.name || "Profile"}
                </button>

                {/* Dropdown on hover */}
                <div className="absolute hidden group-hover:flex flex-col right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md z-10">
                  <div className="px-4 py-2 border-b border-gray-200 text-sm">
                    {user.email}
                  </div>
                  <button
                    onClick={logout}
                    className="px-4 py-2 hover:bg-gray-100 text-left text-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowSignin(true); // if you're using modal
                  setShowSignup(false);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Signin and Signup modals */}
      {showSignin && (
        <Signin
          onClose={closeModals}
          onSwitchToSignup={() => {
            setShowSignin(false);
            setShowSignup(true);
          }}
        />
      )}
      {showSignup && (
        <Signup
          onClose={closeModals}
          onSwitchToSignin={() => {
            setShowSignup(false);
            setShowSignin(true);
          }}
        />
      )}
    </>
  );
}

export default Navbar;
