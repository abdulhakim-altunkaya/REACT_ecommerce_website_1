import React from 'react';
import { useState } from 'react';



function LowTest2() {
    let[mainImg, setMainImg] = useState("img1");
    const selectSlide = (a) => {
      setMainImg(a);
    }    
    


  return (
    <div>

      <div className="aboutDiv">
            
      <div className="slideshow-container">

        <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src={require('../images/carousel/img1.jpg')} style={{width: "100%"}} />
        <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src={require('../images/carousel/img2.jpg')} style={{width: "100%"}} />
        <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src={require('../images/carousel/img3.jpg')} style={{width: "100%"}} />
        <div className="text">Caption Three</div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>

        </div>
        <br />

        <div style={{textAlign: "center"}}>
        <span className="dot" onClick={() => currentSlide(1)}></span> 
        <span className="dot" onClick={() => currentSlide(2)}></span> 
        <span className="dot" onClick={() => currentSlide(3)}></span> 
        </div>
                

      </div>


    </div>
  )
}

export default LowTest2;