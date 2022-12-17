import React from 'react';
import { useNavigate } from 'react-router-dom';
import LowBasketSum from "./LowBasketSum";
import { useState } from 'react';
import LowBasketForm from './LowBasketForm';



function LowBasket() {
  const navigate = useNavigate();

  {/* double filtering to prevent possible errors if local storage is littered
  After getting values of local storage objects, the values that we want must be "object" type.
  If local storage is littered, then some values there will be "string" or "number" type. Thats how
  I can get rid of other types. It's a partial cleaning. Because there might still be some values of "object" 
  type that I dont want. To help with that I created second filter. Because the objects I want are generally
  longer than 100 character length. I said 80 to be on the safe side. Once production deployment is done, I can
  update this value to a more certain number */}

  let allLocalStorage = { ...localStorage };
  let localStorageValues = Object.values(allLocalStorage);
  let basketArray1 = localStorageValues.filter(item => typeof JSON.parse(item) === "object");
  let basketArray = basketArray1.filter(item => item.length > 60 );



  const getData = () => {
    console.log(basketArray);
    console.log(JSON.parse(basketArray[0]));
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let item = localStorage.getItem(key);
      console.log(JSON.parse(item));
    }
  }

  //As there is window.location.reload() line down here, no need to use useEffect up.
  const deleteItem = (id) => {
    localStorage.removeItem(id);
    navigate("/cart");
  } 

  const printOrder = () => {
    let printContents = document.getElementById('orderSuccessfulArea').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents; 
  }

  //DISPLAYING MESSAGE AFTER ORDER IS SUBMITTED. Uuid data is coming from LowBasketForm by using function technique
  let[basketStatusText, setBasketStatusText] = useState("Jūsų prekių krepšelis tuščias");
  const handleOrderStatus = (uuid, basketSum, fullName, orderMoment, address, phone) => {
    let item = {
      itemDetails: (
        <div className='orderSuccessfulArea' id='orderSuccessfulArea'>
          <img src={require('../images/icons/greentick.png')} 
            alt="Green Tick Icon" className='orderSuccessfulAreaImg' />
          <div className='orderSuccessfulAreaDetails'>
            <span>Užsakymas sėkmingas </span>
            <span>Užsakymo numeris: <i style={{color:'green'}}> {uuid} </i > </span>
            <span>Užsakymo suma: {basketSum} € </span>
            <span>Pirkėjas: {fullName}</span>
            <span>Data: {JSON.parse(orderMoment).slice(0,10)}</span>
            <span>Telefonas: {phone}</span>
            <span>Addresas: {address}</span>
          </div>
          <br />
          <div className='orderSuccessfulAreaDetails'>
            <span>Order is successful</span>
            <span>Order Number: <i style={{color:'green'}}> {uuid} </i > </span>
            <span>Order sum: {basketSum} €</span>
            <span>Buyer: {fullName}</span>
            <span>Date: {JSON.parse(orderMoment).slice(0,10)}</span>
            <span>Telephone: {phone}</span>
            <span>Address: {address}</span>
          </div>
          <p><button onClick={printOrder}> <i>print</i></button></p>
          
        </div>
      )
    } 
    setBasketStatusText(item.itemDetails);
  };

  return (
    <>
    {basketArray.length > 0 ?
    <div className='cartArea'>

      <h1 onClick={getData}>Prekių krepšelis</h1>

      <div className='cartListHeader'>
        <span>&nbsp;</span>
        <span>Item Id</span>
        <span>Prekė</span>
        <span style={{paddingLeft: "6px"}}>Vieneto kaina</span>
        <span>Kiekis</span>
        <span>Iš viso</span>
        <span>&nbsp;</span>
      </div>
   
      <div>
        {basketArray.map((item, index) => (
        
          <div key={index}>
            <div className='cartList'>

              <div>
                  <img 
                  onClick={() => navigate(`/items/${JSON.parse(item).category}/${JSON.parse(item).number}`)}
                  src={require(`../images/${JSON.parse(item).category}/${JSON.parse(item).number}/${JSON.parse(item).number}.jpg`)}
                  alt={JSON.parse(item).title} 
                  className="cartItemImage"/>
              </div>
              <span>{JSON.parse(item).number}</span>
              <span 
              style={{cursor: "pointer"}}
              onClick={() => navigate(`/items/${JSON.parse(item).category}/${JSON.parse(item).number}`)}>{JSON.parse(item).title}</span>
              <span style={{paddingLeft: "10px"}}>{JSON.parse(item).price} €</span>
              <span>{JSON.parse(item).unit}</span>
              <span>{JSON.parse(item).unit*JSON.parse(item).price} €</span>
              <div>
                  <img src={require("../images/icons/delete.png")} alt="delete icon button" className="cartDeleteIcon" 
                  onClick={() => deleteItem(JSON.parse(item).number)}/>
              </div>

            </div>
          </div>
        ))}
      </div>

      <LowBasketSum />
      <LowBasketForm handleOrderStatus={handleOrderStatus} />

    </div>
    :
      
    <div className='orderSuccessfulAreaParentDiv'>{basketStatusText}</div>

    }
    </>
  )
}

export default LowBasket;
