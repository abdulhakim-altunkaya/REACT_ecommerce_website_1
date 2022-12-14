import React from 'react';
import basketImage from "../images/icons/basket.png";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UpperbarTop2() {
  const navigate = useNavigate();

  let allLocalStorage = { ...localStorage };
  let localStorageValues = Object.values(allLocalStorage);
  {/* double filtering to prevent possible errors if local storage is littered
  After getting values of local storage objects, the values that we want must be "object" type.
  If local storage is littered, then some values there will be "string" or "number" type. Thats how
  I can get rid of other types. It's a partial cleaning. Because there might still be some values of "object" 
  type that I dont want. To help with that I created second filter. Because the objects I want are generally
  longer than 100 character length. I said 80 to be on the safe side. Once production deployment is done, I can
  update this value to a more certain number */}
  let basketArray1 = localStorageValues.filter(item => typeof JSON.parse(item) === "object");
  let basketArray = basketArray1.filter(item => item.length > 60 );

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