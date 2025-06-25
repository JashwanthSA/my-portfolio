import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="top-area">
      <div className="header-area">
        <nav className={`navbar navbar-default bootsnav navbar-fixed dark ${isScrolled ? 'on' : 'no-background'}`}>
          <div className="container" style={{position: 'relative'}}>
            <div className="navbar-header">
              <button 
                type="button" 
                className="navbar-toggle" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="#welcome-hero" style={{fontFamily: 'Pixelify Sans, sans-serif', fontSize: 'x-large'}}>
                Jashwanth
              </a>
            </div>
            
            <div className={`collapse navbar-collapse menu-ui-design ${isMenuOpen ? 'in' : ''}`} id="navbar-menu">
              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li className="smooth-menu active"></li>
                <li className="smooth-menu">
                  <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>about</a>
                </li>
                <li className="smooth-menu">
                  <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>education</a>
                </li>
                <li className="smooth-menu">
                  <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>experience</a>
                </li>
                <li className="smooth-menu">
                  <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>skills</a>
                </li>
                <li className="smooth-menu">
                  <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>projects</a>
                </li>
                <li className="smooth-menu">
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>contact</a>
                </li>
              </ul>
            </div>
            
            <div className="navbar-right-toggle">
              <DarkModeToggle />
            </div>
          </div>
        </nav>
      </div>
      <div className="clearfix"></div>
    </header>
  );
};

export default Header; 