import React from 'react';
import { useState } from 'react';
import {db} from "../firebase";
import { set, ref } from 'firebase/database';
import { uid } from 'uid';
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form";

function LowContact() {
  const {reset} = useForm();
  let [contactFullName, setContactFullName] = useState("");
  let [contactPhone, setContactPhone] = useState();
  let [contactEmail, setContactEmail] = useState("");
  let [contactMessage, setContactMessage] = useState("");
  let [displayReceived, setDisplayReceived] = useState(false);
  const navigate = useNavigate();

  const removefields = () => {
    navigate("/contact");
    setContactFullName("");
    setContactEmail("");
    setContactMessage("");
    setContactPhone("");
  }

  const handleSubmitContact = (e) => {
      e.preventDefault();
      const uuid = uid();
      let recordtitle = "contactform_"+uuid;
      set(ref(db, recordtitle), {
        FullName: contactFullName,
        Telephone: contactPhone,
        Email: contactEmail,
        Message: contactMessage,
      });
      setDisplayReceived(true);
      setTimeout(() => {
        setDisplayReceived(false);
      }, 5000);
      setTimeout(() => {
        removefields();
      }, 5000);
      
  }


  return (

    <div className='contactFormDiv'>
      { displayReceived === false ?
          <>
            <h1>CONTACT FORM</h1>
            <p>we will be happy to hear your thoughts, suggestions, questions, complaints, requests</p>
            <form className='formContact' onSubmit={handleSubmitContact} id="contactForm">
              <input type="text" value={contactFullName} className="inputContact"
                onChange={e => setContactFullName(e.target.value)} placeholder="Your full name" required/>
              <input type="number" value={contactPhone}  className="inputContact"
                onChange={e => setContactPhone(e.target.value)} placeholder="Your phone" />
              <input type="text" value={contactEmail} className="textAreaContact"
                onChange={e => setContactEmail(e.target.value)} placeholder="Your email" />
              
              <textArea type="text" value={contactMessage} onChange={e => setContactMessage(e.target.value)}
                placeholder="Request...Complaints...Questions...Suggestions..." required></textArea>
              <input type="submit" value="Send" className='button-87'/>
            </form>    
          </>
        :
        <>
          <h3>Thank you {contactFullName}, we received your message.</h3>
          <div>Message details:
            <p> <strong>Phone:</strong>  {contactPhone} </p>
            <p> <strong>Email:</strong> {contactEmail} </p>
            <p>< strong>MESSAGE:</strong> {contactMessage}</p>
          </div>
        </>

      }
    </div>
  )
}

export default LowContact;