import React from "react";
import thd from "../../pictures/THD_logo.jpg";
import { years, experience } from "../constants/constants";

function Experience() {
  return (
    <div class="section white">
      <div class="row container">
        <h1 class="col s12 m4 push-m4 grey-text text-darken-3 lighten-3 fontLobster textAlignCenter">
          Experience:
        </h1>
      </div>
      <div class="row container">
        <div className="col s12 m12 l6">
          <div class="col s12 m6 push-m3 l8 marginTopSm">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="THD" class="activator" src={thd} />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  The Home Depot<i class="material-icons right">more_vert</i>
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Full Stack Software Engineer
                  <i class="material-icons right">close</i>
                </span>
                <p class="card-title grey-text text-darken-4">
                  April 2016 - Present.
                </p>
                <p class="card-title grey-text text-darken-4">Austint, Tx.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l6">
          {years.map(val => {
            return (
              <h4 class="grey-text text-darken-3 lighten-3 fontTinos ">
                <h4 className="fontLobster">{val} :</h4>
                {experience[val]}
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
