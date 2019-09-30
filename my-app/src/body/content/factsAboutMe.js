import React from 'react';
import reactIcon from '../../pictures/logos/reactIcon.png' // needs fixing
import aspectJ from '../../pictures/logos/Aspectj.jpg'
import angularLogo from '../../pictures/logos/angularLogo.svg'
import apiLogo from '../../pictures/logos/apiLogo.jpg'
import cssLogo from '../../pictures/logos/cssLogo.png'
import cucumberLogo from '../../pictures/logos/cucumberLogo.png'
import gruntLogo from '../../pictures/logos/gruntLogo.png'
import htmlLogo from '../../pictures/logos/htmlLogo.jpg'
import jasmineLogo from '../../pictures/logos/JasmineJS.svg'
import javaLogo from '../../pictures/logos/javaLogo.png'
import javascriptLogo from '../../pictures/logos/javascript-logo.png'
import seleniumLogo from '../../pictures/logos/selenium.png'
import springBootLogo from '../../pictures/logos/spring-boot-logo.png'
import swaggerLogo from '../../pictures/logos/Swagger-logo.png'
import testNgLogo from '../../pictures/logos/testNg.jpg'
import webpackLogo from '../../pictures/logos/webpack.png'
import zipkinLogo from '../../pictures/logos/Zipkin.jpg'



function FactsAboutMe() {
  return (
  <div className='educationText'>
    <div className='row marginTop'>
    <div className='col-9'>
    <div className='greetingTextAboutMe fontAlignRight'>About me:</div>

    </div>
    <div className='col-3'>
    </div>
    </div>
      <div className='row'>
      <div className='col-12 fontAlignRight'>
          <span className='fontWork '>Problem Solver.</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-12 fontAlignRight'>
          <span className='fontWork '>Positive and Enthusiastic.</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-12 fontAlignRight'>
          <span className='fontWork '>Goal Oriented.</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-12 fontAlignRight'>
          <span className='fontWork '>ENFJ.</span>
      </div>
      </div>
  </div>
  );
}

export default FactsAboutMe;
