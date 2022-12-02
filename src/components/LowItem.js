import React from 'react';
import { useParams } from 'react-router-dom';
import { a } from "./a";

function LowItem() {
  let {itemId} = useParams();
  let itemNumber = Number(itemId)

  //Here we dont use filter because filter returns a new array of objects. We dont want
  //a new array of objects, we just need first object matching the condition. Thats why its "find"

  let result = a.find(product => product.number === itemNumber)
  console.log(result.price);

  


  
  
  return (
    <div>
      
        <div className="imageContainer" >
          <img
            src={require('./Images/' + result.image +'.jpg')}
            alt={result.title}
          />
          <div className='detailContainer'>
            <div className='detailTitle'>
              <span>{result.title}</span>
            </div>
            <div className='detailChild'>
              <span className='detailPrice'>{result.price} €</span>
              <button className="detailButton">ADD TO BASKET</button>
            </div>
            
          </div>
        </div>


    </div>
  )
}

export default LowItem;