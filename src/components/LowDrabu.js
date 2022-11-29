import React from 'react'
import { a } from "./a";

function LowDrabu() {
  return (
    <div className='generalContainer'>
      {a.map((item, index) => (
        <div key={index} className="imageContainer" >
          <img
            src={require('./Images/' +
              item.image +
              '.jpg')}
            alt={item.title}
          />
          <div className='detailContainer'>
            <div>
              <span style={{fontSize: "22px"}}>{item.title}</span>
            </div>
            <div className='detailChild'>
              <span className='detailPrice'>{item.price} €</span>
              <span className="button-5">ADD TO BASKET</span>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  )
}

export default LowDrabu