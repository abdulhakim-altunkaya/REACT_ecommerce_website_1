import React from 'react';
import { useParams } from 'react-router-dom';
import { a } from "./a";
import { useState } from 'react';
import Modal from "./Modal";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function LowItem() {
  let {itemId} = useParams();
  let itemNumber = Number(itemId)
  let [inputValue, setInputValue] = useState(1);
  let [buttonText, setButtonText] = useState("Į krepšelį");
  const [isOpen, setIsOpen] = useState(false);
  //Here we dont use filter because filter returns a new array of objects. We dont want
  //a new array of objects, we just need first object matching the condition. Thats why its "find"

  let result = a.find(product => product.number === itemNumber)

  const saveChart = () => {
    if(inputValue > 10) {
      setIsOpen(true);
      return;
    } else {
      let newItem = {
        title: result.title,
        price: result.price,
        unit: inputValue,
        image: result.image,
        number: result.number
      }
      let jsonNewItem = JSON.stringify(newItem);
      localStorage.setItem(result.number, jsonNewItem);
      setButtonText("Added \u2714");
      setTimeout(() => {
        setButtonText("Į krepšelį");
      }, 3000);
    }

  }




  return (      
    <div className="itemContainer" >

          <div className='itemArea1'>

              <div className='itemImageDiv'>
                <div className="carousel-wrapper" style={{width: "30vw"}}>
                  <Carousel infiniteLoop useKeyboardArrows>
                      <div>
                          <img src={require('../images/' + result.number +'/img1.jpg')} className="itemImage" />
                      </div>
                      <div>
                          <img src={require('../images/' + result.number +'/img2.jpg')} className="itemImage" />
                      </div>
                      <div>
                          <img src={require('../images/' + result.number +'/img3.jpg')} className="itemImage" />
                      </div>
                      <div>
                          <img src={require('../images/' + result.number +'/img4.jpg')} className="itemImage" />
                      </div>
                  </Carousel>
                </div>

              </div>
              <div className='itemDetailDiv'>
                <div>
                  <span> <h2>{result.title}</h2></span>
                  <span>
                    <span className='priceTag'> {result.price} €  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input type="number" 
                      value={inputValue} onChange={e => setInputValue(e.target.value)} 
                      onFocus={(e) => e.target.select()}
                      min="1" max="10" className="itemInput" /> 
                  </span>

                  
                </div>
                <div>
                  <button className='detailButton itemButton' onClick={saveChart}> {buttonText} </button>
                </div>
              </div>
          </div>

          <div className='itemArea2'>
            <main>PRODUCT INFORMATION: {result.description}</main>
          </div>

          <div className='itemArea3'>
            <main>TECHNICAL DETAILS: {result.details.color} </main>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>

            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            <p>fwefwef</p>
            
          </div>

          <div>

          </div>

          {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default LowItem;