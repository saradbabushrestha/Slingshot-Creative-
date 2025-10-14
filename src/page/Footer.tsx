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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service", href: "/services" },
    { name: "Resume", href: "/resume" },
    { name: "Project", href: "/projects" },
  ];

  const socialIcons = [
    {
      Icon: Facebook,
      href: "https://facebook.com/yourprofile",
      delay: 0,
      label: "Facebook",
    },
    {
      Icon: Youtube,
      href: "https://youtube.com/@yourchannel",
      delay: 0.1,
      label: "YouTube",
    },
    {
      Icon: Phone,
      href: "https://wa.me/9770000000000",
      delay: 0.2,
      label: "WhatsApp",
    },
    {
      Icon: Send,
      href: "https://t.me/yourtelegramusername",
      delay: 0.3,
      label: "Telegram",
    },
    {
      Icon: Twitter,
      href: "https://twitter.com/yourprofile",
      delay: 0.4,
      label: "Twitter",
    },
  ];

  return (
    <div className="min-h-60 bg-black flex items-end justify-center p-8">
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
            Let’s Connect
          </h1>
          <a
            href="mailto:slingshot@gmail.com"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
          >
            Hire me
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform duration-300"
              size={20}
            />
          </a>
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
              <img src="/horilogo.png" alt="Logo" className="w-70 h-30" />
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              To empower businesses of all sizes to achieve their marketing
              aspirations by delivering bespoke, creative solutions that not
              only capture attention but also drive meaningful engagement and
              growth.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, href, delay, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer transform hover:bg-orange-600 hover:scale-110 transition-all duration-300 ${
                    isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${delay + 0.3}s`,
                  }}
                >
                  <Icon size={16} className="text-white" />
                </a>
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
                {navLinks.map(({ name, href }, idx) => (
                  <li
                    key={name}
                    onMouseEnter={() => setHoveredLink(name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <a
                      href={href}
                      className={`text-gray-400 hover:text-white transition-all duration-300 inline-block text-sm ${
                        hoveredLink === name ? "translate-x-2" : ""
                      }`}
                    >
                      {name}
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
                  href="tel:+9779812345678"
                  className="text-gray-400 hover:text-white transition-colors block text-sm"
                >
                  +977 9812345678
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
            <a href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <span className="text-gray-700">|</span>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedFooter;
