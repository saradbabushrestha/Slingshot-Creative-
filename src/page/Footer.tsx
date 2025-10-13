import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Facebook,
  Youtube,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

const AnimatedFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navLinks = ["Home", "About Us", "Service", "Resume", "Project"];

  const socialIcons = [
    { Icon: Facebook, delay: 0, label: "Facebook" },
    { Icon: Youtube, delay: 0.1, label: "YouTube" },
    { Icon: Phone, delay: 0.2, label: "WhatsApp" },
    { Icon: Send, delay: 0.3, label: "Telegram" },
    { Icon: Twitter, delay: 0.4, label: "Twitter" },
  ];

  return (
    <div className="min-h-screen bg-black flex items-end justify-center p-8">
      <div className="w-full max-w-7xl pb-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <h1
            className={`text-5xl md:text-6xl font-bold text-white transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            Lets Connect
          </h1>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
            Hire me
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform duration-300"
              size={20}
            />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div
            className={`transition-all duration-700 delay-200 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:rotate-12">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="transform -rotate-45"
                >
                  <path
                    d="M8 24L24 8M24 8H12M24 8V20"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">SlingShot</h2>
                <p className="text-orange-600 text-xs tracking-widest">
                  CREATIVE
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, delay, label }, idx) => (
                <button
                  key={idx}
                  aria-label={label}
                  className={`w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer transform hover:bg-orange-600 hover:scale-110 transition-all duration-300 ${
                    isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${delay + 0.3}s`,
                  }}
                >
                  <Icon size={16} className="text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation and Contact */}
          <div className="grid grid-cols-2 gap-12">
            {/* Navigation */}
            <div
              className={`transition-all duration-700 delay-400 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h3 className="text-orange-600 font-semibold mb-4 text-sm">
                Navigation
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link, idx) => (
                  <li
                    key={link}
                    onMouseEnter={() => setHoveredLink(link)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <a
                      href="#"
                      className={`text-gray-400 hover:text-white transition-all duration-300 inline-block text-sm ${
                        hoveredLink === link ? "translate-x-2" : ""
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div
              className={`transition-all duration-700 delay-500 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h3 className="text-orange-600 font-semibold mb-4 text-sm">
                Contact
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+9770000000000"
                  className="text-gray-400 hover:text-white transition-colors block text-sm"
                >
                  +977 0000000000
                </a>
                <a
                  href="mailto:slingshot@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors block text-sm"
                >
                  slingshot@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div
            className={`transition-all duration-700 delay-600 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-orange-600 font-semibold mb-4 text-sm">
              Get the latest information
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="relative"
            >
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white text-black px-5 py-3 rounded-full pr-14 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all duration-300 text-sm"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 p-2.5 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <ArrowRight size={18} className="text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-gray-800 mb-6" />

        {/* Copyright */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs transition-all duration-700 delay-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p>Copyright© 2025 Sarad Babu Shrestha. All Rights Reserved.</p>
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-white transition-colors">
              User Terms & Conditions
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedFooter;
