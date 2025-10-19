import React from "react";
import { Loader2 } from "lucide-react";

// // Import local images
// import work1 from "../assets/portfolio/work1.jpg";
import pone from "/pone.png";
import ptwo from "/ptwo.png";
import pthree from "/pthree.png";
import pfour from "/pfour.png";
import pfive from "/pfive.png";
import psix from "/psix.png";
import pseven from "/pseven.png";
import parking from "/parking.png";
import peight from "/peight.png";
import pexelpulse from "/pexelpulse.png";
import portfolio from "/portfolio.png";
import tshirt from "/tshirt.png";

interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
}

const PortfolioGrid: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    { id: 1, imageUrl: pone, title: "Project 1" },
    { id: 1, imageUrl: ptwo, title: "Project 1" },
    { id: 1, imageUrl: pthree, title: "Project 1" },
    { id: 1, imageUrl: pfour, title: "Project 1" },
    { id: 1, imageUrl: pfive, title: "Project 1" },
    { id: 1, imageUrl: psix, title: "Project 1" },
    { id: 1, imageUrl: pseven, title: "Project 1" },
    { id: 1, imageUrl: peight, title: "Project 1" },
    { id: 1, imageUrl: parking, title: "Project 1" },
    { id: 1, imageUrl: pexelpulse, title: "Project 1" },
    { id: 1, imageUrl: portfolio, title: "Project 1" },
    { id: 1, imageUrl: tshirt, title: "Project 1" },
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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our <span className="shimmer-text">Beautiful Works</span>
          </h1>
          <p className="text-gray-600 text-lg">
            We help our clients grow their bottom-line with clear and
            <br /> professional websites.
          </p>
        </div>

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
                <p className="text-white/80 text-sm mt-1">
                  Its Short Description
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
