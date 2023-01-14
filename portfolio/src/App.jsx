import { useState } from "react";
import "./App.css";

// Components
import About from "./Components/About";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer";
import FunctionWheel from "./Components/FunctionWheel/FunctionWheel";
import Header from "./Components/Header";
import ProjectScreener from "./Components/ProjectScreener/ProjectScreener";
import SoundBoxes from "./Components/SoundBoxes/SoundBoxes";

function App() {
  return (
    <div className="App">
      <div className="comp01">
        <Header />
        <About />
      </div>
      <div className="comp02">
        <FunctionWheel />
      </div>
      <div className="comp03">
        <ProjectScreener />
      </div>
      <div className="comp04">
        <SoundBoxes />
      </div>
      <div className="comp05">
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
