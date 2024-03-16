import React from 'react'
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_gq17svb";
const TEMPLATE_ID = "template_umsh6d3";
const PUBLIC_KEY = "Mf0yPvI0gJ-z-Rik6";

export default function ContactForm () {
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result) => {
          alert('Message Sent Successfully')
        }, (error) => {
          console.log(error.text);
          alert('Something went wrong!')
        });
      e.target.reset()
    };
    
    return (
        <div className="contact_form">
            <form className="form_container" onSubmit={handleOnSubmit}>
                <div className="form_element">
                    <label for="from_name">Name</label>
                    <input type="text" id="from_name" name="from_name" placeholder="Your name.." required />
                </div>

                <div className="form_element">
                    <label>E-mail</label>
                    <input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
                </div>

                <div className="form_element">
                    <label for="message">Message</label>
                    <textarea name="message" rows="8" cols="30" placeholder="Write your message.." required />
                </div>
                <button type='submit' className='form_btn'>Send</button>
            </form>
        </div>
    )
}