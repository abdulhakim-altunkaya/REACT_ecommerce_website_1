import React from 'react';
import {kuprines} from "../images/kuprines/kuprines.js";
import { useNavigate } from 'react-router-dom';

function LowKupri() {

  const navigate = useNavigate(); 

  return (
    <div className='generalContainer'>
      {kuprines.map((item, index) => (
        <div key={index} className="imageContainer">
          <div className='realImgContainer' onClick={() => navigate(`/items/kuprines/${item.number}`)}>
            <img src={require(`../images/kuprines/${item.number}/${item.datanumber}A.jpg`)} alt={item.title} />
          </div>
          <div className='detailContainer'>
            <div className='detailTitle'><span>{item.title}</span></div>
            <div className='detailChild'>
              <span className='detailPrice'>{item.price} €</span>
              <button className="detailButton listButton" onClick={() => navigate(`/items/kuprines/${item.number}`)}>Į krepšelį</button>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default LowKupri;
