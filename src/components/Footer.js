import React from 'react'
import UpperbarTop1 from './UpperbarTop1'

function Footer() {
  return (
    <div className="mainFooter">
        <div className="footerUp">
            <div className='footerUpDiv1'>
              <UpperbarTop1 /> <br />
              <span className='footerSlogan'>traukiantis akį, nepaprastas ir unikalus</span><br /><br />
              
            </div>
            <div className='footerUpDiv2'>
              <span>&nbsp;&nbsp; Sekite mus</span> <br /> <br />
              <img className='footerIcons' src={require('../images/icons/facebook.png')}  alt="facebook icon" />
              &nbsp;&nbsp;
              <img className='footerIcons' src={require('../images/icons/instagram.png')}  alt="instagram icon" />
            </div>
            <div className='footerUpDiv2'>
              <button className='footerButton'>palikite pranešimą</button> <br /><br />
              <span>didžiuojamės iš Kauno (Kaunas/Lithuania)</span>
              
            </div>
        </div>
        <div className="footerBottom">
          <p>Website Systems: <strong>Tomato E-Commerce</strong></p> 
        </div>
    </div>
  )
}

export default Footer