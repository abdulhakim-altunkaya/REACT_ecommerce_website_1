import React from 'react';
import basketImage from "../images/basket.png";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UpperbarTop2() {
  const navigate = useNavigate();
  let basketObject = { ...localStorage };
  let basketArray = Object.values(basketObject);

  let[basketNumber, setBasketNumber] = useState();
  
  let total = 0;
  useEffect(() => {
    let n = 0;
    for (let i  = 0; i < basketArray.length; i++){
      let item = JSON.parse(basketArray[i]);
      n = n + Number(item.unit);
    }
    total = n;
  }, [basketArray]);
  
  useEffect(() => {
    setBasketNumber(total);
  }, [basketArray]);


  return (
    <div className='basketImage'>
        <img src={basketImage} alt="clickable basket icon" onClick={() => navigate("/cart")}/>
        <span className='badge badge-warning' id='lblCartCount'> {basketNumber} </span>
    </div>
  )
}

export default UpperbarTop2