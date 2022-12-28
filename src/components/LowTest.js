import React from 'react';
import { useState, useEffect } from 'react';

function LowTest() {
    let imageList = ["img1", "img2", "img3", "img4", "img5"];
    let num = 0;
    let[mainImg, setMainImg] = useState(imageList[num]);
    const selectSlide = (a) => {
      setMainImg(a);
    }
    const slideLeft = () => {
      //This for loop is to detect the index number of the current mainImg
      let indexNum = 0;
      for(let i=0; i<imageList.length; i++){
          if (imageList[i] === mainImg) {
            indexNum = i;
            break;
          }
      }
      //Then we are checking if indexNum is last element. If last element, we go to the beginning.
      if (indexNum === 0) {
        setMainImg(imageList[imageList.length-1]);
      } else {
        setMainImg(imageList[indexNum-1]);
      }
    }

    const slideRight = () => {
      // clearInterval(myInterval);
      //This for loop is to detect the index number of the current mainImg
      let indexNum = 0;
      for(let i=0; i<imageList.length; i++){
          if (imageList[i] === mainImg) {
            indexNum = i;
            break;
          }
      }
      //Then we are checking if indexNum is last element. If last element, we go to the beginning.
      if (indexNum === imageList.length-1) {
        setMainImg(imageList[0]);
      } else {
        setMainImg(imageList[indexNum+1]);
      }
    }
    /*
    const myInterval = setInterval(() => {
      slideRight();
    }, 3000);
    */

  return (
    <div>

      <div className="aboutDiv">
            
        <div className='slideArea'>
            <div className='selectedSlide'>
                <div className='arrowsDiv' onClick={slideLeft}> <span className='arrows'>❮</span> </div>
                <img src={require(`../images/carousel/${mainImg}.jpg`)} className="mainImage"  alt="carousel item 1" />  
                <div className='arrowsDiv' onClick={slideRight}> <span className="arrows">❯</span> </div>
            </div>
            <div className='slideRow'>
                <div className='slideElement' onClick={() => selectSlide("img1")}>
                    <img src={require('../images/carousel/img1.jpg')} alt="carousel item 1" />  
                </div>
                <div className='slideElement' onClick={() => selectSlide("img2")}>
                    <img src={require('../images/carousel/img2.jpg')} alt="carousel item 2 " />  
                </div>
                <div className='slideElement' onClick={() => selectSlide("img3")}>
                    <img src={require('../images/carousel/img3.jpg')} alt="carousel item 3" />  
                </div>
                <div className='slideElement' onClick={() => selectSlide("img4")}>
                    <img src={require('../images/carousel/img4.jpg')} alt="carousel item 4" />  
                </div>
                <div className='slideElement' onClick={() => selectSlide("img5")}>
                    <img src={require('../images/carousel/img5.jpg')} alt="carousel item 5" />  
                </div>
            </div>
        </div>
        

      </div>


    </div>
  )
}

export default LowTest;