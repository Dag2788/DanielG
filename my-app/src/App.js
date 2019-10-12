import React from "react";
import "./App.css";
import Greeting from "./app/greeting/greeting";
import Objective from "./app/content/objective";
import TechStack from "./app/content/techStack";
import TechStackBed from "./app/content/techStackBed";
import Experience from "./app/content/workExperience";
import MyEducation from "./app/content/myEducation";
import Section from "./app/content/section";
import AboutMe from "./app/content/aboutme";
import MyCats from "./app/content/myCats";

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
