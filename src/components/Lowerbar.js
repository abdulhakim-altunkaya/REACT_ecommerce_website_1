import React from 'react';
import { Route, Routes } from  "react-router-dom";
import LowMain from './LowMain';
import LowRanki from "./LowRanki";
import LowKupri from "./LowKupri";
import LowPini from "./LowPini";
import LowInfo from "./LowInfo";
import LowItem from "./LowItem";
import LowBasket from "./LowBasket";

function Lowerbar() {
  
  return (
    <div className="Lowerbar">

        <Routes>
          <Route path="/" element={ <LowMain /> } />
          <Route path="/kuprines" element={ <LowKupri /> } />
          <Route path="/rankines" element={ <LowRanki /> } />
          <Route path="/information" element={ <LowInfo /> } />
          <Route path="/pinigines" element={ <LowPini /> } />
          <Route path="/items/:itemId" element={ <LowItem /> } />
          <Route path="/cart" element={ <LowBasket /> } />
        </Routes>


    </div>
  )
}

export default Lowerbar