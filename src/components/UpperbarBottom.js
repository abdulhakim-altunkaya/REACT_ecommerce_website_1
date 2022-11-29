import React from 'react';
import { useNavigate } from 'react-router-dom';


function UpperbarBottom() {
  const navigate = useNavigate();

  return (
    <div className='UpperbarBottom'>

        <span onClick={ () => navigate("/rankineskuprines") } >RANKINĖS IR KUPRINĖS</span>
        <span onClick={ () => navigate("/drabuziai") }>DRABUŽIAI</span>
        <span onClick={ () => navigate("/avalyne") }>AVALYNĖ</span>
        <span onClick={ () => navigate("/kosmetika") }>KOSMETIKA</span>

    </div>
  )
}

export default UpperbarBottom;