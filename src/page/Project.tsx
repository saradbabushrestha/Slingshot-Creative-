import React, { useState } from "react";
import { Loader2 } from "lucide-react";

interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
}

const PortfolioGrid: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const portfolioItems: PortfolioItem[] = Array.from(
    { length: 12 },
    (_, i) => ({
      id: i + 1,
      imageUrl: `https://picsum.photos/seed/${i + 1}/400/400`,
      title: `Project ${i + 1}`,
    })
  );

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Beautiful Works
          </h1>
          <p className="text-gray-600 text-lg">
            We help our clients grow their bottom-line with clear and
            <br />
            professional websites.
          </p>
        </div>

        {/* Load More Button */}
        {/* <div className="flex justify-center mb-12">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="px-8 py-3 bg-white border-2 border-gray-300 rounded-md font-medium text-gray-700 hover:border-gray-400 hover:shadow-md transition-all duration-300 flex items-center gap-2 disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <Loader2 className="w-5 h-5" />
                Load More
              </>
            )}
          </button>
        </div> */}

        {/* Uniform Grid */}
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
                <p className="text-white/80 text-sm mt-1">View Details →</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 text-gray-600">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Loading more works...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioGrid;
