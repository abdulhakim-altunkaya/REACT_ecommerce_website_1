import React from 'react';
import {rankines} from "../images/rankines/rankines.js";
import { useNavigate } from 'react-router-dom';

function LowRanki() {

  const navigate = useNavigate();

  return (
    <div className='generalContainer'>
      {rankines.map((item, index) => (
        <div key={index} className="imageContainer">
          <div className='realImgContainer'>
            <img src={require(`../images/rankines/${item.number}/${item.datanumber}A.jpg`)} alt={item.title} />
          </div>
          <div className='detailContainer'>
            <div className='detailTitle'><span>{item.title}</span></div>
            <div className='detailChild'>
              <span className='detailPrice'>{item.price} €</span>
              <button className="detailButton listButton" onClick={() => navigate(`/items/rankines/${item.number}`)}>Į krepšelį</button>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default LowRanki;
