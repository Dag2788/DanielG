import React from "react";
import digital from "../../pictures/digital.jpg";
import Techy from "../../pictures/tech2.jpg";
import UT from "../../pictures/UT1.jpg";

function Quote() {
  return (
    <div className="parallax-container parallaxSeparator">
      <div class="row container">
        {/* <h2 class="header fontTinos shadow">
          "Today, most software exists, not to solve a problem, but to interface
          with other software.”
        </h2>
        <h2 class=" header fontLobster shadow">— IO Angell </h2> */}
      </div>
      <div className="parallax">
        <div className="row ">
          <img src={Techy} />
        </div>
      </div>
    </div>
  );
}

export default Quote;
