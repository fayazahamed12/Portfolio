import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { submitContact } from '../services/api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-container">
        <motion.div 
          className="contact-info glass-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Let's talk about everything!</h3>
          <p>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="contact-details" style={{ marginTop: '2rem' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-color)', fontSize: '1.1rem' }}>
              <FaEnvelope color="var(--accent-color)" size={20} /> 
              <a href="mailto:fayazahamed.dev@gmail.com">fayazahamed.dev@gmail.com</a>
            </p>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form glass-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required 
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Message" 
              rows="5" 
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && <p className="form-msg success">Message sent successfully!</p>}
          {status === 'error' && <p className="form-msg error">Failed to send message. Please try again.</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
