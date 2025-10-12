import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Why do I need to use a Design System?",
    answer:
      "A Design System is a super useful tool for designers. It helps keep designs consistent and makes the design process faster. You can use pre-designed stuff over and over, and it's helpful for both new and experienced designers. In short, a Design System is like a designer's toolbox for making great-looking and user-friendly designs.",
  },
  {
    question: "Is there a preview or a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can explore all the components, templates, and tools to see if it fits your workflow before making a commitment.",
  },
  {
    question: "Where can I purchase AlignUI Design System?",
    answer:
      "You can purchase AlignUI Design System directly from our website. We accept all major credit cards, PayPal, and offer flexible licensing options for teams and enterprises. Educational discounts are also available.",
  },
  {
    question: "What are the recent updates and enhancements in AlignUI?",
    answer:
      "Our latest update includes 50+ new components, improved dark mode support, enhanced accessibility features, better Figma auto-layout integration, and performance optimizations. We release updates monthly based on community feedback.",
  },
  {
    question: "How do I install AlignUI Design System in Figma?",
    answer:
      "Installing is simple: 1) Open Figma, 2) Go to the Community tab, 3) Search for 'AlignUI', 4) Click 'Duplicate' to add it to your files, 5) Start using the components by enabling the library in your design file. Detailed video tutorials are available on our documentation page.",
  },
  {
    question: "Can I use AlignUI Design System for commercial projects?",
    answer:
      "Absolutely! Our commercial license allows you to use AlignUI in unlimited commercial projects. This includes client work, SaaS products, and any revenue-generating applications. Team licenses are available for agencies and larger organizations.",
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
            Contact Support
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
