import React from "react";
import { RiGithubFill, RiLinkedinFill, RiFacebookFill, RiInstagramFill } from '@remixicon/react';

export default function ContactPage() {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <div className="main container">
          <h1 className="title">Contact</h1>
          <div className="contact_information">
            <p>Here is information on how to contact me. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt accusantium dolorum molestiae enim. Iusto rerum cumque harum ex cum ipsam eos earum fuga repudiandae commodi. Similique dolores deserunt rerum.</p><br /><br />
            <p><span className="contact_info">Email</span> emilia.laamanen@gmail.com</p><br />
            <p><span className="contact_info">Mobile</span> 050 466 6751</p>
            <div className="contact_social">
              <a href="https://github.com/sinilaa" target="_blank" className="contact_link">
                <i><RiGithubFill /></i>
              </a>
              <a href="https://www.linkedin.com/in/sini-laamanen-23a011164" target="_blank" className="contact_link">
                <i><RiLinkedinFill /></i>
              </a>
              <a href="https://www.facebook.com/sini.laamanen/" target="_blank" className="contact_link">
                <i><RiFacebookFill /></i>
              </a>
              <a href="https://www.instagram.com/sinielaamanen/" target="_blank" className="contact_link">
                <i><RiInstagramFill className="contact_icon" /></i>
              </a>
            </div>
          </div>
          <div className="contact_form">
            <h2 className="subtitle">Send me a message!</h2><br /><br />
            <p>Contact form will be here soon...</p>
          </div>
        </div>
      </div>
    </main>
  );
}
