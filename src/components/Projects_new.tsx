import React from 'react';
import { motion } from 'framer-motion';
import { ExpandableCard } from './ui/ExpandableCard';
import './styles/Projects.css';

const Projects: React.FC = () => {
  const projectCards = [
    {
      title: 'Trade Yogi',
      description: 'ML-driven trading app with stock prices and profit/loss predictions',
      src: '/api/placeholder/400/250',
      ctaText: 'View Live',
      ctaLink: 'https://trade-yogi-demo.vercel.app',
      github: 'https://github.com/Anik-Paul-toj/trade-yogi',
      content: () => (
        <div>
          <p>Trade Yogi is an intuitive application providing real-time stock prices, investment company insights, and machine learning-driven profit/loss predictions.</p>
          <br />
          <p><strong>Key Features:</strong></p>
          <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>• Real-time stock price tracking</li>
            <li>• ML-powered profit/loss predictions</li>
            <li>• Investment company analysis</li>
            <li>• Interactive dashboard with PowerBI integration</li>
          </ul>
          <br />
          <p><strong>Technologies:</strong> JavaScript, Python, PowerBI, Machine Learning</p>
        </div>
      )
    },
    {
      title: 'Coal Mine LCA Software',
      description: 'Environmental impact assessment tool for mining operations',
      src: require('../assets/coal.png'),
      ctaText: 'View Demo',
      ctaLink: 'https://aniket123de.github.io/SIH1644/',
      github: 'https://github.com/Anik-Paul-toj/CoalMIne-SIH1644',
      content: () => (
        <div>
          <p>The Coal Mine LCA software evaluates environmental impacts of mining operations, integrating user and sensor data to provide comprehensive life cycle assessments.</p>
          <br />
          <p><strong>Key Features:</strong></p>
          <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>• Environmental impact assessment</li>
            <li>• Real-time sensor data integration</li>
            <li>• Life cycle analysis reporting</li>
            <li>• Sustainability insights dashboard</li>
          </ul>
          <br />
          <p><strong>Technologies:</strong> HTML, MongoDB, JavaScript</p>
        </div>
      )
    },
    {
      title: 'Lok Seva',
      description: 'Government services application platform for citizens',
      src: require('../assets/lokseva.png'),
      ctaText: 'Visit Site',
      ctaLink: 'https://lok-seva.vercel.app/',
      github: 'https://github.com/Anik-Paul-toj/LokSeva',
      content: () => (
        <div>
          <p>Lok Seva is a comprehensive web application designed to streamline the process of applying for various government services, making it easier for citizens to access essential services.</p>
          <br />
          <p><strong>Key Features:</strong></p>
          <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>• Digital government service applications</li>
            <li>• User-friendly interface</li>
            <li>• Document management system</li>
            <li>• Application status tracking</li>
          </ul>
          <br />
          <p><strong>Technologies:</strong> Supabase, JavaScript, React</p>
        </div>
      )
    },
    {
      title: 'Kavach',
      description: 'Chrome extension for online tracker blocking and cybersecurity',
      src: require('../assets/kavach.png'),
      ctaText: 'View Landing',
      ctaLink: 'https://kavach-landing.vercel.app/',
      github: 'https://github.com/Anik-Paul-toj/KAVACH_HACKOLUTION',
      content: () => (
        <div>
          <p>Kavach is a Chrome extension designed to identify and block online trackers, providing enhanced cybersecurity protection while ensuring users maintain privacy and security online.</p>
          <br />
          <p><strong>Key Features:</strong></p>
          <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>• Real-time tracker detection</li>
            <li>• Privacy protection dashboard</li>
            <li>• Customizable blocking rules</li>
            <li>• Security analytics</li>
          </ul>
          <br />
          <p><strong>Technologies:</strong> JavaScript, Chrome Extension API, CSS</p>
        </div>
      )
    },
    {
      title: 'Rangmanch',
      description: 'Digital marketplace connecting content creators with brands',
      src: require('../assets/rangmanch.png'),
      ctaText: 'Explore Platform',
      ctaLink: 'https://rangmanch.vercel.app/',
      github: 'https://github.com/aniket123de/Rangmanch',
      content: () => (
        <div>
          <p>Rangmanch is a comprehensive collaboration platform that connects content creators with brands, acting as a digital marketplace that facilitates partnerships and brand collaborations.</p>
          <br />
          <p><strong>Key Features:</strong></p>
          <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>• Creator-brand matching system</li>
            <li>• Collaboration management tools</li>
            <li>• Portfolio showcase</li>
            <li>• Payment integration</li>
          </ul>
          <br />
          <p><strong>Technologies:</strong> React, Node.js, MongoDB</p>
        </div>
      )
    },
    {
      title: 'Nazaakat',
      description: 'Elegant e-commerce platform with curated product collections',
      src: require('../assets/nazaakat.png'),
      ctaText: 'Shop Now',
      ctaLink: 'https://mynazaakat.vercel.app/',
      github: 'https://github.com/Anik-Paul-toj/nazaakat-main',
      content: () => (
        <div>
          <p>Nazaakat is an elegant e-commerce platform featuring a curated collection of products with a focus on beautiful design and seamless user experience for online shopping.</p>
          <br />
          <p><strong>Key Features:</strong></p>
          <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>• Curated product collections</li>
            <li>• Beautiful, responsive design</li>
            <li>• Secure payment processing</li>
            <li>• User account management</li>
          </ul>
          <br />
          <p><strong>Technologies:</strong> React, Next.js, E-commerce APIs</p>
        </div>
      )
    }
  ];

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
            Following projects showcase my skills and experience through real-world examples of 
            my work. Each project is briefly described with links to code repositories and live demos. 
            Click on any project card to see more details and explore the technologies used.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ marginTop: '3rem' }}
        >
          <ExpandableCard cards={projectCards} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
