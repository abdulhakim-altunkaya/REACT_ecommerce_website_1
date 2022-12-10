import React from 'react';
import {useState} from 'react';

import {db} from "../firebase";
import { uid } from 'uid';
import { set, ref } from 'firebase/database';

function LowPini() {

  const [todo , setTodo] = useState("");
  const [formInput, setFormInput] = useState("");
  const [formAddress, setFormAddress] = useState("");

  console.log(process.env.REACT_APP_MEASUREMENT_ID);
  
  const addDocument = (e) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo: todo,
      uuid: uuid
    });
    setTodo("");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      name: formInput,
      address: formAddress,
      uuid: uuid
    });
    setTodo("");
  }

  return (
    <>
      <div>LowPini
        Todo: <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/> <br />
         <button onClick={addDocument}>Add</button>  
      </div>

      <div> 
        <h1>FORM</h1>
        <form onSubmit={handleSubmit}>
          <label> Name: <input type="text" name="name" value={formInput} onChange={(e) => setFormInput(e.target.value)}/> </label>
          <label> Address: <input type="text" name="address" value={formAddress} onChange={(e) => setFormAddress(e.target.value)}/> </label>
          <input type="submit" value="Submit" />
        </form>
      </div>







    </>

  )
}

export default LowPini;