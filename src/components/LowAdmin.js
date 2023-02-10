import React, { useState, useEffect } from 'react'
import {db} from "../firebase";
import { uid } from 'uid';
import { ref, onValue} from "firebase/database";


function LowAdmin() {

    const[orderArray, setOrderArray] = useState([]);

    useEffect(() => {
      onValue(ref(db), snapshot => {
        const data = snapshot.val();
        if(data !== null) {
            Object.values(data).map((order) => {
                setOrderArray((oldArray) => [...oldArray, order]);
            });
        }
        console.log(orderArray[0]);
        console.log(data);
        console.log(JSON.parse(orderArray[0]));
      });
    }, [])
    



    return (
        <div>

                <div> 
                    <span></span>
                </div>

        </div>
    )

}

export default LowAdmin;
