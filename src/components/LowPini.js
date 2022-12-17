import React from 'react';
import {pinigines} from "../images/pinigines/pinigines.js";
import { useNavigate } from 'react-router-dom';

function LowPini() {

  const navigate = useNavigate();

  return (
    <div className='generalContainer'>
      {pinigines.map((item, index) => (
        <div key={index} className="imageContainer">
          <div className='realImgContainer' onClick={() => navigate(`/items/pinigines/${item.number}`)}>
            <img src={require(`../images/pinigines/${item.number}/${item.datanumber}A.jpg`)} alt={item.title} />
          </div>
          <div className='detailContainer'>
            <div className='detailTitle'><span>{item.title}</span></div>
            <div className='detailChild'>
              <span className='detailPrice'>{item.price} €</span>
              <button className="detailButton listButton" onClick={() => navigate(`/items/pinigines/${item.number}`)}>Į krepšelį</button>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default LowPini;
