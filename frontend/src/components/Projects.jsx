import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '../services/api';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Extract unique technologies for filters
  const allTechnologies = projects.reduce((acc, project) => {
    if (project.technologies) {
      const techs = project.technologies.split(',').map(t => t.trim());
      techs.forEach(t => {
        if (!acc.includes(t)) acc.push(t);
      });
    }
    return acc;
  }, ['All']);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.technologies && p.technologies.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="section projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <div className="filter-container">
        {allTechnologies.map(tech => (
          <button 
            key={tech} 
            className={`filter-btn ${filter === tech ? 'active' : ''}`}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="skeleton-container">
          {[1, 2, 3].map(i => (
            <div key={i} className="skeleton-card glass-card"></div>
          ))}
        </div>
      ) : (
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id} 
              className="project-card glass-card"
              whileHover={{ y: -10 }}
            >
              <div className="project-image-container">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                  <div className="project-image-placeholder">No Image</div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    {project.live_link && (
                      <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FaExternalLinkAlt /> Live
                      </a>
                    )}
                    {project.github_link && (
                      <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FaGithub /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-techs">
                  {project.technologies && project.technologies.split(',').map((tech, i) => (
                    <span key={i} className="tech-badge">{tech.trim()}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
