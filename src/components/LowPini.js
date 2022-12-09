import React from 'react';
import {useState} from 'react';

import { getDatabase, ref, set } from "firebase/database";



function LowPini() {
  const database = getDatabase();
  const [name , Setname] = useState("");
	const [age , Setage] = useState("");
	const [course , Setcourse] = useState("");
  console.log(process.env.REACT_APP_MEASUREMENT_ID);
  

  function sub(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }





  return (
    <div>LowPini

      <div>
        <center>
          <form style={{marginTop:"200px" }}
          onSubmit={(event) => {sub(event)}}>
            <input type="text" placeholder="your name"
            onChange={(e)=>{Setname(e.target.value)}} />
            <br/><br/>
            <input type="number" placeholder="your age"
            onChange={(e)=>{Setage(e.target.value)}}/>
            <br/><br/>
            <input type="text" placeholder="Course Enrolled"
            onChange={(e)=>{Setcourse(e.target.value)}}/>
            <br/><br/>
            <button type="submit">Submit</button>
          </form>
        </center>
		  </div>
      <button onClick={sub}> FIRE </button>
    </div>
  )
}

export default LowPini;