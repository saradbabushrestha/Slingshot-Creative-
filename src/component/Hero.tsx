import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

const SlingShotLanding: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [translateZ, setTranslateZ] = useState(
    window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 380 : 450
  );

  // Media list (Images + Videos)
  const mediaItems: MediaItem[] = [
    { type: "image", src: "/public/1.jpeg" },
    { type: "video", src: "/public/intro.mp4" },
    { type: "image", src: "/public/2.jpeg" },
    { type: "video", src: "/public/1.mp4" },
    { type: "image", src: "/public/3.jpeg" },
    { type: "image", src: "/public/4.jpeg" },
    { type: "video", src: "/public/Cat web meme.mp4" },
    { type: "image", src: "/public/5.jpeg" },
  ];

  // Responsive translateZ
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

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 ">
      {/* Shimmer Style */}
      <style>{`
        .shimmer-text {
          background: linear-gradient(90deg, #92400e, #d97706, #92400e);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          from { background-position: 0% }
          to { background-position: 200% }
        }
      `}</style>

      {/* Navbar */}
      <NavBar
        scrollY={scrollY}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section */}
      <section className="relative w-full pt-[6rem] pb-20 flex flex-col items-center text-center px-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          <span className="shimmer-text">
            Aim Higher. Create Bolder. Impact Deeper.
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-10 max-w-3xl">
          To empower businesses of all sizes to achieve their marketing
          aspirations by delivering bespoke, creative solutions that drive
          engagement and growth.
        </p>

        <Link to="/about">
          <button className="bg-gradient-to-r from-amber-700 to-orange-700 text-white px-10 py-4 rounded-lg font-semibold hover:scale-105 transition">
            Explore More
          </button>
        </Link>
      </section>

      {/* 3D Image + Video Carousel */}
      <section className="relative w-full h-[450px] sm:h-[600px] flex items-center justify-center ">
        <div className="relative w-[90%] sm:w-[420px] md:w-[500px] h-[300px] sm:h-[380px] md:h-[420px] perspective-[1000px]">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              animation: "spin 25s linear infinite",
            }}
          >
            {mediaItems.map((item, i) => {
              const angle = (i * 360) / mediaItems.length;

              return (
                <div
                  key={i}
                  className="absolute w-28 h-44 sm:w-40 sm:h-56 md:w-52 md:h-72 rounded-2xl  shadow-xl hover:scale-110 transition"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                    backfaceVisibility: "visible",
                  }}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`media-${i}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
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
