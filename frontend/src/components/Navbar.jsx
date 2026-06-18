import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-card' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          FA<span>.</span>
        </a>

        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link} className="nav-item">
              <a 
                href={`#${link.toLowerCase()}`} 
                className="nav-link"
                onClick={closeMenu}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
