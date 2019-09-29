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



function TechStackBed() {
  return (
  <div className='educationText'>
    <div className='row'>
    <div className='col-12'>
      <div className='greetingText'>Back End:</div>
    </div>
    </div>
      <div className='row'>
      <div className='col-4'>
          <span className='fontProficient'>Java</span>
      </div>
      <div className='col-5'>
          <span className='fontGood'>SpringBoot</span>
      </div>
      <div className='col-3'>
      <span className='fontOk'>Jackson</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-4'>
          <span className='fontProficient'>Maven</span>
      </div>
      <div className='col-4'>
          <span className='fontProficient'>REST</span>
      </div>
      <div className='col-2'>
      <span className='fontOk'>AspectJ</span>
      </div>
      <div className='col-2'>
      <span className='fontOk'>Cucumber</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-4'>
          <span className='fontProficient'>TestNG</span>
      </div>
      <div className='col-4'>
          <span className='fontProficient'>Swagger</span>
      </div>
      <div className='col-4'>
      <span className='fontProficient'>XML</span>
      </div>
      </div>
      <div className='row'>
      <div className='col-2'>
          <span className='fontOk'>Python</span>
      </div>
      <div className='col-2'>
          <span className='fontGood'>SQL</span>
      </div>
      <div className='col-1'>
      <span className='fontOk'>C/C++</span>
      </div>
      <div className='col-2'>
      <span className='fontOk'>Perl</span>
      </div>
      <div className='col-3'>
      <span className='fontGood'>Linux</span>
      </div>
      <div className='col-2'>
      <span className='fontGood'>GIT</span>
      </div>
      </div>
  </div>
  );
}

export default TechStackBed;
