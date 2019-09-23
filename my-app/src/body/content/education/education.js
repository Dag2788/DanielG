import React from 'react';
import longHorn from '../../../pictures/longhorn_logo.png'

// eslint-disable-next-line
// type props = {
//    text: String,
//    link: any, 
//    style: String,
// }
// eslint-enable-next-line


function Education() {

  return (
    <React.Fragment>
        <div id="Education"></div>
         <div className='grid-container-education'>
            <span className='logo'>
            <img className="longhorn_logo" src={longHorn} alt="Hook'em Horns!"/>
           </span>
           <div className='tittle'>
                <div className=' tittle bold fontAlignLeft fontLarge'>The University of Texas at Austin</div>
                <div className=' fontAlignLeft fontMedium'>Bacherlor of Science in Computer Science</div>
                <div className=' fontAlignLeft fontSmall'>August 2011 - May 2015</div>
            </div> 
            <div className='space'></div>
            <div className='info'>
                <div className=' tittle bold fontAlignLeft fontLarge'>Course work:</div>
                <div className=' fontAlignLeft fontMedium'>Intro to Programming</div>
                <div className=' fontAlignLeft fontMedium'>Data Structures</div>
                <div className=' fontAlignLeft fontMedium'>Algorithms</div>
                <div className=' fontAlignLeft fontMedium'>Computer Architecture</div>
                <div className=' fontAlignLeft fontMedium'>Operating Systems</div>
                <div className=' fontAlignLeft fontMedium'>Programming for Performance</div>
                <div className=' fontAlignLeft fontMedium'>Intro to Security</div>
                <div className=' fontAlignLeft fontMedium'>Software Engineering</div>
                <div className=' fontAlignLeft fontMedium'>Data Management</div>
                <div className=' fontAlignLeft fontMedium'>Artificial Intelligence.</div>   

                      
            </div> 
            <div className='stack'>
                <div className='bold fontAlignLeft fontLarge'>Proficient in:</div>
                <div className=' fontAlignLeft fontMedium'>Java</div>  
                <div className=' fontAlignLeft fontMedium'>Javascript</div> 
                <div className=' fontAlignLeft fontMedium'>REST</div> 
                <div className=' fontAlignLeft fontMedium'>Node</div>
                <div className=' fontAlignLeft fontMedium'>React</div> 
                <div className=' fontAlignLeft fontMedium'>Redux</div>  
                <div className=' fontAlignLeft fontMedium'>Jasmine/Karma</div> 
                <div className=' fontAlignLeft fontMedium'>TestNG</div> 
                <div className=' fontAlignLeft fontMedium'>Git</div> 

        </div>
        </div>
     
    </React.Fragment>
  );
}

export default Education;
