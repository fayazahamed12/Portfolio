import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero.png'; // Assuming the image is saved here
import profileImg from '../assets/Gemini_Generated_Image_pdfnkwpdfnkwpdfn.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">Fayaz Ahamed</h1>
          <h3 className="subtitle">Aspiring Full-Stack Developer</h3>
          <p className="typing-text">
            I build modern web apps using{' '}
            <span className="highlight">
              <Typewriter
                words={['React', 'Django', 'Python', 'JavaScript']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#resume" className="btn btn-outline">Download Resume</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-image-container glass-card">
            <img src={profileImg} alt="Profile" className="profile-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
