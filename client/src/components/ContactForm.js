import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';

// Function to handle form submission
export default function ContactForm() {
  const [emailjsConfig, setEmailjsConfig] = useState({});

  useEffect(() => {
    // Fetch EmailJS configuration from the API
    fetch(`${process.env.REACT_APP_API_URL}/api/emailjs/config`)
      .then(response => response.json())
      .then(data => {
        setEmailjsConfig(data); // Set Emailjs configuration data
      })
      .catch(error => {
        console.error('Error fetching EmailJS config:', error);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Send form data using EmailJS
    emailjs.sendForm(emailjsConfig.service_id, emailjsConfig.template_id, e.target, emailjsConfig.public_key)
      .then(() => {
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
