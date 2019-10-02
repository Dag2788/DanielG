import React from "react";
import resume from "../../pictures/resume.pdf";

function Objective() {
  return (
    <div class="section white">
      <div class="row container">
        <h4 class="grey-text text-darken-3 lighten-3 fontLobster fontTinos ">
          Highly motivated developer with experience in development, design and
          architecture with 3.5 years of software and web development
          experience, seeking to leverage development experience to grow the
          business through researched quality products.
        </h4>
        <div class="row paddingTopSmall">
          <a
            class="col s12 m4 push-m4 waves-effect waves-light btn-large fontLobster buttonFont"
            href={resume}
            target="_blank"
          >
            <i class="material-icons right">local_printshop</i>Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Objective;
