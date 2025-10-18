import React, { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Content Creation & Marketing",
      description:
        "We produce engaging and relevant content across various formats to tell your brand's story and attract your ideal customers.",
      image: "/dmc.png",
    },
    {
      id: 2,
      title: "Digital Marketing Campaigns",
      description:
        "We design and execute data-driven digital campaigns that maximize reach, engagement, and conversion across all online channels.",
      image: "/dmm.png",
    },
    {
      id: 3,
      title: "Video Production",
      description:
        "We bring narratives to life through high-quality video content, from concept to post-production, for impactful storytelling.",
      image: "/vd.png",
    },
    {
      id: 4,
      title: "Graphic Design & Visual Branding",
      description:
        "We create stunning visual identities and compelling graphic assets that ensure your brand stands out in a crowded marketplace.",
      image: "/gdm.png",
    },
    {
      id: 5,
      title: "Social Media Management",
      description:
        "We cultivate vibrant online communities and manage your social presence to foster brand loyalty and drive conversations.",
      image: "/smc.png",
    },
    {
      id: 6,
      title: "Website Design & Development",
      description:
        "We craft intuitive, aesthetically pleasing, and high-performing websites that serve as the digital cornerstone of your brand.",
      image: "/c.png",
    },
    {
      id: 7,
      title: "Public Relations & Outreach",
      description:
        "We strategically manage your public image and secure valuable media placements to enhance credibility and awareness.",
      image: "/pro.png",
    },
    {
      id: 8,
      title: "Product Analysis",
      description:
        "Provide Manufacturers With The Deliverables Necessary To Understand And Perfect The Product",
      image: "/paa.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100  py-20 px-4">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card:hover {
          transform: translateY(-12px) scale(1.03);
        }
        
        .patch-container {
          transition: all 0.4s ease;
        }
        
        .service-card:hover .patch-container {
          transform: rotate(360deg) scale(1.1);
        }
        
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #92400e 0%,
            #d97706 50%,
            #92400e 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="shimmer-text">Services</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl font-medium">
            We Provide Perfect IT Solutions For Your Business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl cursor-pointer animate-scale-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Patch Image */}
              <div className="flex justify-center mb-6">
                <div
                  className={`patch-container relative w-28 h-28 rounded-full bg-gradient-to-br from-amber-200 via-amber-100 to-amber-200 border-4 border-amber-800 flex items-center justify-center shadow-lg ${
                    hoveredCard === service.id ? "animate-float" : ""
                  }`}
                >
                  <div className="w-20 h-20 rounded-full bg-amber-900 opacity-20 absolute"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-16 h-16 object-contain relative z-10"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center min-h-[56px] flex items-center justify-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div
                className={`mt-6 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-500 ${
                  hoveredCard === service.id ? "w-full" : "w-0"
                } mx-auto`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div
          className="text-center mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            View All Services
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
