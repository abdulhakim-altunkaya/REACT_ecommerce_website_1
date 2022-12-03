import React from 'react'
import { a } from "./a";
import { useNavigate } from 'react-router-dom';

function LowDrabu() {
  const navigate = useNavigate();
  return (
    <div className='generalContainer'>
      {a.map((item, index) => (
        <div key={index} className="imageContainer" >
          <img
            src={require('./Images/' + item.image +'.jpg')}
            alt={item.title}
          />
          <div className='detailContainer'>
            <div className='detailTitle'>
              <span>{item.title}</span>
            </div>
            <div className='detailChild'>
              <span className='detailPrice'>{item.price} €</span>
              <button className="detailButton listButton" onClick={() => navigate(`/items/${item.number}`)}>Į krepšelį</button>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  )
}

export default LowDrabu