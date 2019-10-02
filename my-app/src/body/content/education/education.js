import React from "react";
import resume from "../../pictures/resume.pdf";
import thd from "../../pictures/THD_logo.jpg";
import longHorn from "../../../pictures/longhorn_logo.png";

function Education() {
  return (
    <div class="section white">
      <div class="row container">
        <h1 class="col s12 m4 push-m4 grey-text text-darken-3 lighten-3 fontLobster textAlignCenter">
          Education:
        </h1>
      </div>
      <div class="row container">
        <div className="col s12 m12 l6">
          <div class="col s12 m4 push-m4 l8">
            <img src={longHorn} />
          </div>
        </div>
        <div className="col s12 m12 l6">
          <h4 class="grey-text text-darken-3 lighten-3 fontTinos ">
            <h4 className="fontLobster">2016 - 2017 : </h4> Orders and
            Purchases: Re-design from JSPs to Angular 2 Beta.
          </h4>
          <h4 class="grey-text text-darken-3 lighten-3 fontTinos ">
            <h4 className="fontLobster">2017 - 2018 : </h4> Cart and Checkout :
            Event Logging
          </h4>
          <h4 class="grey-text text-darken-3 lighten-3 fontTinos ">
            <h4 className="fontLobster">2018 - 2019 : </h4>Orders and Purchases:
            Re-design from Angular 2 Beta to React-Redux.
          </h4>
          <h4 class="grey-text text-darken-3 lighten-3 fontTinos ">
            <h4 className="fontLobster">Currently : </h4>Repeat and Re-engage:
            Subscriptions.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Education;
