import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We partner with businesses of all sizes, from ambitious startups to established enterprises, across a diverse range of industries. Our adaptable approach ensures tailored solutions for every client.",
  },
  {
    question: "How do you measure the success of your campaigns?",
    answer:
      "We define success based on your specific goals. We utilize key performance indicators (KPI) such as website traffic, conversion rates, engagement metrics, and ROI, providing regular, transparent reports on our progress.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on the scope and complexity of the services required. We provide a detailed project plan and timeline after our initial consultation and proposal.",
  },
  {
    question:
      "Can you help us with a specific one-off project, or do you only offer ongoing retainers?",
    answer:
      "We offer both project-based services and ongoing retainer agreements. Whether you need support for a single campaign or a long-term marketing partnership, we can tailor our engagement to your needs.",
  },
  {
    question: "How do you ensure our brand's voice and vision are maintained?",
    answer:
      "Our process begins with an in-depth discovery phase to thoroughly understand your brand's unique identity, values, and objectives. We maintain close collaboration and seek your feedback at every stage to ensure alignment.",
  },
  {
    question:
      "What is the process for starting a project with SlingShot Creatives?",
    answer:
      "It all begins with a complimentary consultation! Contact us to discuss your needs, and we'll provide a customized proposal outlining our recommended strategy, services, and pricing. We also additionally have our service in package format which you can choose from.",
  },
  {
    question: "Do you offer services beyond what is listed on your website?",
    answer:
      "Our listed services cover our core competencies, but we are always open to discussing unique challenges and custom solutions. Please reach out to us with your specific requirements.",
  },
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100  py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-amber-900 text-amber-50 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <HelpCircle size={16} />
            <span>FAQS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-amber-800 text-lg">
            Find questions and answers related to the design system,
            <br />
            purchase, updates, and support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="bg-amber-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                style={{
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-amber-50 hover:bg-amber-800 transition-colors duration-200"
                >
                  <span className="font-medium text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 py-5 bg-amber-800 text-amber-50 leading-relaxed border-t border-amber-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-amber-800 mb-4">Still have questions?</p>
          <button className="bg-amber-900 text-amber-50 px-8 py-3 rounded-full font-medium hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <Link to="/mail">Contact Support</Link>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FAQAccordion;
