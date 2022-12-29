import React from 'react';
import { Route, Routes } from  "react-router-dom";
import LowMain from './LowMain';
import LowRanki from "./LowRanki";
import LowKupri from "./LowKupri";
import LowPini from "./LowPini";
import LowInfo from "./LowInfo";
import LowItemKupri from "./LowItemKupri";
import LowBasket from "./LowBasket";
import LowContact from "./LowContact";
import LowItemRanki from "./LowItemRanki";
import LowItemPini from './LowItemPini';
import LowTest from './LowTest';
import LowWebsite from "./LowWebsite";

function Lowerbar() {
  
  return (
    <div className="Lowerbar">

        <Routes>
          <Route path="/" element={ <LowMain /> } />
          <Route path="/kuprines" element={ <LowKupri /> } />
          <Route path="/rankines" element={ <LowRanki /> } />
          <Route path="/information" element={ <LowInfo /> } />
          <Route path="/pinigines" element={ <LowPini /> } />
          <Route path="/items/kuprines/:itemId" element={ <LowItemKupri /> } />
          <Route path="/items/rankines/:itemId" element={ <LowItemRanki /> } />
          <Route path="/items/pinigines/:itemId" element={ <LowItemPini /> } />
          <Route path="/cart" element={ <LowBasket /> } />
          <Route path="/contact" element={ <LowContact /> } />
          <Route path="/test" element={ <LowTest /> } />
          <Route path="/website" element={ <LowWebsite /> } />
        </Routes>


    </div>
  )
}

export default Lowerbar