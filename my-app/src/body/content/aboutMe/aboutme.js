import React from 'react';
import Dan from '../../../pictures/myFace2.jpg'

// eslint-disable-next-line
// type props = {
//    text: String,
//    link: any, 
//    style: String,
// }
// eslint-enable-next-line


function AboutMe() {

  return (
    <React.Fragment>
          <div id="About Me"></div>
         <div className='grid-container-aboutMe'>
            <span className='logo'>
            <img className="aboutMyFace"  src={Dan} alt="Dan"/>
           </span>
           <div className='tittle'>
                <div className=' tittle bold fontAlignLeft fontLarge'>Daniel Garza</div>
                <div className=' fontAlignLeft fontMedium'>Born in Monterrey, N.L., Mexico.</div>
                <div className=' fontAlignLeft fontSmall'>October 14th 1988</div>
            </div> 
            <div className='info'>
                <div className=' tittle bold fontAlignLeft fontLarge'>Interests:</div>
                <div className=' fontAlignLeft fontMedium'>Programming</div>
                <div className=' fontAlignLeft fontMedium'>Technology</div>
                <div className=' fontAlignLeft fontMedium'>The Environment</div>
                <div className=' fontAlignLeft fontMedium'>Self Improvement</div>
                <div className=' fontAlignLeft fontMedium'>Animal Behavior</div>
                <div className=' fontAlignLeft fontMedium'>Psychology</div>
                <div className=' fontAlignLeft fontMedium'>Health and Fitness</div>
                <div className=' fontAlignLeft fontMedium'>Music</div>
                <div className=' fontAlignLeft fontMedium'>Art</div>
                <div className=' fontAlignLeft fontMedium'>History</div>   

                      
            </div> 
            <div className='stack'>
                <div className='bold fontAlignLeft fontLarge'>Hobbies:</div>
                <div className=' fontAlignLeft fontMedium'>Programming</div>  
                <div className=' fontAlignLeft fontMedium'>Reading</div> 
                <div className=' fontAlignLeft fontMedium'>Mountain Biking</div> 
                <div className=' fontAlignLeft fontMedium'>Cycling</div>
                <div className=' fontAlignLeft fontMedium'>Weight lifting</div> 
                <div className=' fontAlignLeft fontMedium'>Movies</div>  
                <div className=' fontAlignLeft fontMedium'>Video Games</div> 
                <div className=' fontAlignLeft fontMedium'>Socializing</div> 
                <div className=' fontAlignLeft fontMedium'>Playing with my cats</div> 
        </div>
        <div className='stack2'>
                <div className='bold fontAlignLeft fontLarge'>Favorite Books:</div>
                <div className=' fontAlignLeft fontMedium'>Secrets of the Millionaire Mind.</div>
                <div className=' fontAlignLeft fontMedium'>The Richest Man in Babylon.</div>  
                <div className=' fontAlignLeft fontMedium'>Inevitable Genius.</div> 
            </div>
            <div className='stack3'>
                <div className='bold fontAlignLeft fontLarge'>Contact:</div>
                <div className=' fontAlignLeft fontMedium'>dgza88@gmail.com</div>
            </div>
        </div>
     
    </React.Fragment>
  );
}

export default AboutMe;
