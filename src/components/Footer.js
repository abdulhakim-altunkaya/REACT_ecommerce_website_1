import React from 'react'
import UpperbarTop1 from './UpperbarTop1';
import {useNavigate} from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
   
  return (
    <div className="mainFooter">
        <div className="footerUp">
            <div className='footerUpDiv1'>
              <UpperbarTop1 /> <br />
              <span className='footerSlogan'>traukiantis akį, nepaprastas ir unikalus</span><br /><br />
              
            </div>
            <div className='footerUpDiv2'>
              <span>&nbsp;&nbsp; Sekite mus</span> <br /> <br />
              <a href="https://www.facebook.com/spalvotakuprine/">
                <img className='footerIcons' src={require('../images/icons/facebook.png')} alt="facebook icon" />
              </a>
              
              &nbsp;&nbsp;
              <a href="https://www.instagram.com/spalvota.kuprine/">
                <img className='footerIcons' src={require('../images/icons/instagram.png')}  alt="instagram icon" />
              </a>
              
            </div>
            <div className='footerUpDiv2'>
              <button className='footerButton' onClick={() => navigate("/contact") }>palikite pranešimą</button> <br /><br />
              <span>didžiuojamės iš Kauno (Kaunas/Lithuania)</span>
              
            </div>
        </div>
        <div className="footerBottom">
          <p> 
            <span className='webmasterDiv'> Website Systems: <strong>Tomato E-Commerce</strong></span>
          </p> 
        </div>
    </div>
  )
}

export default Footer