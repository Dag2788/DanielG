import React, {Component} from 'react';
import Button from '../../common/button/button'
import Experience from './experience/experience';
import Education from './education/education';
import AboutMe from './aboutMe/aboutme';
import {isMobile, MobileView } from 'react-device-detect';


class Content extends Component {

    constructor(){
        super();
        this.state = {
            experience: false,
            education: false,
            aboutMe: false
        };
        this.handleClick = this.handleClick.bind(this);
     }

    handleClick = (text) => {
        if(text === "Experience"){
            this.setState({
                experience: true,
                education: false,
                aboutMe: false
            });
        }
        if(text === "Education"){
            this.setState({
                experience: false,
                education: true,
                aboutMe: false
            });
        }
        if(text === "About Me"){
            this.setState({
                experience: false,
                education: false,
                aboutMe: true
            });
        }
    }

    render(){
        const { experience, education, aboutMe } = this.state;
        return (
            <React.Fragment>
            {!isMobile && (<div className='options'>
             <Button style='header linkOptions' text="Experience" handleClick={this.handleClick}/>
              <Button style='header linkOptions' text="Education" handleClick={this.handleClick}/>
             <Button style='header linkOptions' text="About Me" handleClick={this.handleClick}/>
            </div>)}
            {experience && !isMobile && <Experience/>}
            {education && !isMobile && <Education/>}
            {aboutMe && !isMobile && <AboutMe/>}

            { isMobile && MobileView && (<div className='options'>
            <Button style='header linkOptions' text="Experience" handleClick={this.handleClick}/>
            <Experience/>
            <Button style='header linkOptions' text="Education" handleClick={this.handleClick}/>
            <Education/>
            <Button style='header linkOptions' text="About Me" handleClick={this.handleClick}/>
            <AboutMe/>
            </div>)}
           
            </React.Fragment>
            );

    

    }
}

export default Content;
