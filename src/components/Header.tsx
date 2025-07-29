import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Shrink and fix header after scrolling past hero (e.g., 40px)
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
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
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="nav-link"
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