import React from "react";
import { RiGithubFill, RiLinkedinFill, RiFacebookFill, RiInstagramFill, RiMailLine } from '@remixicon/react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_social">
          <a href="https://github.com/sinilaa" target="_blank" className="footer_icon">
            <RiGithubFill />
          </a>
          <a href="www.linkedin.com/in/sini-laamanen-23a011164" target="_blank" className="footer_icon">
            <RiLinkedinFill />
          </a>
          <a href="https://www.facebook.com/sini.laamanen/" target="_blank" className="footer_icon">
            <RiFacebookFill />
          </a>
          <a href="https://www.instagram.com/sinielaamanen/" target="_blank" className="footer_icon">
            <RiInstagramFill />
          </a>
          <a href="mailto:emilia.laamanen@gmail.com" target="_blank" className="footer_icon">
            <RiMailLine />
          </a>
        </div>
      </div>
    </footer>
  );
}
