import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { About, Hero, Navbar, Contact, Works, Tech } from "./components";

const App = () => {
  const [active, setActive] = useState("");

  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar setActive={setActive} active={active} />
          <Hero setActive={setActive} />
        </div>
        <About />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
