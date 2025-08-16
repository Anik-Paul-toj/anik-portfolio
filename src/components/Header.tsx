import React, { useState, useEffect, useRef } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Shrink and fix header after scrolling past hero (e.g., 40px)
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initialize scrollSpy for detecting current section
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  
  // Handle active section change
  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <header
      ref={headerRef}
      className={`header${scrolled ? ' scrolled' : ''}`}
      style={scrolled ? { position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)' } : { position: 'absolute', top: '1.5rem', left: '50%', transform: 'translateX(-50%)' }}
    >
      <div className="header-container">
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>
            Portfolio
          </Link>
        </div>
        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80} // Offset to account for header height
              onClick={() => setIsOpen(false)}
              onSetActive={handleSetActive}
              className={`nav-link ${activeSection === item.to ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? React.createElement(FaTimes as any) : React.createElement(FaBars as any)}
        </div>
      </div>
    </header>
  );
};

export default Header; 