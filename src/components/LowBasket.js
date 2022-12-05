import React from 'react';


function LowBasket() {

  

  let basketObject = { ...localStorage };
  let basketArray = Object.values(basketObject);
  const getData = () => {
    console.log(basketArray);
    console.log(JSON.parse(basketArray[0]));
  }

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item = localStorage.getItem(key);
    console.log(JSON.parse(item));
  }
  
  return (
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

              <div className='cartImageArea'>
                  <img src={require('./Images/' + JSON.parse(item).image +'.jpg')} alt={JSON.parse(item).title} className="cartItemImage"/>
              </div>
              <span>{JSON.parse(item).number}</span>
              <span className='cartTitleArea'>{JSON.parse(item).title}</span>
              <span style={{paddingLeft: "10px"}}>{JSON.parse(item).price} Euro</span>
              <span>{JSON.parse(item).unit}</span>
              <span>{JSON.parse(item).unit*JSON.parse(item).price} Euro</span>
              <div className='cartImageArea'>
                  <img src={require('./Images/' + "delete3.png")} alt="delete icon button" className="cartDeleteIcon"/>
              </div>


            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default LowBasket