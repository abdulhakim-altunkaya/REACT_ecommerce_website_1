import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    window.location.reload();
  }


  const sendOrder = () => {
    console.log("order is sent");
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

      <div className="container">
        Norėdami pateikti užsakymą: <br />
        1) Užpildykite žemiau esančią formą <br />
        2) Spustelėkite mygtuką pateikti <br />
        3) Perveskite SUMĄ į šią banko sąskaitą per 3 dienas. <br />
        4) Norėdami perkelti nuorodą, įveskite savo vardą <br />
            <br /><br />
        Patvirtinus užsakymą, prekes išsiųsime per 3 dienas. Siuntos detales išsiųsime Jūsų el.pašto adresu.
        <form>      
          <input name="name" type="text" className="feedback-input" placeholder="Vardas Pavardė" />   
          <input name="email" type="text" className="feedback-input" placeholder="Telefonas" />
          <textarea name="text" className="feedback-input" placeholder="Adresas"></textarea>
          <input type="submit" className='formButtonBasket' value="pateikti užsakymą"/>
        </form>
      </div>

      <div>

      </div>

    </div>
    :
      
    <div style={{fontSize: "30px", paddingTop:"20px", fontFamily:"Trebuchet MS"}}>Jūsų prekių krepšelis tuščias</div>

    }
    </>
  )
}

export default LowBasket