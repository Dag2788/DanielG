import React from 'react';
import './App.css';
import BurgerMenu from './header/burgerMenu';
import Header from './header/header'
import Greeting from './body/greeting/greeting';
import Content from './body/content/content';
import {isMobile, MobileView } from 'react-device-detect';


function App() {
  return (
    <div id='top' className="App">
     {isMobile && MobileView && <BurgerMenu/>}
      <Header/>
      <Greeting/>
      <Content/>
  
    </div>
    
  );
}

export default App;
