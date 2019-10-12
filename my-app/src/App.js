import React from "react";
import "./App.css";
import Greeting from "./body/greeting/greeting";
import Objective from "./body/content/objective";
import TechStack from "./body/content/techStack";
import TechStackBed from "./body/content/techStackBed";
import Experience from "./body/content/workExperience";
import MyEducation from "./body/content/myEducation";
import Section from "./body/content/section";
import AboutMe from "./body/content/aboutme";
import MyCats from "./body/content/myCats";

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
      <Section />
      <Experience />
      <Section />
      <MyEducation />
      <Section />
      <AboutMe />
      <Section />
      <MyCats />
      <Section />
    </div>
  );
}

export default App;
