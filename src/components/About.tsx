import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaMapMarkerAlt, FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';
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
      period: '2009 - 2019',
      year: '2019',
      description: 'Successfully completed 10 years of schooling with a strong academic record and active participation in school activities.',
      achievements: [
        'Honored with multiple accolades for academic and extracurricular achievements during schooling.',
        'Received the Governor\'s Award for exceptional performance in Class VII.',
        'Consistently maintained excellent academic performance, achieving 90.1% in Class 10 Board Examinations.'
      ],
      icon: FaSchool,
      color: '#FF6B6B',
      phase: 'PHASE ONE'
    },
    {
      title: 'Higher Secondary',
      company: 'Habra Hish School',
      period: '2019 - 2021',
      year: '2021',
      description: 'Completed higher secondary education with focus on Science stream.',
      achievements: [
        'Specialized in Computer Science and Mathematics.',
        'Achieved outstanding results in board examinations.',
        'Participated in various coding competitions and science fairs.'
      ],
      icon: FaGraduationCap,
      color: '#4ECDC4',
      phase: 'PHASE TWO'
    },
    {
      title: 'Computer Science Engineering',
      company: 'B P Poddar Institute of Management and Technology',
      period: '2023 - Present',
      year: '2027',
      description: 'Currently pursuing BTech with specialization in software development and programming.',
      achievements: [
        'Maintaining excellent academic performance.',
        'Active participant in coding clubs and tech events.',
        'Working on various software development projects.'
      ],
      icon: FaUniversity,
      color: '#45B7D1',
      phase: 'PHASE THREE'
    }
  ];

  return (
    <section id="about" className="about" style={{ 
      minHeight: '90vh',
      width: '100%',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '1.5rem 0 0.5rem 0',
      margin: 0,
      position: 'relative',
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(15, 23, 42, 1) 100%)',
      overflow: 'hidden'
    }}>
      {/* Cosmic background with stars */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(95, 95, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="0.5" fill="rgba(255,255,255,0.3)"/><circle cx="80" cy="40" r="0.3" fill="rgba(255,255,255,0.2)"/><circle cx="40" cy="80" r="0.4" fill="rgba(255,255,255,0.25)"/><circle cx="90" cy="90" r="0.2" fill="rgba(255,255,255,0.15)"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>')
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
          style={{ marginBottom: '2rem' }}
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
              margin: '1.2rem 0'
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
              padding: '0.6rem 1.2rem',
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
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
              {/* Marvel Phase Timeline */}
              <div style={{
                position: 'relative',
                padding: '2rem 0',
                maxWidth: '1400px',
                margin: '0 auto'
              }}>
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                  <h3 style={{ 
                    color: '#64748b', 
                    fontSize: '0.9rem', 
                    letterSpacing: '2px', 
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    WHAT I HAVE DONE SO FAR
                  </h3>
                  <h1 style={{ 
                    color: '#fff', 
                    fontSize: '3rem', 
                    fontWeight: '700', 
                    margin: 0,
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }}>
                    Scholastic Record
                  </h1>
                </motion.div>

                {/* Phase Sections */}
                {experiences.map((exp, phaseIndex) => (
                  <motion.div
                    key={phaseIndex}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: phaseIndex * 0.3 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem' }}
                  >
                    {/* Phase Header */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '2rem',
                      position: 'relative'
                    }}>
                      <div style={{
                        flex: 1,
                        height: '2px',
                        background: `linear-gradient(90deg, transparent 0%, ${exp.color} 50%, transparent 100%)`,
                        marginRight: '2rem'
                      }} />
                      <h2 style={{
                        color: exp.color,
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        letterSpacing: '3px',
                        textShadow: `0 0 20px ${exp.color}80`,
                        padding: '0.5rem 2rem',
                        background: `linear-gradient(90deg, transparent 0%, ${exp.color}20 50%, transparent 100%)`,
                        borderRadius: '2rem',
                        margin: 0,
                        whiteSpace: 'nowrap'
                      }}>
                        {exp.phase}
                      </h2>
                      <div style={{
                        flex: 1,
                        height: '2px',
                        background: `linear-gradient(90deg, transparent 0%, ${exp.color} 50%, transparent 100%)`,
                        marginLeft: '2rem'
                      }} />
                    </div>

                    {/* Academic Card */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: `0 20px 40px ${exp.color}30`,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
                        border: `2px solid ${exp.color}40`,
                        borderRadius: '1.5rem',
                        padding: '2rem',
                        position: 'relative',
                        overflow: 'hidden',
                        backdropFilter: 'blur(20px)',
                        boxShadow: `0 10px 30px ${exp.color}20`,
                        cursor: 'pointer'
                      }}
                    >
                      {/* Animated background gradient */}
                      <motion.div
                        animate={{
                          background: [
                            `linear-gradient(45deg, ${exp.color}10 0%, transparent 100%)`,
                            `linear-gradient(45deg, transparent 0%, ${exp.color}10 100%)`,
                            `linear-gradient(45deg, ${exp.color}10 0%, transparent 100%)`
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          borderRadius: '1.5rem'
                        }}
                      />

                      <div style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '2rem',
                          flexWrap: 'wrap'
                        }}>
                          {/* Icon */}
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            style={{
                              width: '100px',
                              height: '100px',
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${exp.color} 0%, ${exp.color}80 100%)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: `0 10px 25px ${exp.color}40`,
                              flexShrink: 0
                            }}
                          >
                            {React.createElement(exp.icon as any, { 
                              style: { 
                                fontSize: '2.5rem', 
                                color: '#fff',
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                              } 
                            })}
                          </motion.div>

                          {/* Content */}
                          <div style={{ flex: 1, minWidth: '300px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                              <h3 style={{ 
                                color: exp.color, 
                                fontSize: '1.8rem', 
                                fontWeight: '700', 
                                margin: 0,
                                textShadow: `0 2px 10px ${exp.color}40`
                              }}>
                                {exp.title}
                              </h3>
                              <span style={{
                                background: `${exp.color}30`,
                                color: '#fff',
                                padding: '0.4rem 1.2rem',
                                borderRadius: '2rem',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                border: `1px solid ${exp.color}60`
                              }}>
                                {exp.period}
                              </span>
                            </div>

                            <h4 style={{ 
                              color: '#94a3b8', 
                              fontSize: '1.2rem', 
                              fontWeight: '500', 
                              marginBottom: '1rem',
                              margin: '0 0 1rem 0'
                            }}>
                              {exp.company}
                            </h4>

                            <p style={{ 
                              color: '#e2e8f0', 
                              fontSize: '1rem', 
                              lineHeight: '1.6', 
                              marginBottom: '1.5rem' 
                            }}>
                              {exp.description}
                            </p>

                            {/* Achievements */}
                            <div style={{ marginTop: '1.5rem' }}>
                              <h5 style={{ 
                                color: exp.color, 
                                fontSize: '1.1rem', 
                                fontWeight: '600', 
                                marginBottom: '1rem' 
                              }}>
                                Key Achievements:
                              </h5>
                              <div style={{ display: 'grid', gap: '0.8rem' }}>
                                {exp.achievements.map((achievement, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: '0.8rem'
                                    }}
                                  >
                                    <div style={{
                                      width: '6px',
                                      height: '6px',
                                      borderRadius: '50%',
                                      background: exp.color,
                                      marginTop: '0.5rem',
                                      flexShrink: 0,
                                      boxShadow: `0 0 8px ${exp.color}60`
                                    }} />
                                    <span style={{ 
                                      color: '#cbd5e1', 
                                      fontSize: '0.95rem', 
                                      lineHeight: '1.5' 
                                    }}>
                                      {achievement}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Year Badge */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            style={{
                              background: `linear-gradient(135deg, ${exp.color} 0%, ${exp.color}80 100%)`,
                              color: '#fff',
                              padding: '1rem 1.5rem',
                              borderRadius: '1rem',
                              fontSize: '1.5rem',
                              fontWeight: '700',
                              textAlign: 'center',
                              boxShadow: `0 8px 20px ${exp.color}40`,
                              minWidth: '80px'
                            }}
                          >
                            {exp.year}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{ textAlign: 'center', marginTop: '4rem' }}
                >
                  <div style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, #5f5fff 20%, #00bcd4 50%, #5f5fff 80%, transparent 100%)',
                    margin: '2rem 0',
                    borderRadius: '1px'
                  }} />
                  <p style={{ 
                    color: '#64748b', 
                    fontSize: '0.9rem', 
                    fontStyle: 'italic' 
                  }}>
                    The journey continues...
                  </p>
                </motion.div>
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
                gap: '1.5rem',
                marginTop: 20,
                borderRadius: '1.5rem',
                padding: '1.5rem 1rem',
                position: 'relative',
                zIndex: 2,
                border: 'none',
                backdropFilter: 'none',
                width: '100%',
                maxWidth: 900,
                minHeight: 180,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '2rem'
              }}>
                {technologies.map((tech) => (
                  <div key={tech} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 70}}>
                    <div style={{
                      background: 'rgba(20,22,40,0.95)',
                      borderRadius: '50%',
                      padding: 14,
                      boxShadow: '0 0 12px 2px #5f5fff44',
                      marginBottom: 6,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1.5px solid #23244d',
                      transition: 'transform 0.2s',
                    }}>
                      <img src={TECH_ICON_MAP[tech] || TECH_ICON_MAP['React']} alt={tech} style={{width: 36, height: 36, filter: 'brightness(1.2) drop-shadow(0 2px 8px #5f5fff44)'}} />
                    </div>
                    <span style={{color: '#fff', fontWeight: 600, fontSize: 14, textShadow: '0 2px 8px #000'}}> {tech} </span>
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