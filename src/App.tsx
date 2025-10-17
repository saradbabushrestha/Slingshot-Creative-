import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Service";
import WhyChooseUs from "./page/Whyus";
import PortfolioGrid from "./page/Project";
import TestimonialsCarousel from "./page/Testimonials";
import MailSection from "./page/MailSection";
import HowWeWork from "./page/HowWeWork";
import FAQAccordion from "./page/FAQ";
import AnimatedFooter from "./page/Footer"; 

// Scroll handler component
const ScrollToSection: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId =
      location.pathname === "/" ? "home" : location.pathname.slice(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="why-us">
                <WhyChooseUs />
              </div>
              <div id="portfolio">
                <PortfolioGrid />
              </div>
              <div id="testimonials">
                <TestimonialsCarousel />
              </div>
              <div id="mail">
                <MailSection />
              </div>
              <div id="how-we-work">
                <HowWeWork />
              </div>
              <div id="faq">
                <FAQAccordion />
              </div>
              <AnimatedFooter />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
