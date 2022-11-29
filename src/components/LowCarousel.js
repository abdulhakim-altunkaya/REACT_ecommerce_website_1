import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function LowCarousel() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="../img1.jpg" />
                </div>
                <div>
                    <img src="../img2.jpg" />
                </div>
                <div>
                    <img src="../img3.jpg" />
                </div>
            </Carousel>
        </div>
    );
}
export default LowCarousel;