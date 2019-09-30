import React from 'react';
import { isMobile, MobileView } from 'react-device-detect';


function TechStackBed() {
  return (
  <div className='educationText'>
     {!isMobile  && <div className='row'>
    <div className='col-12'>
      <div className='tittleText fontAlignRight'>Back End:</div>
    </div>
  </div> }
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
