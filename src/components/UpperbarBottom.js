import React from 'react';
import { useNavigate } from 'react-router-dom';


function UpperbarBottom() {
  const navigate = useNavigate();

  return (
    <div className='UpperbarBottom'>

        <span onClick={ () => navigate("/rankines") } >RANKINĖS</span>
        <span onClick={ () => navigate("/kuprines") }>KUPRINĖS</span>
        <span onClick={ () => navigate("/pinigines") }>PINIGINĖS</span>
        <span onClick={ () => navigate("/information") }>NAUDINGA INFORMACIJA</span>

    </div>
  )
}

export default UpperbarBottom;