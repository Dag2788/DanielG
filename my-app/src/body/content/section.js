import React from "react";
import Techy from "../../pictures/tech2.jpg";

function Section() {
  return (
    <div className="parallax-container parallaxSeparator">
      <div class="row container"></div>
      <div className="parallax">
        <div className="row ">
          <img src={Techy} />
        </div>
      </div>
    </div>
  );
}

export default Section;
