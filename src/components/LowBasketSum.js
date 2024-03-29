import React from 'react';
import { useState, useEffect } from 'react';

function LowBasketSum() {
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
  
    let[basketSum, setBasketSum] = useState();
    
    let total = 0;
    useEffect(() => {
      let n = 0;
      for (let i  = 0; i < basketArray.length; i++){
        let item = JSON.parse(basketArray[i]);
        n = n + (Number(item.price) * Number(item.unit));
        
      }
      total = n;
    }, [basketArray]);
    
    useEffect(() => {
      setBasketSum(total);
    }, [basketArray]);


  return (
    <div >
      <div id='cartListSumBig'>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span className='finalPrice'>
            <span>Omniva kaina: &nbsp; 3 Euro</span>
            <span><strong>Užsakymo suma: &nbsp; {basketSum+3} Euro</strong></span>
          </span>
          <span>&nbsp;</span>
      </div>
      <div className='cartListSumSmall'>
          <span>&nbsp;</span>
          <span>Omniva kaina: &nbsp;</span>
          <span>3 Euro</span>
      </div>
      <div className='cartListSumSmall'>
          <span>&nbsp;</span>
          <span>Užsakymo suma: &nbsp;</span>
          <span>{basketSum+3} Euro</span>
      </div>
    </div>
  )
}

export default LowBasketSum;