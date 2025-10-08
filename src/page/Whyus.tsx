import React from "react";

interface FeatureProps {
  number: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ number, title, description }) => (
  <div className="flex flex-col items-start space-y-2">
    <span className="text-orange-600 font-serif text-xl italic">{number}</span>
    <h3 className="text-gray-900 font-bold text-lg">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const SlingShot: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <img
      src="/aboutus.png"
      alt="SlingShot"
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
  </div>
);

export default function WhyChooseUs() {
  const features: FeatureProps[] = [
    {
      number: "01",
      title: "SlingShot 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh f",
    },
    {
      number: "02",
      title: "SlingShot 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh f",
    },
    {
      number: "03",
      title: "SlingShot 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh f",
    },
    {
      number: "04",
      title: "SlingShot 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh f",
    },
  ];

  return (
    <div className="relative h-[50%] bg-white overflow-hidden p-8 md:p-16">
      {/* Glowing Brown Circle Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/1 -translate-y-[55%] w-[600px] h-[600px] bg-amber-300/50 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-8 pt-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why <span className="text-amber-600">Choose Us</span>
              </h2>
            </div>

            <div className="col-span-1 aspect-square">
              <SlingShot className="w-150 h-100 border-4 border-amber-100 rounded-lg shadow-xl" />
            </div>
          </div>

          {/* Right Section - Features */}
          <div className="grid sm:grid-cols-2 gap-8 lg:pt-20">
            {features.map((feature) => (
              <Feature key={feature.number} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
