import React from 'react';
import './App.css';
import Austin from './pictures/austin3.jpg';
import digital from './pictures/digital.jpg';
import Greeting from './body/greeting/greeting';
import Objective from './body/content/objective';
import TechStack from './body/content/techStack';
import Quote from './body/content/quote';
import TechStackBed from './body/content/techStackBed';
import Experience from './body/content/workExperience';
import QuoteTwo from './body/content/quoteTwo';


function App() {
  return (
    <div id='top' className="App">
      
      <Greeting/>
      <Objective/>
      <Quote/>
      <TechStack/>
      <TechStackBed/>
      <QuoteTwo/>
      <Experience/>

  </div>
  
  );
}

export default App;
