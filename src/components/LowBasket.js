import React from 'react'

function LowBasket() {

  let basket = { ...localStorage };
  let basket2 = JSON.parse(basket[2]);
  console.log(basket);
  console.log(basket2);

  for (let i = 0; i < localStorage.length; i++) {
    let key2 = localStorage.key(i)
    console.log(`${key2}: ${localStorage.getItem(key2)}`)
  }

  return (
    <div className='cartArea'>
      <h1>Prekių krepšelis</h1>
      <div className='cartList'>

        <div className='cartImageArea'>
            <img src={require('./Images/' + basket2.image +'.jpg')} alt={basket2.title} className="cartItemImage"/>
        </div>
        <span>{basket2.title}</span>

      </div>
      

    </div>
  )
}

export default LowBasket