import React, { Component } from 'react';
import NavLink from '../common/link/navLink'
import Link from '../common/link/link'
import { slide as Menu } from 'react-burger-menu'



class BurgerMenu extends Component {

  constructor(){
    super();
    this.state = {
      menuOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
 }

 handleClick () {
   const { menuOpen } = this.state;
     this.setState(({menuOpen:  !menuOpen}))
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  render(){
    const { menuOpen } = this.state;
    return (
       <Menu   isOpen={menuOpen}
        onStateChange={(state) => this.handleStateChange(state)} left>
        <h3><NavLink   handleClick={this.handleClick} text="DANIEL GARZA" link="#top"/></h3>
        <h3><NavLink handleClick={this.handleClick} className="menu-item" text='Experience' link='#Experience'/></h3>
        <h3><NavLink handleClick={this.handleClick} className="menu-item" text='Education' link='#Education'/></h3>
        <h3><NavLink handleClick={this.handleClick} className="menu-item" text='About Me' link='#About Me'/></h3>
      </Menu>
      
    );
  }
}

export default BurgerMenu;
