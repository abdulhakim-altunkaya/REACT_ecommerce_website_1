import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function LowCarousel() {
    return (
        <div className="mainCarouselDiv">
           <div className="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                    <div>
                        <img src={require('../images/carousel/img1.jpg')}  alt="carousel item 1" />
                    </div>
                    <div>
                        <img src={require('../images/carousel/img2.jpg')}  alt="carousel item 2" />
                    </div>
                    <div>
                        <img src={require('../images/carousel/img3.jpg')}  alt="carousel item 3" />
                    </div>
                    <div>
                        <img src={require('../images/carousel/img4.jpg')}  alt="carousel item 4" />
                    </div>
                    <div>
                        <img src={require('../images/carousel/img5.jpg')}  alt="carousel item 5" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
export default LowCarousel;