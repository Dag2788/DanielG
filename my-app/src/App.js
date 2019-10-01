import React from 'react';
import './App.css';
import Austin from './pictures/austin3.jpg';
import digital from './pictures/digital.jpg';
import Greeting from './body/greeting/greeting';
import Objective from './body/content/objective';
import TechStack from './body/content/techStack';


function App() {
  return (
    <div id='top' className="App">
      
      <Greeting/>
      <Objective/>
      <div class="parallax-container">
        <TechStack/>
      <div class="parallax"><img src={digital}/></div>
      </div>
      <Objective/>
      <Objective/>

      <Objective/>


  </div>
  
  );
}

export default App;
