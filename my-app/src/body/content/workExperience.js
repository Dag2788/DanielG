import React from 'react';
import resume from '../../pictures/resume.pdf';
import thd from '../../pictures/THD_logo.jpg'

function Experience() {
  return (
    <div class="section white">
      <div class="row container">
        <h1 class="col s4 offset-s4 grey-text text-darken-3 lighten-3 fontLobster">Experience:
        </h1>
      </div>
      <div class="row">
    <div class="col s12 m6 push-m3">
    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={thd}/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
      {/* <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div> */}
    </div>
  </div>
    </div>
  );
}

export default Experience;