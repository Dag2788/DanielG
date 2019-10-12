import React from "react";
import resume from "../../pictures/resume.pdf";
import thd from "../../pictures/THD_logo.jpg";

function Experience() {
  let years = ["2016 - 2017", "2017 - 2018", "2018 - 2019", "Currently"];

  let experience = {
    "2016 - 2017":
      "Orders and Purchases: Re-design from JSPs to Angular 2 Beta.",
    "2017 - 2018": "Cart and Checkout: Event Logging.",
    "2018 - 2019":
      "Orders and Purchases: Re-design from Angular 2 Beta to React-Redux.",
    Currently: "Repeat and Re-engage: Subscriptions."
  };

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
                <img class="activator" src={thd} />
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