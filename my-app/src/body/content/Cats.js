import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import cat1 from "../../pictures/cats/cat1.jpg";
import cat2 from "../../pictures/cats/cat2.jpg";
import cat3 from "../../pictures/cats/cat3.jpg";
import cat4 from "../../pictures/cats/cat4.jpg";
import cat5 from "../../pictures/cats/cat5.jpg";
import cat6 from "../../pictures/cats/cat6.jpg";

class Cats extends Component {
  render() {
    return (
      <Carousel
        dynamicHeight
        width="100%"
        infiniteLoop
        autoPlay
        showThumbs={false}
      >
        <div>
          <img src={cat1} />
          <p className="legend">Honey</p>
        </div>
        <div>
          <img src={cat2} />
          <p className="legend">Lady</p>
        </div>
        <div>
          <img src={cat3} />
          <p className="legend">What is that?</p>
        </div>
        <div>
          <img src={cat4} />
          <p className="legend">Nap time!</p>
        </div>
        <div>
          <img src={cat5} />
          <p className="legend">Lady</p>
        </div>
        <div>
          <img src={cat6} />
          <p className="legend">Honey</p>
        </div>
      </Carousel>
    );
  }
}

export default Cats;
