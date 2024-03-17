import React from "react";
import { RiGithubFill, RiLinkedinFill, RiFacebookFill, RiInstagramFill, RiMailLine } from '@remixicon/react';

// Footer component displaying social media links
export default function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_social">
          <a href="https://github.com/sinilaa" 
            target="_blank" 
            className="footer_link">
            <i><RiGithubFill /></i>
          </a>

          <a href="www.linkedin.com/in/sini-laamanen-23a011164" 
            target="_blank" 
            className="footer_link">
            <i><RiLinkedinFill /></i>
          </a>

          <a href="https://www.facebook.com/sini.laamanen/" 
            target="_blank" 
            className="footer_link">
            <i><RiFacebookFill /></i>
          </a>

          <a href="https://www.instagram.com/sinielaamanen/" 
            target="_blank" 
            className="footer_link">
            <i><RiInstagramFill /></i>
          </a>

          <a href="mailto:emilia.laamanen@gmail.com" 
            target="_blank" 
            className="footer_link">
            <i><RiMailLine /></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
