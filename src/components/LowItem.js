import React from 'react';
import { useParams } from 'react-router-dom';
import { a } from "./a";

function LowItem() {
  let {itemId} = useParams();
  let itemNumber = Number(itemId)

  //Here we dont use filter because filter returns a new array of objects. We dont want
  //a new array of objects, we just need first object matching the condition. Thats why its "find"

  let result = a.find(product => product.number === itemNumber)

  const saveChart = () => {
    let newItem = {
      title: result.title,
      price: result.price,
      image: result.image,
      number: result.number
    }
    let jsonNewItem = JSON.stringify(newItem);
    localStorage.setItem(result.number, jsonNewItem);
    console.log(localStorage.getItem(result.number))
  }

  const getData = () => {
    let cartObj = localStorage.getItem(1);
    //UNDEFINED: console.log(cartObj.price)
    let cartObj2 = JSON.parse( cartObj );
    console.log(cartObj2.price)
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
                  <span className='priceTag'> {result.price} € </span>
                </div>
                <div>
                  <button className='detailButton itemButton' onClick={saveChart}> Į krepšelį </button>
                </div>
              </div>
          </div>

          <div className='itemArea2'>
            <main>PRODUCT INFORMATION: {result.description}</main>
          </div>

          <div className='itemArea3'>
            <main onClick={getData}>TECHNICAL DETAILS: {result.details.color}</main>
          </div>


    </div>
  )
}

export default LowItem;