import React, { useState } from 'react'
import {db} from "../firebase";
import { ref, onValue} from "firebase/database";



function LowAdmin() {

    const[orderArray, setOrderArray] = useState([]);
   


    const handleClick = async () => {
        //If not this if statement, each button click will add the same results under the existing ones
        if(orderArray.length > 0) {
            setOrderArray([]);
        }
        onValue(ref(db), snapshot => {
            let data = snapshot.val();
            Object.values(data).map( (order) => {
                setOrderArray( (oldArray) => [...oldArray, order] );
            } );
        });



    }

    return (
        <div>
            
            <button onClick={handleClick} className="detailButton">DISPLAY ORDERS</button>


            <div>
                {/*If you have an object array and want to display it in React.js, then you need to use map.
                Object array: [{}, {}, ....] */}
                {orderArray.map((order, index) => (
                    <div key={index} className="adminOrderMain">
                        <div className='adminOrders'>
                            <span><strong>Name: </strong> {order.FullName}</span>
                            <span><strong>Address: </strong>  {order.Address}</span>
                            <span><strong>E-mail: </strong>  {order.Email}</span>
                            <span><strong>Telephone: </strong>  {order.Telephone}</span>
                            <span><strong>Date: </strong>  {order.Date.slice(1,11)}</span>  
                        </div>
                        <div className='adminOrders'>
                            <span>{JSON.parse(JSON.stringify(order.Order)).map( (item, index) => (
                                <ul key={index} style={{"marginTop": 0}}> 
                                    <li>
                                        <strong>Item: </strong> {JSON.parse(item).title}, <br />
                                        <strong>Price: </strong> {JSON.parse(item).price}, <br />
                                        <strong>Unit: </strong> {JSON.parse(item).unit}, <br />
                                        <strong>Item ID: </strong> {JSON.parse(item).number}, <br />
                                    
                                    </li> 
                                </ul>
                            ))}</span>



                        </div>
                    </div>
                ))}
                
            </div>

        </div>
    )

}

export default LowAdmin;
