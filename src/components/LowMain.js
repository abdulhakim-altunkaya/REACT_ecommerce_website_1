import React from 'react';
import LowCarousel from './LowCarousel';

function LowMain() {
  return (
    <div>
      <div style={{alignContent: "center", alignItems: "center"}}>
        <div style={{width: "30%", margin: "auto"}}>
          <LowCarousel />
        </div>
      </div>
      <p>some text here</p>
    </div>
  )
}

export default LowMain;