import "./App.css";
import About from "./page/About";
import FAQAccordion from "./page/FAQ";

import Home from "./page/Home";
import MailSection from "./page/MailSection";
import PortfolioGrid from "./page/Project";
import Services from "./page/Service";
import TestimonialsCarousel from "./page/Testimonials";
import WhyChooseUs from "./page/Whyus";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <WhyChooseUs />
      <PortfolioGrid />
      <TestimonialsCarousel />
      <MailSection />
      <FAQAccordion />
    </>
  );
};

export default App;
