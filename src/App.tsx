import "./App.css";
import About from "./page/About";

import Home from "./page/Home";
import Services from "./page/Service";
import WhyChooseUs from "./page/Whyus";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <WhyChooseUs />
    </>
  );
};

export default App;
