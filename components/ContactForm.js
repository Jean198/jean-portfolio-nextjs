import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'





const Result=() =>{
  return(
    <p>Your message has been sent!</p>
  )
}
export default function ContactForm() {
  const form = useRef();
  const [result,showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ltnkgvq', 'template_0e94xlb', e.target, 'user_GBUEyhAQRF7JzkQnGEXDQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };

    setTimeout(() => {

    showResult(false);
    
  }, 5000);



  

  return (
<div className="form-container">
  <hr className="horizontal-line"/>
<div className="projects-title">
        <h3>Contact Me</h3>
      </div>
        
        < form action="" className="form" method="POST" onSubmit={sendEmail}>
        
            < label htmlFor='name'>Name</label><br />
            < input type='text' name='name' placeholder="Your name" className="input" required/>  <br /><br />
        
        
            < label htmlFor='email'>Email</label><br />
            < input type='email' name='email' placeholder="Your email" className="input" required/> <br /> <br />
        
        
            < label htmlFor='message'>Message</label> <br />

            <textarea name="message" id=""  rows="10" className="message" required></textarea> <br />
        
        < input type='submit' value="Send" className="submit" />
      <div className="row">{result ? <Result /> : null}</div>
    </form >
</div>

  )

  
}
