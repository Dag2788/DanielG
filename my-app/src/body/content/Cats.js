import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import HoneyLady from '../../pictures/honey_lady.jpg'
import Honey1 from '../../pictures/honey1.jpg'
import Honey2 from '../../pictures/honey2.jpg'
import Roar from '../../pictures/roar.jpg'
import Vid1 from '../../pictures/vid1.mp4'
import Vid2 from '../../pictures/vid2.mp4'



class Cats extends Component {
    render() {
        return (
            <Carousel dynamicHeight width='100%' infiniteLoop autoPlay>
                <div>
                    <img src={HoneyLady} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Honey1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Honey2} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Roar} />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
}
};

export default Cats;