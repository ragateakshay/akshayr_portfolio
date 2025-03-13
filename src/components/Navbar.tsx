
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      return; // Let the Link component handle the navigation
    }
    
    // If already on home page, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        scrolled ? 'glass backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-medium">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Akshay R
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Home', path: '/', section: 'home' },
            { name: 'About', path: '/#about', section: 'about' },
            { name: 'Expertise', path: '/#expertise', section: 'expertise' },
            { name: 'Projects', path: '/#projects', section: 'projects' },
            { name: 'Contact', path: '/#contact', section: 'contact' }
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={(e) => {
                if (location.pathname === '/' && item.section !== 'home') {
                  e.preventDefault();
                  scrollToSection(item.section);
                }
              }}
              className="text-sm font-medium relative transition-base group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden flex flex-col space-y-1.5"
          aria-label="Toggle navigation menu"
        >
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-transform duration-300",
            mobileMenuOpen && "translate-y-2 rotate-45"
          )}></span>
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-opacity duration-300",
            mobileMenuOpen && "opacity-0"
          )}></span>
          <span className={cn(
            "block w-6 h-0.5 bg-foreground transition-transform duration-300",
            mobileMenuOpen && "-translate-y-2 -rotate-45"
          )}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 w-full transition-all duration-300 overflow-hidden glass backdrop-blur-lg md:hidden border-t border-white/10",
        mobileMenuOpen ? "max-h-screen pb-4" : "max-h-0"
      )}>
        <div className="py-2 px-6 flex flex-col">
          {[
            { name: 'Home', path: '/', section: 'home' },
            { name: 'About', path: '/#about', section: 'about' },
            { name: 'Expertise', path: '/#expertise', section: 'expertise' },
            { name: 'Projects', path: '/#projects', section: 'projects' },
            { name: 'Contact', path: '/#contact', section: 'contact' }
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={(e) => {
                if (location.pathname === '/' && item.section !== 'home') {
                  e.preventDefault();
                  scrollToSection(item.section);
                }
                setMobileMenuOpen(false);
              }}
              className="py-3 text-base transition-colors hover:text-primary border-b border-gray-100/10 last:border-none"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
