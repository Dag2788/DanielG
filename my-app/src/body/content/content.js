import React, {Component} from 'react';
import Button from '../../common/button/button'
import Experience from './experience/experience';
import Education from './education/education';
import AboutMe from './aboutMe/aboutme';


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
            <div className='options'>
            {!experience &&  <Button style='header linkOptions' text="Experience" handleClick={this.handleClick}/>}
            {!education &&  <Button style='header linkOptions' text="Education" handleClick={this.handleClick}/>}
            {!aboutMe && <Button style='header linkOptions' text="About Me" handleClick={this.handleClick}/>}
            </div>
            {experience && <Experience/>}
            {education && <Education/>}
            {aboutMe && <AboutMe/>}
            </React.Fragment>
            );

    

    }
}

export default Content;
