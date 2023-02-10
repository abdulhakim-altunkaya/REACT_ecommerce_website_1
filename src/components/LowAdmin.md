import React from 'react';
import { useState, useEffect } from 'react';
import {db} from "../firebase";
import { uid } from 'uid';
import { getDatabase, ref, set, onValue} from "firebase/database";
import {db} from "../firebase";
import { useNavigate } from 'react-router-dom';

function LowAdmin() {

    let[todo, setTodo] = useState("");
    let[todos, setTodos] = useState([]);

    const getData = () => {
        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
            if(data !== null) {
                Object.values(data).map((todo) => {
                    setTodos( (oldArray) => [...oldArray, todo] );
                });
            }
        })
        console.log("button works");
        
    }



    return (
        <div>
            <button onClick={getData}>HELLO HELLO </button>
            {todos.map( (todo) => (
                <>
                    <h1>{todo.todo}</h1>
                </>
            ))}
        </div>
    )
}

export default LowAdmin;