import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Esther Hills",
      role: "Lead Intranet Technician",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Esther",
    },
    {
      id: 2,
      name: "Ethel Johnston",
      role: "Human Directives Director",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethel",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Senior Product Manager",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Creative Director",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
  ];

  const handlePrev = (): void => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen relative flex flex-col lg:flex-row bg-white ">
      {/* White Section (Top in mobile / Left in desktop) */}
      <div className="w-full lg:w-1/5 ml-[0] lg:ml-[6%] bg-white flex flex-col items-center lg:items-start justify-center py-12 ">
        <div className="flex flex-col items-center lg:items-center text-center lg:text-left">
          <img
            src="/logo2.png"
            alt="Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-6"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Testimonials
          </h2>
          <div className="flex justify-center lg:justify-start gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors bg-white shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors bg-white shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* White Background Section with Floating Bubbles */}
      <div className="w-screen flex-1 flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-10 relative overflow-hidden bg-white border-amber-600 border-2">
        {/* Animated floating bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large bubbles */}
          <div
            className="absolute w-32 h-32 rounded-full border-2 border-orange-200"
            style={{
              top: "15%",
              left: "8%",
              animation: "floatBubble 20s ease-in-out infinite",
              background:
                "radial-gradient(circle at 30% 30%, rgba(251, 184, 126, 0.15), rgba(251, 184, 126, 0.05))",
            }}
          />
          <div
            className="absolute w-48 h-48 rounded-full border-2 border-orange-100"
            style={{
              top: "60%",
              right: "12%",
              animation: "floatBubble 25s ease-in-out infinite reverse",
              background:
                "radial-gradient(circle at 30% 30%, rgba(254, 243, 199, 0.2), rgba(254, 243, 199, 0.05))",
            }}
          />
          <div
            className="absolute w-40 h-40 rounded-full border-2 border-orange-200"
            style={{
              bottom: "25%",
              left: "18%",
              animation: "floatBubble 22s ease-in-out infinite",
              background:
                "radial-gradient(circle at 30% 30%, rgba(251, 184, 126, 0.12), rgba(251, 184, 126, 0.03))",
            }}
          />
          <div
            className="absolute w-56 h-56 rounded-full border-2 border-orange-100"
            style={{
              top: "35%",
              right: "20%",
              animation: "floatBubble 28s ease-in-out infinite reverse",
              background:
                "radial-gradient(circle at 30% 30%, rgba(254, 243, 199, 0.18), rgba(254, 243, 199, 0.04))",
            }}
          />

          {/* Small bubbles */}
          <div
            className="absolute w-20 h-20 rounded-full border border-orange-300"
            style={{
              top: "45%",
              left: "25%",
              animation: "floatBubble 18s ease-in-out infinite",
              background:
                "radial-gradient(circle at 30% 30%, rgba(251, 184, 126, 0.1), transparent)",
            }}
          />
          <div
            className="absolute w-24 h-24 rounded-full border border-orange-200"
            style={{
              bottom: "15%",
              right: "30%",
              animation: "floatBubble 23s ease-in-out infinite reverse",
              background:
                "radial-gradient(circle at 30% 30%, rgba(254, 243, 199, 0.15), transparent)",
            }}
          />
          <div
            className="absolute w-16 h-16 rounded-full border border-orange-300"
            style={{
              top: "20%",
              right: "15%",
              animation: "floatBubble 19s ease-in-out infinite",
              background:
                "radial-gradient(circle at 30% 30%, rgba(251, 184, 126, 0.08), transparent)",
            }}
          />
          <div
            className="absolute w-28 h-28 rounded-full border border-orange-100"
            style={{
              bottom: "40%",
              left: "12%",
              animation: "floatBubble 21s ease-in-out infinite reverse",
              background:
                "radial-gradient(circle at 30% 30%, rgba(254, 243, 199, 0.12), transparent)",
            }}
          />
        </div>

        <style>{`
          @keyframes floatBubble {
            0%, 100% {
              transform: translateY(0) translateX(0) scale(1);
            }
            25% {
              transform: translateY(-40px) translateX(30px) scale(1.05);
            }
            50% {
              transform: translateY(-20px) translateX(-30px) scale(0.95);
            }
            75% {
              transform: translateY(-50px) translateX(20px) scale(1.02);
            }
          }
        `}</style>

        {/* Testimonials Carousel */}
        <div className=" w-full sm:w-[80%] md:w-[70%] lg:w-[60%] relative z-10  max-w-4xl  ">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full flex justify-center p-4 sm:p-4 md:p-6"
              >
                <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 w-full sm:w-[90%] max-w-3xl min-h-[350px] sm:min-h-[380px] md:min-h-[420px] transition-all duration-500 ease-in-out">
                  {/* Avatar */}
                  <div className="absolute -top-10 left-1/2 sm:left-10 transform -translate-x-1/2 sm:translate-x-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="pt-14 sm:pt-20 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-orange-500 mb-2 sm:mb-3">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
