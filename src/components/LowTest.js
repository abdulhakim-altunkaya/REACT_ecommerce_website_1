import React from 'react'

function LowTest() {

    const selectSlide = () => {
      
    }     

  return (
    <div>

      <div className="aboutDiv">
            
        <div className='slideArea'>
            <div className='selectedSlide'>

            </div>
            <div className='slideRow'>
                <div className='slideElement' onClick={selectSlide}>erergergerg</div>
                <div className='slideElement' onClick={selectSlide}>gergergerge ergerg ergeg erge rg</div>
                <div className='slideElement' onClick={selectSlide}>rge ergerg ergeg ergrge ergerg ergeg ergrge ergerg ergeg erg</div>
                <div className='slideElement' onClick={selectSlide}>rge ergerg ergeg ergr ergerg ergeg ergrge ergerg ergeg erg</div>
                <div className='slideElement' onClick={selectSlide}>rge ergerg ergeg ergrrgeg ergrge ergerg ergeg erg</div>
            </div>
        </div>
        

      </div>


    </div>
  )
}

export default LowTest;