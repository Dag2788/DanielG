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



function TechStack() {
  return (
  <div className='educationText'>
    <div className='row'>
    <div className='col-8'>
      <div className='greetingText'>FED:</div>
    </div>
    </div>
      <div className='row'>
      <div className='col-4'>
          <span className='fontProficient'>JavaScript</span>
      </div>
      <div className='col-3'>
          <span className='fontGood'>HTML</span>
      </div>
      <div className='col-1'>
      <span className='fontOk'>CSS</span>
      </div>
      <div className='col-3'>
      <span className='fontProficient'>JQuery</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-4'>
          <span className='fontProficient'>React</span>
      </div>
      <div className='col-4'>
          <span className='fontProficient'>Redux</span>
      </div>
      <div className='col-2'>
      <span className='fontOk'>Thunk</span>
      </div>
      <div className='col-2'>
      <span className='fontOk'>Sagas</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-4'>
          <span className='fontProficient'>Node</span>
      </div>
      <div className='col-4'>
          <span className='fontProficient'>Webpack</span>
      </div>
      <div className='col-4'>
      <span className='fontProficient'>Grunt</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-1'>
          <span className='fontOk'>Babel</span>
      </div>
      <div className='col-1'>
          <span className='fontOk'>Prettier</span>
      </div>
      <div className='col-2'>
      <span className='fontOk'>JSLint</span>
      </div>
      <div className='col-2'>
      <span className='fontOk'>Lodash</span>
      </div>
      <div className='col-3'>
      <span className='fontGood'>MomentJS</span>
      </div>
      <div className='col-3'>
      <span className='fontGood'>Axios</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-4'>
        <span className='fontGood'>Jasmine</span>
      </div>
      <div className='col-4'>
      <span className='fontGood'>Selenium</span>
      </div>
      <div className='col-4'>
      <span className='fontGood'>Puppeteer</span>
      </div>
      </div>
     
  </div>
  );
}

export default TechStack;
