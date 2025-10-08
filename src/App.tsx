import "./App.css";
import About from "./page/About";

import Home from "./page/Home";
import PortfolioGrid from "./page/Project";
import Services from "./page/Service";
import WhyChooseUs from "./page/Whyus";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <WhyChooseUs />
      <PortfolioGrid />
    </>
  );
};

export default App;
