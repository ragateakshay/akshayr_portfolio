
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
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

  // Function to handle Home click and scroll to top
  const scrollToTop = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Akshay R</h3>
            <p className="text-muted-foreground max-w-sm">
              Specialized in digital design, verification, and implementation of complex RTL systems for advanced semiconductor solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/', section: 'home' },
                { name: 'About', path: '/#about', section: 'about' },
                { name: 'Expertise', path: '/#expertise', section: 'expertise' },
                { name: 'Projects', path: '/#projects', section: 'projects' },
                { name: 'Contact', path: '/#contact', section: 'contact' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    onClick={(e) => {
                      if (item.section === 'home') {
                        scrollToTop(e);
                      } else if (location.pathname === '/' && item.section !== 'home') {
                        e.preventDefault();
                        scrollToSection(item.section);
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <p className="text-muted-foreground mb-4">
              Interested in collaborating or have a question?
            </p>
            <a 
              href="https://forms.gle/exampleGoogleFormURL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.linkedin.com/in/akshayragate" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors" 
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href="https://www.instagram.com/akshragg/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Akshay R. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
