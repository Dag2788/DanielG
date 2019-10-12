import React from "react";
import resume from "../../pictures/resume.pdf";

function TechStack() {
  let tech = [
    "Javascript",
    "ES6",
    "HTML",
    "CSS",
    "JQuery",
    "Node",
    "Angular",
    "React",
    "Redux",
    "Jest",
    "Enzyme",
    "Flow",
    "Webpack",
    "Grunt",
    "Babel",
    "Typescript",
    "Axios",
    "Thunk",
    "Sagas",
    "MomentJs",
    "Materialize",
    "Lodash",
    "Jasmine",
    "Selenium",
    "Puppeteer"
  ];

  return (
    <div class="section white">
      <div class="row">
        <h1 class="col s12 m12 l12  grey-text text-darken-3 lighten-3 fontLobster textAlignCenter">
          Front-End
        </h1>
      </div>
      <div class="row paddingTopSmall textAlignCenter stackDivisor">
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

export default TechStack;
