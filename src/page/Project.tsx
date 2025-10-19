import React from "react";
import { Loader2 } from "lucide-react";

// Import local images
import pone from "/pone.png";
import ptwo from "/ptwo.png";
import pthree from "/pthree.png";
import pfour from "/pfour.png";
import pfive from "/pfive.png";
import psix from "/psix.png";
import pseven from "/pseven.png";
import peight from "/peight.png";
import parking from "/parking.png";
import pexelpulse from "/pexelpulse.png";
import portfolio from "/portfolio.png";
import tshirt from "/tshirt.png";

interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const PortfolioGrid: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      imageUrl: pone,
      title: "Today's Special — Gulab Jamun",
      description:
        "A creative promo design for Aashish Street Food highlighting their delicious Gulab Jamun special.",
    },
    {
      id: 2,
      imageUrl: ptwo,
      title: "Perfect Performance — Executive MBA",
      description:
        "Showcasing the Executive MBA in the HoReCa industry through the graceful lens of ballet — blending business and art.",
    },
    {
      id: 3,
      imageUrl: pthree,
      title: "Study in Germany",
      description:
        "Promotional poster for ELIET Support Center encouraging students to pursue higher studies in Germany.",
    },
    {
      id: 4,
      imageUrl: pfour,
      title: "Available Courses — BA, MBA, MA",
      description:
        "Informational post for ELIET highlighting available academic programs in business and management.",
    },
    {
      id: 5,
      imageUrl: pfive,
      title: "Erleben Sie Shahi Paneer",
      description:
        "Elegant food campaign for Namaste India Wittenberg — where taste meets sophistication.",
    },
    {
      id: 6,
      imageUrl: psix,
      title: "ELIET Logo Design",
      description:
        "A professional and modern brand logo designed for ELIET Education Consultancy.",
    },
    {
      id: 7,
      imageUrl: pseven,
      title: "Study in Poland",
      description:
        "A creative social media post for ELIET promoting educational opportunities in Poland.",
    },
    {
      id: 8,
      imageUrl: peight,
      title: "International Women’s Day — FitZone",
      description:
        "Empowering visual created for FitZone to celebrate International Women’s Day.",
    },
    {
      id: 9,
      imageUrl: parking,
      title: "Smart Parking System",
      description:
        "AI-powered parking project concept with intelligent vehicle flow management.",
    },
    {
      id: 10,
      imageUrl: pexelpulse,
      title: "PexelPulse Media Agency",
      description:
        "A digital agency branding concept focused on creativity, media, and storytelling.",
    },
    {
      id: 11,
      imageUrl: portfolio,
      title: "Personal Portfolio",
      description:
        "A minimalist and modern portfolio website showcasing professional projects and creative work.",
    },
    {
      id: 12,
      imageUrl: tshirt,
      title: "3D T-Shirt Customizer",
      description:
        "An interactive 3D web experience where users can customize T-shirts in real-time.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 py-16 px-4">
      <style>{`
        .shimmer-text {
          background: linear-gradient(90deg, #92400e 0%, #d97706 50%, #92400e 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our <span className="shimmer-text">Beautiful Works</span>
          </h1>
          <p className="text-gray-600 text-lg">
            We help our clients grow their bottom-line with clear and
            <br /> professional websites and creative visuals.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-64 md:h-72 overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
