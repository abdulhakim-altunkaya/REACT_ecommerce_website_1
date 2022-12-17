import React from 'react';
import { useParams } from 'react-router-dom';
import {rankines} from "../images/rankines/rankines.js";
import { useState } from 'react';
import Modal from "./Modal";
import { useNavigate } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function LowItemRanki() {
  const navigate = useNavigate();
  let {itemId} = useParams();
  let [inputValue, setInputValue] = useState(1);
  let [buttonText, setButtonText] = useState("Į krepšelį");
  const [isOpen, setIsOpen] = useState(false);
  //Here we dont use filter because filter returns a new array of objects. We dont want
  //a new array of objects, we just need first object matching the condition. Thats why its "find"

  let result = rankines.find(product => product.number === itemId)

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
        number: result.number,
        datanumber: result.datanumber,
        category: result.category,
      }
      let jsonNewItem = JSON.stringify(newItem);
      localStorage.setItem(result.number, jsonNewItem);
      setButtonText("Added \u2714");
      setTimeout(() => {
        setButtonText("Į krepšelį");
      }, 3000);
      navigate(`/items/rankines/${result.number}`)
    }
  }
  




  return (      
    <div className="itemContainer" >

          <div className='itemArea1'>

              <div className='itemImageDiv'>
                <div className="carousel-wrapper" style={{width: "30vw"}}>
                  <Carousel infiniteLoop useKeyboardArrows>
                      <div>
                          <img src={require('../images/rankines/' + result.number + `/${result.datanumber}A.jpg` )} className="itemImage" alt='item to purchase'/>
                      </div>
                      <div>
                          <img src={require('../images/rankines/' + result.number + `/${result.datanumber}B.jpg` )} className="itemImage" alt='item to purchase'/>
                      </div>
                      <div>
                          <img src={require('../images/rankines/' + result.number + `/${result.datanumber}C.jpg` )} className="itemImage" alt='item to purchase'/>
                      </div>
                      <div>
                          <img src={require('../images/rankines/' + result.number + `/${result.datanumber}D.jpg` )} className="itemImage" alt='item to purchase'/>
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



          {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default LowItemRanki;