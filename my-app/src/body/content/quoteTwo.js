import React from "react";
import Techy from "../../pictures/headerBackground.jpg";
import UT from "../../pictures/UT2.png";

function QuoteTwo() {
  return (
    <div className="parallax-container">
      <div class="row container whiteBoxText">
        <h2 class="header fontTinos shadow">
          "If debugging is the process of removing software bugs, then
          programming must be the process of putting them in.”
        </h2>
        <h2 class=" header fontLobster shadow">— E. W. Dijkstra </h2>
      </div>
      <div className="parallax">
        <img src={UT} />
      </div>
    </div>
  );
}

export default QuoteTwo;
