import React from 'react';
import { useParams } from 'react-router-dom';
import { a } from "./a";
import { useState } from 'react';

function LowItem() {
  let {itemId} = useParams();
  let itemNumber = Number(itemId)
  let [inputValue, setInputValue] = useState(1);
  let [buttonText, setButtonText] = useState("Į krepšelį");
  //Here we dont use filter because filter returns a new array of objects. We dont want
  //a new array of objects, we just need first object matching the condition. Thats why its "find"

  let result = a.find(product => product.number === itemNumber)

  const saveChart = () => {
    let newItem = {
      title: result.title,
      price: result.price,
      unit: inputValue,
      image: result.image,
      number: result.number

    }
    let jsonNewItem = JSON.stringify(newItem);
    localStorage.setItem(result.number, jsonNewItem);
    window.location.reload();
    setButtonText("Added \u2714");
    setTimeout(() => {
      setButtonText("Į krepšelį");
    }, 2000);
  }



  return (      
    <div className="itemContainer" >

          <div className='itemArea1'>
              <div className='itemImageDiv'>
                <img src={require('./Images/' + result.image +'.jpg')} alt={result.title} className="itemImage"/>
              </div>
              <div className='itemDetailDiv'>
                <div>
                  <span> <h2>{result.title}</h2></span>
                  <span>
                    <span className='priceTag'> {result.price} €  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} min="1" className="itemInput" /> 
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
          </div>


    </div>
  )
}

export default LowItem;