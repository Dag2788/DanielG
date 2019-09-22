import React from 'react';
import './App.css';
import BurgerMenu from './header/burgerMenu';
import Header from './header/header'
import Greeting from './body/greeting/greeting';
import Content from './body/content/content';

function App() {
  return (
    <div className="App">
      <BurgerMenu/>
      <Header/>
      <div className="Lineseparator"/>
      <Greeting/>
      <Content/>
  
    </div>
    
  );
}

export default App;
