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
          <div>{item.number}</div>
        </div>
      ))}
    </div>
  )
}

export default LowDrabu