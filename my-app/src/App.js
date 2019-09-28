import React from 'react';
import './App.css';
import BurgerMenu from './header/burgerMenu';
import Header from './header/header'
import Greeting from './body/greeting/greeting';
import Content from './body/content/content';
import {isMobile, MobileView } from 'react-device-detect';
import TechStack from './body/content/techStack';
import Dan from './pictures/myFace2.jpg'
import Education from './body/content/education/education';
import Experience from './body/content/experience/experience';
import AboutMe from './body/content/aboutMe/aboutme';
import TechStackBed from './body/content/techStackBed';
import WorkExperience from './body/content/workExperience';
import FactsAboutMe from './body/content/factsAboutMe';
import MyCats from './body/content/myCats';

function App() {
  return (
    <div id='top' className="App">
     {/* {isMobile && MobileView && <BurgerMenu/>}
      <Header/> */}
      <div className='row'>
      <Greeting/>
      </div>
      <div className='row'>
      <div className='col-12'>
        <div className='softwareEngineerText'>FULL</div>
      </div>
      </div>
      <div className='row'>
      <div className='col-12'>
        <div className='softwareEngineerText'>STACK</div>
      </div>
      </div>
      <div className='row'>
      <div className='col-12'>
        <div className='softwareEngineerText'>SOFTWARE</div>
      </div>
      </div>
      <div className='row'>
      <div className='col-12'>
        <div className='softwareEngineerText'>DEVELOPER.</div>
      </div>
      </div>
      <div class="row">
        <div class="col-3">
        </div>
        <div class="col-3">
        </div>
        <div class="col-6">
          <div className='backgroundRed'></div>
        </div>
      </div>

      <div className='row'>
      <TechStack/>     
        </div>
        <div class="row">
        <div class="col-6">
        <div className='backgroundRed'></div>
        </div>
        <div class="col-6">
        </div>
      </div>

        <div className='row'>
      {/* <Content/> */}
      <TechStackBed/>
      </div>

      <div class="row">
        <div class="col-6">
        </div>
        <div class="col-6">
        <div className='backgroundRed'></div>

        </div>
      </div>
      <div className='row'>
      <WorkExperience/>
      </div>
      <div class="row">
        <div class="col-6">
        </div>
        <div class="col-6">
        <div className='backgroundRed'></div>

        </div>
      </div>

         <div className='row'>
      <Content/>
      </div>
      <div class="row">
        <div class="col-6">
        </div>
        <div class="col-6">
        <div className='backgroundRed'></div>

        </div>
      </div>

      <div className='row'>
      <FactsAboutMe/>
      </div> 
      <div class="row">
        <div class="col-6">
        </div>
        <div class="col-6">
        <div className='backgroundRed'></div>

        </div>
      </div>
      <MyCats/>
      </div>
  
  );
}

export default App;
