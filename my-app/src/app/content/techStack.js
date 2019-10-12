import React from "react";
import { techFed } from "../constants/constants";

function TechStack() {
  return (
    <div class="section white">
      <div class="row">
        <h1 class="col s12 m12 l12  grey-text text-darken-3 lighten-3 fontLobster textAlignCenter">
          Front-End
        </h1>
      </div>
      <div class="row paddingTopSmall textAlignCenter stackDivisor">
        {techFed.map(val => {
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
