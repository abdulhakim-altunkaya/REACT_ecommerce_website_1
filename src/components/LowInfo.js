import React from 'react'

function LowInfo() {
  let i = "n"
  return (
    <div>

      <div className="aboutDiv">
        <h2>Grąžinimo tvarka</h2>
        <p>
          <ol>
            <li>Prekė turi būti nepraradusi prekinės išvaizdos (nepažeistos etiketės, nenuplėštos apsauginės plėvelės ir kt.)</li>
            <li>Grąžinama prekė turi būti originalioje tvarkingoje pakuotėje</li>
            <li>Jeigu prekė yra nenešiota, ją galite grąžinti per 14 darbo dienų nuo siuntos gavimo.</li>
          </ol>
        </p>
        <h4>Pinigų grąžinimo procedūra</h4>
        <p > Jei jūsų grąžinamos prekės pristatomos kurjerio pagalba, mūsų darbuotojai įvertina, ar gaminiai grąžinti 
          laikantis aukščiau nurodytų sąlygų. Jei sąlygų buvo nesilaikoma, pinigai grąžinami nebus. Jei sąlygų buvo laikomasi, 
          pinigai bus pervesti į jūsų banko sąskaitą ne vėliau kaip per 7 d. d. nuo grąžinamos prekės gavimo.</p>
        <p >Nusipirkę netinkamos kokybės prekę, jūs turite teisę grąžinti tokią prekę mums. Tokiu atveju netinkamos kokybės 
          prekė nemokamai pakeičiama į kokybišką prekę arba Jums grąžinami sumokėti pinigai Taisyklėse nustatyta tvarka.</p>
        <h4>Asmeninės informacijos politika</h4>
        <p>Mes gerbiame privatumo ir asmeninės informacijos apsaugos taisykles. Todėl 
          visa jūsų asmeninė informacija bus ištrinta iš mūsų sistemų po 90 dienų, kai išsiųsime jūsų užsakymą.</p>
        <h4 id={`kiki${i}`}>International Orders</h4>
        <div className='intShippingArea'>If you are not living in Lithuania but in another EU/EEA country, you do not need to pay "Omniva Price" which
          is 3 Euros. You will need to pay 10 Euros international shipping price. Steps to follow:
          <ol>
          <li>Create your basket</li> 
          <li>Go to basket page, and fill out order form, add your name, address and phone number.</li> 
          <li>Click on green button ("pateikti uzsakyma").</li> 
          <li>You will see a success page, there you will see our account. Save the account information. Also save your order number.</li> 
          <li>Send order amount + 10 Euros international shipping price to that account.</li> 
          <li>Enter your name or order number as bank transfer note.</li> 
          <li>We will send you a whatsapp message or email confirming your order and payment.</li>  
          <li>Later, we will also send you a picture of your package with shipping number when we give your items to post office.</li>  
          </ol>
          Items will be shipped within 3 work days. Please bear in mind that you are responsible for your country's customs regulations.</div>
          <br />
          For any questions (Whatsapp/telegram/viber): +37069630545
          <h4>Personal Information Policy</h4>
          <p>We respect privacy and personal information protection rules. Therefore, 
            All your personal information will be deleted from our systems after 90 days we sent your order.</p>
       

      </div>


    </div>
  )
}

export default LowInfo;