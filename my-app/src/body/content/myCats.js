import React from 'react';
import Cats from './Cats';

// eslint-disable-next-line
// type props = {
//    text: String,
//    link: any, 
//    style: String,
// }
// eslint-enable-next-line


function MyCats() {

  return (
    <React.Fragment>
      <div className='row marginTop'>
    <div className='col-3'>
    </div>
    <div className='col-9 fontAlignRight'>
    <div className='greetingTextExp'>MY CATS:</div>

    </div>
    </div>
    <div className='row'id="Cats">
        <div class="col-4">
            <div className='fontWork fontAlignRight'>Honey</div>
            <div className='fontWork fontAlignRight'>&</div>
            <div className='fontWork fontAlignRight'>Lady</div>
        </div>
        <div class="col-4">
          <Cats/>
            </div>
            <div class="col-4"></div>

    </div>
    </React.Fragment>
  );
}

export default MyCats;
