import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-card">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/fayazahamed12" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/fayazahamed7/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:fayazahamed.dev@gmail.com" className="footer-icon">
            <FaEnvelope />
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Fayaz Ahamed. All rights reserved.
        </p>
        <p className="built-with">
          Built with <span className="highlight">React</span> & <span className="highlight">Django</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
