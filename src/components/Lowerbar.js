import React from 'react';
import { Route, Routes } from  "react-router-dom";
import LowMain from './LowMain';
import LowRanki from "./LowRanki";
import LowCosme from "./LowCosme";
import LowDrabu from "./LowDrabu";
import LowAval from "./LowAval";


function Lowerbar() {
  return (
    <div className="Lowerbar">

        <Routes>
          <Route path="/" element={ <LowMain /> } />
          <Route path="/drabuziai" element={ <LowDrabu /> } />
          <Route path="/rankineskuprines" element={ <LowRanki /> } />
          <Route path="/kosmetika" element={ <LowCosme /> } />
          <Route path="/avalyne" element={ <LowAval /> } />
        </Routes>


    </div>
  )
}

export default Lowerbar