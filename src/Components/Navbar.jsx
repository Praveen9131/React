import { useState } from "react";
import logoImg from "../assets/logowhite.png";
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
      <header className="w-full bg-white sticky top-0 z-50 shadow-xl">
        <div className="max-w-[88rem] mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 z-40">
            <img
              src={logoImg}
              alt="Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 sm:ml-6"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black z-40"
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
          <div className="hidden lg:flex flex-1 justify-end">
            <nav className="flex items-center mr-8">
              <ul className="flex space-x-4">
                {["/", "/campus-connect", "/careers"].map((path, index) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className={`px-4 py-2 rounded-full cursor-pointer ${
                        location.pathname === path
                          ? "bg-blue-200 text-black"
                          : "hover:text-black hover:bg-blue-200"
                      }`}
                    >
                      {["Home", "Campus Connect", "Career"][index]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links & Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="w-fit items-center gap-4 flex">
              <button className="text-blue-500 py-2 px-4 border border-blue-500 rounded-md hover:text-blue-700 hover:border-blue-700">
                Register
              </button>
            </div>

            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-md">
                  👤 {user.name || "Profile"}
                </button>
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
                  setShowSignin(true);
                  setShowSignup(false);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu (Overlay + Navigation) */}
          {isOpen && (
            <div
              className="fixed inset-0  bg-opacity-50 z-30 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
          <nav
            className={`fixed lg:hidden top-0 left-0 w-64 h-full bg-blue-50 transition-transform duration-300 ease-in-out transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } z-40`}
          >
            <ul className="flex flex-col items-start mt-20 px-6">
              {["/", "/campus-connect", "/careers"].map((path, index) => (
                <li key={path} className="w-full">
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-full cursor-pointer ${
                      location.pathname === path
                        ? "bg-blue-200 text-black"
                        : "hover:text-black hover:bg-blue-200"
                    }`}
                  >
                    {["Home", "Campus Connect", "Career"][index]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
