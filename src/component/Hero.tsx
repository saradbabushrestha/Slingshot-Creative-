import React, { useState, useEffect } from "react";

const SlingShotLanding: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [translateZ, setTranslateZ] = useState(
    window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 380 : 450
  );

  // Responsive translateZ adjustment
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setTranslateZ(300);
      else if (window.innerWidth < 1024) setTranslateZ(380);
      else setTranslateZ(450);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About us",
    "Services",
    "Case Studies",
    "Our Client",
    "FAQ",
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 || isMenuOpen
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="public/horilogo.png" alt="Logo" className="w-45 h-20" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all font-medium">
                Contact us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
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
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block py-3 text-gray-700 hover:text-orange-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-2.5 rounded-lg">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 flex flex-col items-center text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-fade-in">
          Creativity in Motion: Aiming Beyond Ordinary
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          We are SlingShot Creative — a production house and creative agency
          bringing bold ideas to life. We craft stories with originality,
          precision, and impact.
        </p>
        <button className="bg-gradient-to-r from-amber-700 to-orange-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all">
          Explore More
        </button>
      </section>

      {/* 3D Image Carousel Section */}
      <section className="relative w-full h-[450px] sm:h-[500px] flex items-center justify-center ">
        <div className="relative w-[90%] sm:w-[420px] md:w-[500px] h-[300px] sm:h-[380px] md:h-[420px] perspective-[1000px]">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              animation: "spin 25s linear infinite",
            }}
          >
            {[
              "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=600&fit=crop",
              "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=600&fit=crop",
              "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=600&fit=crop",
              "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=400&h=600&fit=crop",
              "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=400&h=600&fit=crop",
              "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=600&fit=crop",
              "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=400&h=600&fit=crop",
              "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=600&fit=crop",
            ].map((src, i) => {
              const angle = (i * 360) / 8; // 8 images
              return (
                <div
                  key={i}
                  className="absolute w-28 h-44 sm:w-40 sm:h-56 md:w-52 md:h-72 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-110"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                  }}
                >
                  <img
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style>{`
        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .perspective-[1000px] {
          perspective: 1000px;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SlingShotLanding;
