import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function LowBasket() {

  let [inputValue, setInputValue] = useState(1);
  

  let basket = { ...localStorage };
  let basket2 = JSON.parse(basket[1]);


  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item = localStorage.getItem(key);
    console.log(JSON.parse(item));
  }


  let [sumValue, setSumValue] = useState();
  useEffect(() => {
    setSumValue(inputValue * basket2.price);
  }, [inputValue]);
  
  return (
    <div className='cartArea'>
      <h1>Prekių krepšelis</h1>

      <div className='cartListHeader'>
        <span>&nbsp;</span>
        <span>Item Id</span>
        <span>Title</span>
        <span style={{paddingLeft: "10px"}}>Price</span>
        <span>Unit</span>
        <span>Sum</span>
        <span>&nbsp;</span>
      </div>

      <div className='cartList'>

        <div className='cartImageArea'>
            <img src={require('./Images/' + basket2.image +'.jpg')} alt={basket2.title} className="cartItemImage"/>
        </div>
        <span>{basket2.number}</span>
        <span className='cartTitleArea'>{basket2.title}</span>
        <span style={{paddingLeft: "10px"}}>{basket2.price} Euro</span>
        <div className='cartInputDiv'> 
          <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} className="cartInput" />
        </div>
        <span>{sumValue} Euro</span>
        <div className='cartImageArea'>
            <img src={require('./Images/' + "delete3.png")} alt="delete icon button" className="cartDeleteIcon"/>
        </div>


      </div>
      

    </div>
  )
}

export default LowBasket