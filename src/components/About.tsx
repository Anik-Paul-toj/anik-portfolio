import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaMapMarkerAlt } from 'react-icons/fa';
import './styles/About.css';

const TECH_ICON_MAP: Record<string, string> = {
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
};

const TECHNOLOGIES = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'React Native',
  'Firebase',
  'Supabase',
  'Flask',
  'MongoDB',
  'MySQL',
  'Postman',
];

const About: React.FC = () => {
  const technologies = TECHNOLOGIES;
  const loadingTech = false;
  const errorTech = null;

  const experiences = [
    {
      title: 'Secondary',
      company: 'Habra Hish School',
      period: 'Jan 2009 - June 2019',
      description: 'Successfully completed 10 years of schooling with a strong academic record and active participation in school activities.',
      achievements: [
        'Honored with multiple accolades for academic and extracurricular achievements during schooling.',
        'Received the Governor\'s Award for exceptional performance in Class VII.',
        'Consistently maintained excellent academic performance, achieving 90.1% in Class 10 Board Examinations.'
      ]
    },
    {
      title: 'Higher Secondary',
      company: 'Habra Hish School',
      period: 'Aug 2019- Feb 2021',
      description: 'Completed higher secondary education with focus on Science stream.',
      achievements: [
        'Specialized in Computer Science and Mathematics.',
        'Achieved outstanding results in board examinations.',
        'Participated in various coding competitions and science fairs.'
      ]
    },
    {
      title: 'Computer Science Engineering',
      company: 'B P Poddar Institute of Management and Technology',
      period: '2023 - Present',
      description: 'Currently pursuing BTech with specialization in software development and programming.',
      achievements: [
        'Maintaining excellent academic performance.',
        'Active participant in coding clubs and tech events.',
        'Working on various software development projects.'
      ]
    }
  ];

  return (
    <section id="about" className="about" style={{ 
      minHeight: '90vh', /* Reduced from 100vh */
      width: '100%',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '1.5rem 0 0.5rem 0', /* Reduced top padding, minimized bottom padding */
      margin: 0,
      position: 'relative',
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(15, 23, 42, 1) 100%)',
      overflow: 'hidden'
    }}>
      {/* Subtle animated background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(95, 95, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)
        `,
        animation: 'pulse 8s ease-in-out infinite alternate',
        zIndex: 1
      }} />
      
      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(95, 95, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(95, 95, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        zIndex: 1
      }} />

      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 10 }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }} /* Reduced margin */
        >
          <h2 style={{ fontSize: '2.2rem', marginBottom: '0.3rem' }}>About Me</h2>
          <p style={{ fontSize: '1rem' }}>Get to know me better</p>
        </motion.div>

        <div className="about-content" style={{ 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0',
          margin: 0,
          padding: 0
        }}>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>Who I Am</h3>
            
            {/* Location information */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '1rem',
              color: '#00bcd4',
              fontSize: '0.95rem'
            }}>
              {React.createElement(FaMapMarkerAlt as any, { style: { marginRight: '0.5rem' } })}
              <span>Kolkata, West Bengal, India</span>
            </div>
            
            <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '0.8rem' }}>
              I'm a passionate Full Stack Developer with over 5 years of experience 
              creating digital solutions that make a difference. I love turning complex 
              problems into simple, beautiful, and intuitive designs.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '0.8rem' }}>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and staying 
              up-to-date with the latest industry trends.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '0.8rem' }}>
              My approach combines technical expertise with creative problem-solving, 
              ensuring that every project I work on is not only functional but also 
              delivers an exceptional user experience.
            </p>
            
            <div className="about-stats" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1.2rem',
              margin: '1.2rem 0' /* Reduced from 2rem */
            }}>
              <div className="stat" style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.8rem', margin: '0 0 0.2rem 0', color: '#00bcd4' }}>5+</h4>
                <p style={{ fontSize: '0.8rem', margin: 0 }}>Years Experience</p>
              </div>
              <div className="stat" style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.8rem', margin: '0 0 0.2rem 0', color: '#00bcd4' }}>50+</h4>
                <p style={{ fontSize: '0.8rem', margin: 0 }}>Projects Completed</p>
              </div>
              <div className="stat" style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.8rem', margin: '0 0 0.2rem 0', color: '#00bcd4' }}>20+</h4>
                <p style={{ fontSize: '0.8rem', margin: 0 }}>Happy Clients</p>
              </div>
            </div>

            <a href="/resume.pdf" className="btn btn-primary" download style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #5f5fff 0%, #00bcd4 100%)',
              color: '#fff',
              padding: '0.6rem 1.2rem', /* Smaller padding */
              borderRadius: '0.5rem',
              fontSize: '0.9rem', /* Smaller font */
              fontWeight: '600',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}>
              {React.createElement(FaDownload as any)} Download Resume
            </a>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          >
            <div className="experience-section">
              <h3 style={{textAlign: 'center', marginBottom: 0, letterSpacing: 1, color: '#b3b3ff', fontSize: '0.8rem'}}>WHAT I HAVE DONE SO FAR</h3>
              <h2 style={{textAlign: 'center', fontWeight: 700, fontSize: '1.8rem', margin: '0 0 1.5rem 0', color: '#fff', textShadow: '0 4px 32px #000'}}>Scholastic Record</h2>
              <div className="timeline" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
                {/* Single Vertical line */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  bottom: 0,
                  width: '2px', /* Thinner line */
                  background: '#5f5fff',
                  transform: 'translateX(-50%)',
                  zIndex: 1
                }}></div>
                
                {experiences.map((exp, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      className="timeline-item"
                      initial={{ 
                        opacity: 0, 
                        x: isLeft ? -200 : 200,
                        scale: 0.8
                      }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0,
                        scale: 1
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.1 + index * 0.3,
                        type: "spring",
                        damping: 15,
                        stiffness: 100
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      style={{
                        display: 'flex',
                        justifyContent: isLeft ? 'flex-start' : 'flex-end',
                        alignItems: 'center',
                        marginBottom: '2rem', /* Reduced from 4rem */
                        position: 'relative',
                        width: '100%',
                        cursor: 'pointer'
                      }}
                    >
                      {/* Timeline dot centered on the line */}
                      <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '30px', /* Reduced from 50px */
                        height: '30px', /* Reduced from 50px */
                        borderRadius: '50%',
                        background: '#fff',
                        border: '2px solid #5f5fff', /* Reduced from 3px */
                        zIndex: 3,
                        boxShadow: '0 0 15px rgba(95,95,255,0.5)', /* Reduced shadow */
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                      </div>
                      <motion.div 
                        className="timeline-content"
                        whileHover={{
                          boxShadow: '0 20px 50px rgba(95,95,255,0.3)',
                          borderColor: '#5f5fff',
                          transition: { duration: 0.3 }
                        }}
                        style={{
                          width: '43%', /* Slightly narrower */
                          background: 'rgba(24,27,43,0.95)',
                          padding: '1.5rem', /* Reduced from 2.5rem */
                          borderRadius: '1rem', /* Reduced from 1.5rem */
                          border: '1px solid #5f5fff22',
                          boxShadow: '0 8px 25px rgba(95,95,255,0.15)', /* Reduced shadow */
                          backdropFilter: 'blur(15px)',
                          textAlign: isLeft ? 'right' : 'left',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        {/* Animated background gradient */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, rgba(95,95,255,0.1) 0%, rgba(0,188,212,0.1) 100%)',
                            borderRadius: '1.5rem',
                            zIndex: 0
                          }}
                        />
                        
                        <div style={{ position: 'relative', zIndex: 1 }}>
                          <motion.h4 
                            whileHover={{ color: '#00ffff' }}
                            style={{ color: '#00bcd4', marginBottom: '0.3rem', fontSize: '1.1rem', fontWeight: '700' }}
                          >
                            {exp.title}
                          </motion.h4>
                          <motion.h5 
                            whileHover={{ color: '#8f8fff' }}
                            style={{ color: '#5f5fff', marginBottom: '0.6rem', fontSize: '0.9rem' }}
                          >
                            {exp.company}
                          </motion.h5>
                          <motion.span 
                            className="period"
                            whileHover={{ scale: 1.05 }}
                            style={{ 
                              background: 'rgba(95,95,255,0.3)', 
                              padding: '0.3rem 0.8rem', 
                              borderRadius: '1.5rem',
                              fontSize: '0.75rem',
                              color: '#e0e0ff',
                              display: 'inline-block',
                              fontWeight: '500'
                            }}
                          >
                            {exp.period}
                          </motion.span>
                          <p style={{ marginTop: '0.8rem', color: '#ddd', lineHeight: '1.4', fontSize: '0.85rem', marginBottom: '0.6rem' }}>
                            {exp.description}
                          </p>
                          {exp.achievements && (
                            <ul style={{ color: '#ccc', lineHeight: '1.3', paddingLeft: isLeft ? '0' : '0', paddingRight: isLeft ? '0' : '0', listStyle: 'none', margin: 0 }}>
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} style={{ marginBottom: '0.3rem', position: 'relative', paddingLeft: '0', paddingRight: '0', fontSize: '0.8rem' }}>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="skills-section" style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0',
            }}>
              <h3 style={{textAlign: 'center', marginBottom: 0, marginTop: 20, letterSpacing: 1, color: '#b3b3ff', fontSize: '0.8rem'}}>WHAT I HAVE DONE SO FAR</h3>
              <h2 style={{textAlign: 'center', fontWeight: 700, fontSize: '1.8rem', margin: 0, color: '#fff', textShadow: '0 4px 32px #000'}}>Technologies I've Worked With</h2>
              {loadingTech && <div style={{textAlign: 'center'}}>Loading technologies...</div>}
              {errorTech && <div style={{color: 'red', textAlign: 'center'}}>{errorTech}</div>}
              <div className="skills-grid-floating" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1.5rem', /* Reduced from 2.5rem */
                marginTop: 20, /* Reduced from 40 */
                borderRadius: '1.5rem', /* Reduced from 2rem */
                padding: '1.5rem 1rem', /* Reduced from 2.5rem 2rem */
                position: 'relative',
                zIndex: 2,
                border: 'none',
                backdropFilter: 'none',
                width: '100%',
                maxWidth: 900,
                minHeight: 180, /* Reduced from 220 */
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '2rem' /* Added bottom margin */
              }}>
                {technologies.map((tech) => (
                  <div key={tech} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 70}}> {/* Reduced from 90 */}
                    <div style={{
                      background: 'rgba(20,22,40,0.95)',
                      borderRadius: '50%',
                      padding: 14, /* Reduced from 18 */
                      boxShadow: '0 0 12px 2px #5f5fff44', /* Reduced shadow */
                      marginBottom: 6, /* Reduced from 8 */
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1.5px solid #23244d', /* Thinner border */
                      transition: 'transform 0.2s',
                    }}>
                      <img src={TECH_ICON_MAP[tech] || TECH_ICON_MAP['React']} alt={tech} style={{width: 36, height: 36, filter: 'brightness(1.2) drop-shadow(0 2px 8px #5f5fff44)'}} /> {/* Reduced from 44x44 */}
                    </div>
                    <span style={{color: '#fff', fontWeight: 600, fontSize: 14, textShadow: '0 2px 8px #000'}}> {tech} </span> {/* Reduced font size */}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;