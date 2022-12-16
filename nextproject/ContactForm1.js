import React from 'react';
import { useState } from 'react';

function ContactForm1() {
  let [contactFullName, setContactFullName] = useState("");
  let [contactPhone, setContactPhone] = useState();
  let [contactEmail, setContactEmail] = useState("");
  return (
    <div className='contactFormDiv'>
      <h1>CONTACT FORM</h1>
      <p>we will be happy to hear your thoughts, suggestions, questions, complaints, requests</p>
      <form className='formContact'>
        <input type="text" value={contactFullName} className="inputContact"
          onChange={e => setContactFullName(e.target.value)} placeholder="Your full name" required/>
        <input type="number" value={contactPhone}  className="inputContact"
          onChange={e => setContactPhone(e.target.value)} placeholder="Your phone" />
        <input type="text" value={contactEmail} className="textAreaContact"
          onChange={e => setContactEmail(e.target.value)} placeholder="Your email" />
        
        <textArea type="text" placeholder="Request...Complaints...Questions...Suggestions..." required></textArea>
        <input type="submit" value="Send" className='button-87'/>
      </form>
    </div>
  )
}

export default ContactForm1;