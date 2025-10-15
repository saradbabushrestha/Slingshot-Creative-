import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type NavBarProps = {
  scrollY: number;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navItems = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/portfolio" },
  { name: "Our Client", path: "/testimonials" },
  { name: "FAQ", path: "/faq" },
];

const NavBar: React.FC<NavBarProps> = ({
  scrollY,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll smoothly to section
  const handleScroll = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);

    const sectionId =
      path === "/" ? "home" : path.replace("/", "").toLowerCase();
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
        scrollY > 50 || isMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      style={{
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleScroll("/")}
          >
            <img src="/horilogo.png" alt="Logo" className="w-auto h-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const active =
                location.pathname === item.path ||
                (item.path === "/" && location.pathname === "");
              return (
                <button
                  key={item.path}
                  onClick={() => handleScroll(item.path)}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
            <button
              onClick={() => handleScroll("/mail")}
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all font-medium"
            >
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 px-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleScroll(item.path)}
                className={`block w-full text-left py-3 text-gray-700 hover:text-orange-600 transition-colors ${
                  location.pathname === item.path ? "text-orange-600" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleScroll("/mail")}
              className="w-full mt-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-2.5 rounded-lg"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
