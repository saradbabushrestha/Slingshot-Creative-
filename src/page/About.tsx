import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-50% bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Images */}
        <div className="relative w-full flex justify-center lg:justify-start">
          {/* Top logo */}
          <div className="absolute -top-12 lg:top-20 left-1/2 transform -translate-x-1/2 lg:-translate-x-0 z-30 bg-white p-3 rounded-lg shadow-xl border-4 border-gray-200">
            <img
              src="/aboutus.png"
              alt="Budhanilkantha Youth Council Logo"
              className="w-32 sm:w-40 md:w-48 lg:w-50 h-auto object-contain"
            />
          </div>

          {/* Bottom logo */}
          <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 lg:left-1/5 lg:-translate-x-1/2 z-20 bg-white p-3 rounded-lg shadow-lg border-2 border-gray-200">
            <img
              src="/aboutus2.png"
              alt="Budhanilkantha Youth Council Logo"
              className="w-40 sm:w-52 md:w-60 h-auto object-contain"
            />
          </div>

          {/* Spacer for layout */}
          <div className="h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-full"></div>
        </div>

        {/* Right side - Content */}
        <div className="lg:pl-12 text-center lg:text-left">
          <p className="text-orange-600 font-semibold tracking-wider text-lg mb-4">
            A BIT
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
            ABOUT US
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            We are SlingShot Creatives — a dynamic marketing agency and
            production house dedicated to transforming bold ideas into
            captivating realities. We craft compelling stories with unparalleled
            originality, strategic precision, and measurable impact, helping
            your brand resonate powerfully with its audience.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            EXPLORE SERVICES
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
