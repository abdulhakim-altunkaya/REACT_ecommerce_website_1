import React from 'react';
import { useNavigate } from 'react-router-dom';

function UpperbarTop1() {
  const navigate = useNavigate();
  
  return (
    <div className='heading' onClick={() => navigate("/")}>
      SPALVOTA <span style={{color: "red"}}>KUPRINĖ</span>  
    </div>
  )
}

export default UpperbarTop1;