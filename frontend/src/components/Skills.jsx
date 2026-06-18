import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaDatabase, FaFileExcel, FaChartBar 
} from 'react-icons/fa';
import { SiDjango, SiJavascript } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import './Skills.css';

const skills = [
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'Django', icon: <SiDjango color="#092E20" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
  { name: 'SQL', icon: <FaDatabase color="#336791" /> },
  { name: 'Excel', icon: <FaFileExcel color="#217346" /> },
  { name: 'Power BI', icon: <FaChartBar color="#F2C811" /> },
  { name: 'GitHub', icon: <FaGithub color="#ffffff" /> },
  { name: 'REST APIs', icon: <TbApi color="#ff3333" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} className="skill-card glass-card" variants={itemVariants}>
            <div className="skill-icon">
              {skill.icon}
            </div>
            <p className="skill-name">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
