import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";

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

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 overflow-x-hidden">
      {/* Navigation */}
      <NavBar
        scrollY={scrollY}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section */}
      <section className="relative w-full pt-[6rem] pb-20 flex flex-col items-center text-center px-4 sm:px-6">
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
      <section className="relative w-full h-[450px] sm:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="relative w-[90%] sm:w-[420px] md:w-[500px] h-[300px] sm:h-[380px] md:h-[420px] perspective-[1000px] will-change-transform">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              animation: "spin 25s linear infinite",
              transformOrigin: "center center",
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
              const angle = (i * 360) / 8;
              return (
                <div
                  key={i}
                  className="absolute w-28 h-44 sm:w-40 sm:h-56 md:w-52 md:h-72 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-110"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                    backfaceVisibility: "visible",
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
        html { overflow-y: scroll; }

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
