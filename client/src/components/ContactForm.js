import React from 'react';
import emailjs from 'emailjs-com';

// EmailJS configuration constants
const SERVICE_ID = "service_gq17svb";
const TEMPLATE_ID = "template_umsh6d3";
const PUBLIC_KEY = "Mf0yPvI0gJ-z-Rik6";

// Function to handle form submission
export default function ContactForm() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Send form data using EmailJS
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert('Message Sent Successfully'); // When message is sent successfully show success message
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!'); // When message was not sent successfully show error message
      });
    e.target.reset(); // Reset contact form after submission
  };
    
  /* Render contact form */
  return (
    <div className="contact_form">
      <form className="form_container" onSubmit={handleOnSubmit}>
        <div className="form_element">
          <label htmlFor="from_name">Name</label>
          <input type="text" 
            id="from_name" 
            name="from_name" 
            placeholder="Your name.." required />
        </div>

        <div className="form_element">
          <label htmlFor="from_email">E-mail</label>
          <input type="email" 
            id="from_email" 
            name="from_email" 
            placeholder="Your email.." required />
        </div>

        <div className="form_element">
          <label htmlFor="message">Message</label>
          <textarea name="message" 
            rows="8" 
            cols="30" 
            placeholder="Write your message.." required />
        </div>
        
        <button type='submit' className='form_btn'>Send</button>
      </form>
    </div>
  );
}
