import React from "react";
import longHorn from "../../pictures/longhorn_logo.png";
import UT from "../../pictures/UT2.png";

function QuoteTwo() {
  return (
    <div className="parallax-container educationSection">
      <div className="row">
        <div className="col s12 m12 l12">
          <h1 className="fontLobster textAlignCenter blackFont noMarginBottom noMarginTop">
            Education:
          </h1>
        </div>
      </div>
      <div class="container whiteBoxText ">
        {/* <h2 class="header fontTinos shadow">
          "If debugging is the process of removing software bugs, then
          programming must be the process of putting them in.”
        </h2>
        <h2 class=" header fontLobster shadow">— E. W. Dijkstra </h2> */}
        <div className="row">
          <div className="col s12 m12 l6">
            <img
              className="longhorn_logo longhornCenter paddingTopLg"
              src={longHorn}
              alt="Hook'em Horns!"
            />{" "}
          </div>
          <div className="col s12 m12 l6">
            <h3 className="fontTinos textAlignCenter">
              The University of Texas at Austin
            </h3>
            <h3 className="fontTinos textAlignCenter">
              Bacherlor of Science in Computer Science
            </h3>
            <h3 className="fontTinos textAlignCenter">
              August 2011 - December 2015
            </h3>
          </div>
        </div>
        {/* <div className="row">
            <div className=" tittle bold fontAlignCenter contentEducationInfo">
              The University of Texas at Austin
            </div>
            <div className=" fontAlignCenter contentEducationInfo">
              Bachelor of Science in Computer Science
            </div>
            <div className=" fontAlignCenter contentEducationInfo">
              August 2011 - May 2015
            </div>
          </div> */}
      </div>
      <div className="parallax">
        <img src={UT} />
      </div>
    </div>
  );
}

export default QuoteTwo;
