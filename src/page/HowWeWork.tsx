import React, { useState, useEffect, useRef } from "react";
import {
  Target,
  Lightbulb,
  Video,
  Rocket,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string;
  color: string;
  gradient: string;
}

const HowWeWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      id: 1,
      icon: <Target className="w-8 h-8" />,
      title: "Discovery & Strategy",
      description:
        "We start by understanding your brand, goals, and target audience. Through collaborative discussions, we craft a clear creative strategy and define the roadmap.",
      services: "Brand analysis, campaign strategy, content planning",
      color: "text-amber-600",
      gradient: "from-amber-50 to-amber-100",
    },
    {
      id: 2,
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Concept & Ideation",
      description:
        "Our creative team brainstorms concepts that align with your message and audience. We visualize ideas, develop storyboards, and prepare creative directions.",
      services: "Content creation, video scripting, design concepts",
      color: "text-amber-600",
      gradient: "from-amber-50 to-yellow-100",
    },
    {
      id: 3,
      icon: <Video className="w-8 h-8" />,
      title: "Production & Design",
      description:
        "Once the idea is locked, we bring it to life. From shooting cinematic videos to designing impactful visuals, our production and design teams ensure top-notch quality.",
      services: "Video production, graphic design, branding",
      color: "text-amber-700",
      gradient: "from-amber-100 to-orange-100",
    },
    {
      id: 4,
      icon: <Rocket className="w-8 h-8" />,
      title: "Digital Launch",
      description:
        "We craft tailored digital campaigns to ensure your content reaches the right people at the right time.",
      services:
        "Digital marketing, social media management, website integration",
      color: "text-amber-600",
      gradient: "from-yellow-50 to-amber-100",
    },
    {
      id: 5,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Engagement & Growth",
      description:
        "Our job doesn't end at launch — we monitor engagement, track performance, and continuously optimize for growth.",
      services: "Campaign analytics, PR outreach, ongoing content strategy",
      color: "text-yellow-700",
      gradient: "from-yellow-100 to-amber-100",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200 mb-6">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">
              Our Process
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-amber-800 to-neutral-900">
            How We Work
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Every project begins with a vision — and ends with an impact
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div
                className={`relative h-full p-8 rounded-2xl border transition-all duration-500 ${
                  activeStep === index
                    ? `bg-gradient-to-br ${step.gradient} border-amber-300 shadow-2xl shadow-amber-200/50 scale-105`
                    : "bg-white border-neutral-200 hover:border-amber-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 border-2 border-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">
                    {step.id}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`mb-6 ${
                    step.color
                  } transition-transform duration-500 ${
                    activeStep === index
                      ? "scale-110 rotate-6"
                      : "scale-100 rotate-0"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Services tag */}
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-xs text-amber-700 uppercase tracking-wider mb-2 font-semibold">
                    Services
                  </p>
                  <p className="text-sm text-neutral-700">{step.services}</p>
                </div>

                {/* Hover indicator */}
                <div
                  className={`absolute bottom-4 right-4 transition-all duration-500 ${
                    activeStep === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  <ArrowRight className={`w-5 h-5 ${step.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 transition-all duration-1000 ease-out rounded-full shadow-lg"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`transition-all duration-300 ${
                  activeStep === index
                    ? "scale-125"
                    : "scale-100 opacity-50 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    activeStep === index
                      ? "bg-amber-600 shadow-lg shadow-amber-500/50"
                      : "bg-neutral-300"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>

        {/* Result section */}
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* <div className="inline-block p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl border-2 border-amber-200 shadow-2xl">
            <div className="text-6xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">Result</h3>
            <p className="text-lg text-neutral-700 max-w-xl">
              A brand presence that not only looks great — but performs even
              better.
            </p>
          </div> */}
        </div>

        {/* CTA Button */}
        {/* <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative px-12 py-5 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 rounded-full font-bold text-white text-lg overflow-hidden shadow-2xl shadow-amber-300/50 hover:shadow-amber-400/60 transition-all duration-500 hover:scale-105">
            <span className="relative z-10 flex items-center gap-3">
              Let's Work Together
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default HowWeWork;
