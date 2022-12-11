import React from 'react'
import { useState, useEffect } from 'react';
import {db} from "../firebase";
import { uid } from 'uid';
import { set, ref } from 'firebase/database';

function LowBasketForm() {

  let allLocalStorage = { ...localStorage };
  let localStorageValues = Object.values(allLocalStorage);
  let basketArray1 = localStorageValues.filter(item => typeof JSON.parse(item) === "object");
  let basketArray = basketArray1.filter(item => item.length > 60 );

  let[fullName, setFullName] = useState("");
  let[email, setEmail] = useState("");
  let[address, setAddress] = useState("");
  let[phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      FullName: fullName,
      Telephone: phone,
      Email: email,
      Address: address,
      Order: basketArray
    });
    setFullName("");
    setEmail("");
    setAddress("");
    setPhone("");
  }

  return (
    <div className="container">
        <h1 className="textEffect1"> Užsakymo Pateikimas </h1>
        1) Užpildykite žemiau esančią formą <br />
        2) Spustelėkite mygtuką pateikti <br />
        3) Perveskite suma į šią banko sąskaitą per 3 dienas. <br />
        4) Norėdami perkelti nuorodą, įveskite savo vardą <br />
            <br /><br />
        Patvirtinus užsakymą, prekes išsiųsime per 3 dienas. Siuntos detales išsiųsime Jūsų el.pašto adresu.
        <form onSubmit={handleSubmit}>      
          <input name="name" type="text" className="feedback-input" 
            placeholder="Vardas Pavardė" value={fullName} onChange={e => setFullName(e.target.value)} />   
          <input name="phone" type="text" className="feedback-input" 
            placeholder="Telefonas" value={phone} onChange={e => setPhone(e.target.value)}/>
          <input name="email" type="text" className="feedback-input" 
            placeholder="El. paštas" value={email} onChange={e => setEmail(e.target.value)}/>
          <textarea name="text" className="feedback-input" 
            placeholder="Adresas" value={address} onChange={e => setAddress(e.target.value)}> </textarea>
          <input type="submit" className='formButtonBasket' value="pateikti užsakymą"/>
        </form>
    </div>
  )
}

export default LowBasketForm;