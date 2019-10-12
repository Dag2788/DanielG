import React from "react";
import Techy from "../../pictures/headerBackground.jpg";

function Greeting() {
  return (
    <div className="parallax-container headerHeight">
      <div class="row container">
        <h2 class="header fontTinos">Daniel Garza</h2>
        <h2 class="header fontLobster">Full Stack Software Engineer</h2>
      </div>
      <div className="parallax">
        <img alt="Hi" src={Techy} />
      </div>
    </div>
  );
}

export default Greeting;
