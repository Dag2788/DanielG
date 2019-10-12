import React from "react";
import resume from "../../pictures/resume.pdf";

function TechStackBed() {
  let tech = [
    "Back-End",
    "Java",
    "C++",
    "Python",
    "Node",
    "Maven",
    "REST",
    "AspectJ",
    "Cucumber",
    "TestNG",
    "Swagger",
    "Zipkin",
    "XML",
    "SQL",
    "Perl",
    "Linux",
    "Git",
    "Spring Boot"
  ];

  return (
    <div class="section white">
      <div class="row">
        <h1 class="col col s12 m12 l12 grey-text text-darken-3 lighten-3 fontLobster textAlignCenter">
          Back-End
        </h1>
      </div>
      <div class="row  paddingTopSmall">
        {tech.map(val => {
          return (
            <h4 class="col s6 l4 waves-effect waves-light fontTinos buttonFont textAlignCenter">
              {val}
            </h4>
          );
        })}
      </div>
    </div>
  );
}

export default TechStackBed;
