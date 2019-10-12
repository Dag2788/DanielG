import React from "react";
import Cats from "./Cats";

function MyCats() {
  return (
    <div class="section white">
      <div class="row container">
        <h1 class="col s12 m4 push-m4 grey-text text-darken-3 lighten-3 fontLobster textAlignCenter">
          My Cats:
        </h1>
      </div>
      <div class="row container">
        <h1 class="col s12 m4 push-m4 grey-text text-darken-3 lighten-3 fontLobster textAlignCenter">
          <Cats />
        </h1>
      </div>
      <div class="row container">
        <h4 class="grey-text text-darken-3 lighten-3 fontLobster fontTinos ">
          Honey and Lady are{" "}
          <a href="https://www.bengal-katz.com/">Katznjamr</a> Bengals. They are
          littermates and were born on April 1st 2018. Honey has the darker coat
          and is typically more active and vocal than Lady. Lady has the lighter
          coat and she tends to be pretty mellow. Both are very vocal and cry
          for attention if I am home, but they are not lap cats. They have all
          sorts of toys including a ball pit. Keywords like 'breakfast',
          'snacks' and 'dinner' gets them jumping on the walls. They are on a
          raw food diet and vaccinated holistically. They are the most loving
          when I'm saying good-bye.
        </h4>
      </div>
    </div>
  );
}

export default MyCats;
