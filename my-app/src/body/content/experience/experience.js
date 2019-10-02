import React from "react";
import THD from "../../../pictures/THD_logo.jpg";

// eslint-disable-next-line
// type props = {
//    text: String,
//    link: any,
//    style: String,
// }
// eslint-enable-next-line

function Experience1() {
  return (
    <React.Fragment>
      <div id="Experience"></div>
      {/* <div className='contentText col-8'>
             Experience.
        </div>
             <div className='backgroundRed col-2'>
             </div> */}
      <div class="row experienceSection">
        <div class="col-4">
          <div className="contentText backgroundRed">EXPERIENCE:</div>
        </div>
        <div class="col-2"></div>
        <div class="col-6"></div>
      </div>
      <div class="row experienceSection blackandWhiteBox">
        <div class="col-6">
          <div className="row">
            <div className="tittle bold fontAlignLeft contentTextInfo col-12">
              Full Stack Software Developer
            </div>
          </div>
          <div className="row">
            <div className=" fontAlignLeft contentTextInfo">The Home Depot</div>
          </div>

          <div className="row">
            <div className=" fontAlignLeft contentTextInfo">
              April 2016 - Present
            </div>
          </div>

          <div className="row">
            <div className=" fontAlignLeft contentTextInfo">Austin, Tx</div>
          </div>
        </div>
        <div class="col-6">
          <div class="container">
            <span className="logo">
              <img className="thd_logo marginTopXtra" src={THD} alt="THD" />
            </span>
          </div>
        </div>
      </div>

      {/* <div className='grid-container'>
            <span className='logo'>
            <img className="thd_logo" src={THD} alt="THD"/>
           </span>
           <div className='tittle'>
                <div className=' tittle bold fontAlignLeft fontLarge'>Full Stack Software Developer</div>
                <div className=' fontAlignLeft fontMedium'>The Home Depot</div>
                <div className=' fontAlignLeft fontSmall'>April 2016 - Present</div>
                <div className=' fontAlignLeft fontSmall'>Austin, Tx</div>   
            </div> 
            <div className='space'></div>
            <div className='info'>
                <div className=' tittle bold fontAlignLeft fontLarge'>Orders and Purchases:</div>
                <div className=' fontAlignLeft fontMedium'>Order Details Visual Re-design</div>
                <div className=' fontAlignLeft fontMedium'>In-Store Order Details Visual Re-design</div>
                <div className=' fontAlignLeft fontMedium'>Customer Service Agreement</div>
                <div className=' fontAlignLeft fontMedium'>E-Receipts Visual Re-design</div>
                <div className=' fontAlignLeft fontMedium'>E-Receipts Backend</div>
                <div className=' fontAlignLeft fontMedium'>Self Service Returns UI</div>
                <div className=' fontAlignLeft fontMedium'>Appliance Reschedule</div>
                <div className=' fontAlignLeft fontMedium'>Event Logging</div>
                <div className=' fontAlignLeft fontMedium'>Analytics</div>         
            </div> 
            <div className='stack'>
                <div className='bold fontAlignLeft fontLarge'>Backend:</div>
                <div className=' fontAlignLeft fontMedium'>Java</div>  
                <div className=' fontAlignLeft fontMedium'>SpringBoot</div> 
                <div className=' fontAlignLeft fontMedium'>TestNg</div>
                <div className=' fontAlignLeft fontMedium'>Jackson</div> 
                <div className=' fontAlignLeft fontMedium'>Cucumber</div>  
                <div className=' fontAlignLeft fontMedium'>AspectJ</div> 
                <div className=' fontAlignLeft fontMedium'>Swagger</div> 
        </div>
        <div className='space'></div>
        <div className='stack2'>
                <div className='bold fontAlignLeft fontLarge'>Frontend:</div>
                <div className=' fontAlignLeft fontMedium'>Node</div>
                <div className=' fontAlignLeft fontMedium'>React/Redux</div>  
                <div className=' fontAlignLeft fontMedium'>Thunk</div> 
                <div className=' fontAlignLeft fontMedium'>Prettier</div>
                <div className=' fontAlignLeft fontMedium'>JSLint</div> 
                <div className=' fontAlignLeft fontMedium'>Jasmine</div> 
                <div className=' fontAlignLeft fontMedium'>Karma</div> 

            </div>
            <div className='stack3'>
                <div className='bold fontAlignLeft fontLarge'>CI/CD:</div>
                <div className=' fontAlignLeft fontMedium'>Git</div>
                <div className=' fontAlignLeft fontMedium'>Concourse</div>  
            </div>
        </div> */}
    </React.Fragment>
  );
}

export default Experience1;
