import React from "react";
import ContactForm from "../components/ContactForm";
import { RiGithubFill, RiLinkedinFill, RiFacebookFill, RiInstagramFill } from '@remixicon/react';

// Functional component representing the Conctact page
export default function ContactPage() {

  return (
    <main className="main_content">
      <div className="content_wrapper">
        <div className="main container">
          <h1 className="title">Contact</h1>
          <div className="contact_information">
            <p>Here is information how to contact me. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt accusantium dolorum molestiae enim. Iusto rerum cumque harum ex cum ipsam eos earum fuga repudiandae commodi. Similique dolores deserunt rerum.</p><br /><br />
            <p><span className="contact_info">Email</span> emilia.laamanen@gmail.com</p><br />
            <p><span className="contact_info">Mobile</span> 050 466 6751</p>
            
            {/* Social media links */}
            <div className="contact_social">
              <a href="https://github.com/sinilaa" 
                rel="noreferrer" target="_blank" 
                className="contact_link">
                <i><RiGithubFill /></i>
              </a>

              <a href="https://www.linkedin.com/in/sini-laamanen-23a011164" 
                rel="noreferrer" target="_blank" 
                className="contact_link">
                <i><RiLinkedinFill /></i>
              </a>

              <a href="https://www.facebook.com/sini.laamanen/" 
                rel="noreferrer" 
                target="_blank" 
                className="contact_link">
                <i><RiFacebookFill /></i>
              </a>

              <a href="https://www.instagram.com/sinielaamanen/" 
                rel="noreferrer" 
                target="_blank" 
                className="contact_link">
                <i><RiInstagramFill /></i>
              </a>
            </div>
          </div>

            <h2 className="subtitle">Send me a message!</h2>
            {/* Renders contact from the ContactForm component */}
            <ContactForm />
          </div>
      </div>
    </main>
  );
}
