import React from 'react';
import {useState} from 'react';

import {db} from "../firebase";
import { uid } from 'uid';
import { set, ref } from 'firebase/database';

function LowPini() {

  const [todo , setTodo] = useState("");
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
  
  return (
    <div>LowPini
        Todo: <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/> <br />
         <button onClick={addDocument}>Add</button>  
    </div>
  )
}

export default LowPini;