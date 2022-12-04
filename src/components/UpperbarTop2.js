import React from 'react';
import basketImage from "../images/basket.png";
import { useNavigate } from 'react-router-dom';

function UpperbarTop2() {
  const navigate = useNavigate();

  return (
    <div className='basketImage'>
      <img src={basketImage} alt="clickable basket icon" onClick={() => navigate("/cart")}/>
    </div>
  )
}

export default UpperbarTop2