import React from 'react'
import { useState, useEffect } from 'react';
import {db} from "../firebase";
import { uid } from 'uid';
import { set, ref } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function LowBasketForm({handleOrderStatus}) {
  const navigate = useNavigate();

  let allLocalStorage = { ...localStorage };
  let localStorageValues = Object.values(allLocalStorage);
  let basketArray1 = localStorageValues.filter(item => typeof JSON.parse(item) === "object");
  let basketArray = basketArray1.filter(item => item.length > 60 );

  {/*getting sum of the basket*/}
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
  }, [total]);



  let[fullName, setFullName] = useState("");
  let[email, setEmail] = useState("");
  let[address, setAddress] = useState("");
  let[phone, setPhone] = useState("");
  let[orderDate, setOrderDate] = useState("");

  const handleSubmit = (e) => {
    const orderMoment = JSON.stringify(new Date());
    if(basketArray.length < 1) {
      alert("Krepšelyje turi būti bent viena prekė");
    } else {
      e.preventDefault();
      setOrderDate(orderMoment);
      console.log(orderDate);
      const uuid = uid();
      set(ref(db, `/${uuid}`), {
        FullName: fullName,
        Telephone: phone,
        Email: email,
        Address: address,
        Date: orderMoment,
        Order: basketArray,
      });
      setFullName("");
      setEmail("");
      setAddress("");
      setPhone("");
      localStorage.clear();
      handleOrderStatus(uuid, basketSum, fullName, orderMoment, address, phone);
    }

  }

  return (
    <div className="container" id='lowBasketInfoContainer'>
        <h1 className="textEffect1"> Užsakymo Pateikimas </h1> 
        <ol>
          <li>Užpildykite žemiau esančią formą</li>
          <li>Spustelėkite mygtuką pateikti </li>
          <li>Perveskite sumą į banko sąskaitą per 3 dienas.Užpildę žemiau esančią užsakymo formą ir atlikę užsakymą, 
        pamatysite mūsų banko sąskaitą.</li>
          <li>Norėdami perkelti nuorodą, įveskite savo vardą</li>
        </ol>

        Patvirtinus užsakymą, prekes išsiųsime per 3 dienas. <br /><br />
        Prekės siunčiamos su Omniva. Adreso laukelyje įveskite Omniva automatą, iš kurio norite 
        pasiimti prekę. Už siuntimą reikia sumokėti 3 eurus. Galite sumokėti 3 eurus prie visos 
        aukščiau nurodytos kainos ir atlikti pavedimą. <br /><br />
        Jei turite klausimų: +37069630545 (Whatsapp/Telegram/Viber)
        <p>
          <i>International customers please click <span className="basketIntCus" onClick={() => navigate("/information")}>here</span></i>
        </p>
        <form onSubmit={handleSubmit}>      
          <input name="name" type="text" className="feedback-input" 
            placeholder="Vardas Pavardė" value={fullName} onChange={e => setFullName(e.target.value)} required/>   
          <input name="phone" type="text" className="feedback-input" 
            placeholder="Telefonas" value={phone} onChange={e => setPhone(e.target.value)} required/>
          <input name="email" type="email" className="feedback-input" 
            placeholder="El. paštas" value={email} onChange={e => setEmail(e.target.value)} 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
          <textarea name="text" className="feedback-input" 
            placeholder="Adresas" value={address} onChange={e => setAddress(e.target.value)} required> </textarea>
          <input type="submit" className='formButtonBasket' value="pateikti užsakymą"/>
        </form>
    </div>
  )
}

export default LowBasketForm;