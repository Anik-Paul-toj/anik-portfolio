import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './styles/Projects.css';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Trade Yogi',
      description: 'Trade Yogi is an intuitive app providing stock prices, investment company insights, and ML-driven profit/loss predictions, empowering users to make informed financial decisions effortlessly.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['JavaScript', 'Python', 'PowerBI', 'Machine Learning'],
      github: 'https://github.com/Anik-Paul-toj/trade-yogi',
      live: 'https://trade-yogi-demo.vercel.app'
    },
    {
      id: 2,
      title: 'Coal Mine LCA Software',
      description: 'The Coal Mine LCA software evaluates environmental impacts of mining operations, integrating user and sensor data to provide comprehensive life cycle assessments for sustainability insights.',
      image: require('../assets/coal.png'),
      category: 'web',
      technologies: ['HTML', 'MongoDB', 'JavaScript'],
      github: 'https://github.com/Anik-Paul-toj/CoalMIne-SIH1644',
      live: 'https://aniket123de.github.io/SIH1644/'
    },
    {
      id: 3,
      title: 'Lok Seva',
      description: 'Lok Seva is a web application designed to streamline the process of applying for various government services, making it easier for citizens to access essential services and information.',
      image: require('../assets/lokseva.png'),
      category: 'web',
      technologies: ['Supabase', 'JavaScript', 'React'],
      github: 'https://github.com/Anik-Paul-toj/LokSeva',
      live: 'https://lok-seva.vercel.app/'
    },
    {
      id: 4,
      title: 'Kavach',
      description: 'Kavach is a Chrome extension designed to identify and block online trackers, providing enhanced cybersecurity protection while ensuring users maintain privacy and security online.',
      image: require('../assets/kavach.png'),
      category: 'web',
      technologies: ['JavaScript', 'Chrome Extension API', 'CSS'],
      github: 'https://github.com/Anik-Paul-toj/KAVACH_HACKOLUTION',
      live: 'https://kavach-landing.vercel.app/'
    },
    {
      id: 5,
      title: 'Rangmanch',
      description: 'Rangmanch is a comprehensive collaboration platform that connects content creators with brands, acting as a digital marketplace that facilitates partnerships and brand collaborations.',
      image: require('../assets/rangmanch.png'),
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/aniket123de/Rangmanch',
      live: 'https://rangmanch.vercel.app/'
    },
    {
      id: 6,
      title: 'Nazaakat',
      description: 'Nazaakat is an elegant e-commerce platform featuring a curated collection of products with a focus on beautiful design and seamless user experience for online shopping.',
      image: require('../assets/nazaakat.png'),
      category: 'fullstack',
      technologies: ['React', 'Next.js', 'E-commerce'],
      github: 'https://github.com/Anik-Paul-toj/nazaakat-main',
      live: 'https://mynazaakat.vercel.app/'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">MY WORK</p>
          <h2>Projects.</h2>
          <p className="section-description">
            Following projects showcases my skills and experience through real-world examples of 
            my work. Each project is briefly described with links to code repositories and live demos in 
            it. It reflects my ability to solve complex problems, work with different technologies, and 
            manage projects effectively.
          </p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                onHoverStart={() => setHoveredCard(project.id)}
                onHoverEnd={() => setHoveredCard(null)}
                layout
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="project-image">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div 
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="project-links"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredCard === project.id ? 0 : 20, 
                        opacity: hoveredCard === project.id ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-icon"
                        title="View Code"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360,
                          transition: { duration: 0.4 }
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {React.createElement(FaGithub as any)}
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-icon"
                        title="Live Demo"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: -360,
                          transition: { duration: 0.4 }
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {React.createElement(FaExternalLinkAlt as any)}
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="project-content"
                  animate={{
                    y: hoveredCard === project.id ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3
                    whileHover={{ 
                      scale: 1.05,
                      color: "#60a5fa",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={tech} 
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: index * 0.1 + techIndex * 0.05,
                          type: "spring",
                          stiffness: 500
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "#60a5fa",
                          color: "#0f172a",
                          transition: { duration: 0.2 }
                        }}
                      >
                        #{tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="view-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/anik-paul-toj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            {React.createElement(FaGithub as any)} View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;