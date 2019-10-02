import React from 'react';
import digital from '../../pictures/digital.jpg';
import Techy from '../../pictures/headerBackground.jpg';


function Quote() {
  return (
<div className="parallax-container headerHeight">
<div class="row container">
    {/* <h2 class="header fontTinos shadow">"Today, most software exists, not to solve a problem, 
    but to interface with other software.”</h2>
    <h2 class=" header fontLobster shadow">— IO Angell </h2>  */}
  </div>
  <div className="parallax"><img src={Techy}/></div>
</div>
  );
}

export default Quote;
