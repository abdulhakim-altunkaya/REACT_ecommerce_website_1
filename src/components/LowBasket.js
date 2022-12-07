import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function LowBasket() {
  const navigate = useNavigate();
  

  let basketObject = { ...localStorage };
  let basketArray = Object.values(basketObject);
  const getData = () => {
    console.log(basketArray);
    console.log(JSON.parse(basketArray[0]));
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let item = localStorage.getItem(key);
      console.log(JSON.parse(item));
    }
  }

  

  const deleteItem = (id) => {
    localStorage.removeItem(id);
    window.location.reload();
  }
  return (
    <>
    {basketArray.length > 0 ?
    <div className='cartArea'>
      
      <h1 onClick={getData}>Prekių krepšelis</h1>

      <div className='cartListHeader'>
        <span>&nbsp;</span>
        <span>Item Id</span>
        <span>Title</span>
        <span style={{paddingLeft: "10px"}}>Price</span>
        <span>Unit</span>
        <span>Sum</span>
        <span>&nbsp;</span>
      </div>


      
          <div>
            {basketArray.map((item, index) => (
              <div key={index}>
                <div className='cartList'>
    
                  <div>
                      <img 
                      onClick={() => navigate(`/items/${JSON.parse(item).number}`)}
                      src={require('./Images/' + JSON.parse(item).image +'.jpg')} 
                      alt={JSON.parse(item).title} 
                      className="cartItemImage"/>
                  </div>
                  <span>{JSON.parse(item).number}</span>
                  <span 
                  style={{cursor: "pointer"}}
                  onClick={() => navigate(`/items/${JSON.parse(item).number}`)}>{JSON.parse(item).title}</span>
                  <span style={{paddingLeft: "10px"}}>{JSON.parse(item).price} Euro</span>
                  <span>{JSON.parse(item).unit}</span>
                  <span>{JSON.parse(item).unit*JSON.parse(item).price} Euro</span>
                  <div>
                      <img src={require('./Images/' + "delete3.png")} alt="delete icon button" className="cartDeleteIcon" 
                      onClick={() => deleteItem(JSON.parse(item).number)}/>
                  </div>
    
                </div>
              </div>
            ))}
          </div>



    </div>
    :
      
    <div style={{fontSize: "30px", paddingTop:"20px", fontFamily:"Trebuchet MS"}}>No item in the basket yet</div>

    }
    </>
  )
}

export default LowBasket