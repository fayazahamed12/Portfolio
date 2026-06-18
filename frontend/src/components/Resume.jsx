import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getResumes } from '../services/api';
import './Resume.css';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await getResumes();
        setResumes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resumes:", error);
        setLoading(false);
      }
    };
    fetchResumes();
  }, []);

  return (
    <section id="resume" className="section resume-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h2>

      <div className="resume-container">
        {loading ? (
          <p>Loading resumes...</p>
        ) : resumes.length > 0 ? (
          <div className="resume-list">
            {resumes.map(resume => (
              <motion.div 
                key={resume.id} 
                className={`resume-card glass-card ${resume.is_default ? 'default' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="resume-info">
                  <h3>{resume.title}</h3>
                  {resume.description && <p>{resume.description}</p>}
                  <span className="resume-date">
                    Added: {new Date(resume.created_at).toLocaleDateString()}
                  </span>
                </div>
                <a href={resume.file} download className="btn btn-primary download-btn">
                  <FaDownload /> Download
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="no-resumes">Resume will be uploaded soon.</p>
        )}
      </div>
    </section>
  );
};

export default Resume;
