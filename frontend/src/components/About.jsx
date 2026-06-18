import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="about-content">
        <motion.div 
          className="about-text glass-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Professional Summary</h3>
          <p>
            As a highly motivated fresher, I am passionate about building modern, scalable, and user-friendly web applications. 
            I specialize in the React ecosystem for the frontend and Django for the backend, creating seamless full-stack experiences.
          </p>
          <p>
            My goal is to leverage my skills to solve real-world problems and contribute to innovative projects while continuously 
            learning and growing as a developer.
          </p>
        </motion.div>

        <motion.div 
          className="about-timeline"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="timeline-item glass-card">
            <h4>Education</h4>
            <h5>Bachelor's Degree in Computer Science</h5>
            <p className="timeline-date">Class of 2025</p>
            <p><strong>CGPA:</strong> 7.0</p>
            <p>Focused on software engineering, web technologies, and algorithms.</p>
          </div>
          <div className="timeline-item glass-card">
            <h4>Certifications</h4>
            <h5>Python Fullstack Development</h5>
            <p>Comprehensive training in building dynamic web applications using Python, Django, and modern frontend technologies.</p>
          </div>
          <div className="timeline-item glass-card">
            <h4>Career Objective</h4>
            <p>
              To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
