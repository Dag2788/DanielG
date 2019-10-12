import React from "react";
import longHorn from "../../pictures/longhorn_logo.png";
import UT from "../../pictures/UT2.png";

function MyEducation() {
  return (
    <div className="parallax-container educationSection">
      <div class="container whiteBoxText">
        <div className="row">
          <div className="col s12 m12 l12">
            <h1 className="fontLobster textAlignCenter noMarginBottom noMarginTop">
              Education:
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l6">
            <img
              className="longhorn_logo longhornCenter paddingTopMd"
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
      </div>
      <div className="parallax">
        <img src={UT} />
      </div>
    </div>
  );
}

export default MyEducation;
