import "./App.css";
import About from "./page/About";

import Home from "./page/Home";
import Services from "./page/Service";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
    </>
  );
};

export default App;
