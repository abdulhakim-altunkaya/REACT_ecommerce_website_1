import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";

function LowCarousel() {
    const navigate = useNavigate();
    {/*When you update carousel img, just put images in relevant folder and change two lines below. 
    Make sure, img names are ending with "A" */}
    let listImgTypes = ["kuprines", "pinigines", "pinigines", "kuprines", "kuprines"]
    let listImages = ["KP001A", "PN007A", "PN012A", "KP004A", "KP014A"]
    return (
        <div className="mainCarouselDiv">
           <div className="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                    <div className="carouselChildDivs" onClick={() => navigate(`/items/${listImgTypes[0]}/${listImages[0]}`)}>
                        <img src={require('../images/carousel/img1.jpg')} alt="carousel item 1" />
                    </div>
                    <div className="carouselChildDivs" onClick={() => navigate(`/items/${listImgTypes[1]}/${listImages[1]}`)}>
                        <img src={require('../images/carousel/img2.jpg')} alt="carousel item 2" />
                    </div>
                    <div className="carouselChildDivs" onClick={() => navigate(`/items/${listImgTypes[2]}/${listImages[2]}`)}>
                        <img src={require('../images/carousel/img3.jpg')} alt="carousel item 3" />
                    </div>
                    <div className="carouselChildDivs" onClick={() => navigate(`/items/${listImgTypes[3]}/${listImages[3]}`)}>
                        <img src={require('../images/carousel/img4.jpg')} alt="carousel item 4" />
                    </div>
                    <div className="carouselChildDivs" onClick={() => navigate(`/items/${listImgTypes[4]}/${listImages[4]}`)}>
                        <img src={require('../images/carousel/img5.jpg')} alt="carousel item 5" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
export default LowCarousel;