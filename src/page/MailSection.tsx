import React, { useState, useEffect } from "react";
import {
  Mail,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  MessageSquare,
  User,
  ChevronDown,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const MailSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [isHovered, setIsHovered] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    "Content Creation & Marketing",
    "Digital Marketing Campaigns",
    "Video Production",
    "Graphic Design & Visual Branding",
    "Social Media Management",
    "Website Design & Development",
    "Public Relations & Outreach",
    "Product Analysis & Strategy",
  ];

  const topics = [
    { value: "product-design", label: " Product Design" },
    { value: "website-development", label: "Website Development" },
    { value: "mobile-app", label: "Mobile App Development" },
    { value: "branding", label: " Branding & Identity" },
    { value: "marketing", label: "Digital Marketing" },
    { value: "consultation", label: "Strategy Consultation" },
    { value: "other", label: "Other Services" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        const newParticles = [...prev];
        if (newParticles.length < 5) {
          newParticles.push({
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100,
          });
        }
        return newParticles.slice(-5);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTopicSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, topic: value }));
    setIsDropdownOpen(false);
  };

  const getSelectedTopicLabel = () => {
    const selected = topics.find((t) => t.value === formData.topic);
    return selected ? selected.label : "Select a topic";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 relative overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: "float 4s ease-in-out infinite",
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-10 h-10 text-orange-500 animate-pulse" />
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight">
            Have an Awesome Project <br />
            Idea?{" "}
            <span className="text-orange-600 block sm:inline">
              Let's Discuss
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Transform your vision into reality with our award-winning design
            team. Let's create something extraordinary together.
          </p>

          {/* Success Message */}
          {submitSuccess && (
            <div className="bg-green-50 border-2 border-green-500 rounded-3xl p-6 shadow-xl max-w-md mx-auto mb-10">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2 animate-bounce" />
              <h3 className="text-xl font-bold text-green-800 mb-1">
                Message Sent Successfully!
              </h3>
              <p className="text-green-700 text-base">
                Thank you for reaching out. We'll get back to you soon.
              </p>
            </div>
          )}

          {/* Email input */}
          {!showForm && !submitSuccess && (
            <div className="relative flex flex-col sm:flex-row items-center bg-white rounded-full shadow-xl p-2 max-w-xl mx-auto gap-2">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <input
                type="email"
                placeholder="Enter your email to get started"
                className="flex-1 px-4 py-3 text-base outline-none bg-transparent w-full"
                onFocus={() => setShowForm(true)}
              />
              <button
                onClick={() => setShowForm(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold text-base flex items-center gap-2 hover:shadow-lg"
              >
                Start
                <ArrowRight
                  className={`w-5 h-5 transition-transform ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </button>
            </div>
          )}

          {/* FORM */}
          {showForm && (
            <form
              action="https://formspree.io/f/xblzpral"
              method="POST"
              className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-2xl mx-auto mt-8"
              onSubmit={() => setSubmitSuccess(true)}
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl outline-none focus:border-orange-500 text-slate-800"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl outline-none focus:border-orange-500 text-slate-800"
                    />
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Topic
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-left flex items-center justify-between bg-white"
                    >
                      <span
                        className={
                          formData.topic ? "text-slate-800" : "text-slate-400"
                        }
                      >
                        {getSelectedTopicLabel()}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full mt-2 w-full bg-white border-2 border-slate-200 rounded-xl shadow-xl max-h-60 overflow-y-auto z-20">
                        {topics.map((topic) => (
                          <button
                            key={topic.value}
                            type="button"
                            onClick={() => handleTopicSelect(topic.value)}
                            className="w-full px-4 py-3 text-left hover:bg-orange-50 border-b border-slate-100 last:border-b-0"
                          >
                            {topic.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Details
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      minLength={50}
                      className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl outline-none focus:border-orange-500 resize-none text-slate-800"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-2 text-right">
                    {formData.message.length}/50
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="w-full sm:w-auto px-6 py-3 border-2 border-slate-300 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-16 max-w-4xl mx-auto px-2">
          {[
            { icon: Star, value: "4.9/5", label: "Average Ratings" },
            { icon: Award, value: "20+", label: "Satisfied Services" },
            { icon: CheckCircle, value: "Certified", label: "Work Quality" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <item.icon className="w-6 h-6 text-orange-500 mb-2" />
              <span className="text-2xl font-bold text-slate-800 mb-1">
                {item.value}
              </span>
              <p className="text-slate-600 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rounded-3xl shadow-2xl p-6 sm:p-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {services.map((service, index) => (
              <React.Fragment key={service}>
                <span className="text-white text-base sm:text-lg font-semibold whitespace-nowrap hover:scale-105 transition-transform">
                  {service}
                </span>
                {index < services.length - 1 && (
                  <Sparkles className="w-4 h-4 text-orange-300 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default MailSection;
