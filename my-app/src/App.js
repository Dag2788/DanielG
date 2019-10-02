import React from "react";
import "./App.css";
import Austin from "./pictures/austin3.jpg";
import digital from "./pictures/digital.jpg";
import Greeting from "./body/greeting/greeting";
import Objective from "./body/content/objective";
import TechStack from "./body/content/techStack";
import TechStackBed from "./body/content/techStackBed";
import Experience from "./body/content/workExperience";
import QuoteTwo from "./body/content/quoteTwo";

function App() {
  return (
    <div id="top" className="App">
      <Greeting />
      <Objective />
      <div className="row">
        <div className="col s12 m12 l6   textAlignCenter">
          <TechStack />
        </div>
        <div className="col s12 m12 l6  textAlignCenter">
          <TechStackBed />
        </div>
      </div>
      <QuoteTwo />
      <Experience />
    </div>
  );
}

export default App;
