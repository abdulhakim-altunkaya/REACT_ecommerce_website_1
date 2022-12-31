import React from 'react'
import {useNavigate} from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
   
  return (
    <div className="mainFooter"> 
        <div className="footerUp">
            <div className='footerUpDiv1'>
              <div className='heading' onClick={() => navigate("/")}>
                <span className='childHeading'>SPALVOTA <span style={{color: "red"}}>KUPRINĖ</span></span>   
              </div>           
            </div>
            <div className='footerUpDiv2' id='footerIconDiv'>
              <span id='footerIconText'>&nbsp;&nbsp; Sekite mus</span>
              <span>
                <a href="https://www.facebook.com/spalvotakuprine/">
                  <img className='footerIcons' src={require('../images/icons/facebook.png')} alt="facebook icon" />
                </a>
                &nbsp;&nbsp;
                <a href="https://www.instagram.com/spalvota.kuprine/">
                  <img className='footerIcons' src={require('../images/icons/instagram.png')}  alt="instagram icon" />
                </a>
              </span>
            </div>
            <div className='footerUpDiv2'>
              <button className='footerButton' onClick={() => navigate("/contact") }>palikite pranešimą</button> <br /><br />
              <span id='footerTextSmall'>didžiuojamės iš Kauno (Kaunas/Lithuania)</span>
            </div>
        </div>
        <div className="footerBottom">
          <p> 
            <span className='webmasterDiv' onClick={() => navigate("/website")}> Website Systems: <strong>Tomato E-Commerce</strong></span>
          </p> 
        </div>
    </div>
  )
}

export default Footer