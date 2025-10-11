import React from "react";

interface FeatureProps {
  number: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ number, title, description }) => (
  <div className="flex flex-col items-start space-y-2 text-center sm:text-left">
    <span className="text-orange-600 font-serif text-xl  bg-amber-100 px-3 py-1 rounded-full shadow-md">
      {number}
    </span>
    <h3 className="text-gray-900 font-bold text-lg">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const SlingShot: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    {/* Glowing Background Behind Image */}
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] bg-amber-300/50 rounded-full blur-3xl animate-pulse" />
    </div>

    <img
      src="/aboutus.png"
      alt="SlingShot"
      className="relative w-full h-full object-cover rounded-lg shadow-lg z-10"
    />
  </div>
);

export default function WhyChooseUs() {
  const features: FeatureProps[] = [
    {
      number: "1",
      title: "Unrivaled Creativity & Innovation",
      description:
        "We don't just follow trends; we set them. Our team of imaginative thinkers consistently delivers fresh, groundbreaking ideas that ensure your brand captures attention and leaves a lasting impression.",
    },
    {
      number: "2",
      title: "Strategic, Results-Driven Approach",
      description:
        "Every campaign we undertake is meticulously planned with your business objectives at its core. We combine creative flair with analytical rigor to deliver measurable outcomes and a strong return on your investment.",
    },
    {
      number: "3",
      title: "Integrated Full-Service Expertise",
      description:
        "From initial strategy to final execution, we offer a comprehensive suite of marketing and production services under one roof, ensuring seamless communication, consistent branding, and efficient project management.",
    },
    {
      number: "4",
      title: "Client-Centric Partnership",
      description:
        "Your success is our priority. We pride ourselves on fostering transparent, collaborative relationships, actively listening to your needs, and adapting our strategies to achieve your specific goals with dedication and flexibility.",
    },
  ];

  return (
    <div className="relative min-h-[50vh] bg-white overflow-hidden p-6 sm:p-10 md:p-16">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-8 pt-8 flex flex-col items-center lg:items-start">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why <span className="text-amber-600">Choose Us</span>
              </h2>
            </div>

            <div>
              <SlingShot className="w-70 sm:w-120  h-60 sm:h-80 border-4 border-amber-100 rounded-lg shadow-xl " />
            </div>
          </div>

          {/* Right Section - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pt-20 text-center sm:text-left">
            {features.map((feature) => (
              <Feature key={feature.number} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
