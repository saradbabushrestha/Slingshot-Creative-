import React, { useMemo, useEffect } from "react";
import type { Logo } from "../utils/logos";

interface PartnerMarqueeProps {
  logos: Logo[];
  speed?: number;
}

const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({
  logos,
  speed = 40,
}) => {
  const content = useMemo(() => [...logos, ...logos], [logos]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = `
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  if (!logos.length) return null;

  const animationStyle: React.CSSProperties = {
    animation: `scroll-marquee ${speed}s linear infinite`,
    display: "flex",
    width: "max-content",
  };

  return (
    <div className="w-full py-2 border-t border-b border-amber-900 ">
      {/* Title */}
      <h2 className="text-2xl sm:text-2xl font-bold text-orange-600 mb-1 ml-20">
        Trusted By :
      </h2>

      {/* Marquee */}
      <div className="w-full overflow-hidden h-15">
        <div className="flex" style={animationStyle}>
          {content.map((logo, index) => (
            <div className="flex-shrink-0 px-8" key={index}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerMarquee;
