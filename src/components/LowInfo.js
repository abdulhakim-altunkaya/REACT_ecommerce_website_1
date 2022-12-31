import React from 'react'

function LowInfo() {
  let i = "n"
  return (
    <div>

      <div className="aboutDiv">
        <h2>Grąžinimo tvarka</h2>
        <p>
          <li>1. Prekė turi būti nepraradusi prekinės išvaizdos (nepažeistos etiketės, nenuplėštos apsauginės plėvelės ir kt.)</li>
          <li>2. Grąžinama prekė turi būti originalioje tvarkingoje pakuotėje</li>
          <li>3. Jeigu prekė yra nenešiota, ją galite grąžinti per 14 darbo dienų nuo siuntos gavimo.</li>
        </p>
        <h4>Pinigų grąžinimo procedūra</h4>
        <p > Jei jūsų grąžinamos prekės pristatomos kurjerio pagalba, mūsų darbuotojai įvertina, ar gaminiai grąžinti 
          laikantis aukščiau nurodytų sąlygų. Jei sąlygų buvo nesilaikoma, pinigai grąžinami nebus. Jei sąlygų buvo laikomasi, 
          pinigai bus pervesti į jūsų banko sąskaitą ne vėliau kaip per 7 d. d. nuo grąžinamos prekės gavimo.</p>
        <p id={`kiki${i}`}>Nusipirkę netinkamos kokybės prekę, jūs turite teisę grąžinti tokią prekę mums. Tokiu atveju netinkamos kokybės 
          prekė nemokamai pakeičiama į kokybišką prekę arba Jums grąžinami sumokėti pinigai Taisyklėse nustatyta tvarka.</p>

        <h4>International Orders</h4>
        <p>International shipping: If you are not living in Lithuania but in another EU/EEA country, please 
          add 10 euros to the total price and make the transfer to the bank account below. 
          Items will be shipped within 3 work days. Please bear in mind that you are responsible for your country's customs regulations</p>
        <p> <strong>Bank Name:</strong> SWEDBANK <br />
        <strong>Name-Surname:</strong> BIRUTĖ SUTKUVIENĖ <br />
        <strong>Account:</strong> LT587300010105919132</p>
       

      </div>


    </div>
  )
}

export default LowInfo;