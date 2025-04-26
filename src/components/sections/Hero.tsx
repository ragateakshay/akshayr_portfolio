
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background/0 pointer-events-none"></div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 md:w-1/4 h-auto opacity-10 md:opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto animate-float">
          <path fill="currentColor" d="M47.7,-57.2C59.9,-47.3,67.2,-30.9,71.2,-13.1C75.1,4.7,75.8,23.8,67.8,38.2C59.9,52.7,43.3,62.4,25.6,68.1C7.9,73.8,-10.8,75.5,-25.4,68.3C-39.9,61.2,-50.4,45.4,-59.9,27.7C-69.5,10.1,-78.1,-9.4,-74.5,-26.8C-70.9,-44.2,-55.1,-59.5,-38.6,-67.5C-22.1,-75.5,-5,-76.1,9.5,-71.6C24,-67.1,35.4,-67.1,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} className="chip mb-5 animation-delay-100">
            RTL Design & Verification
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp} 
            className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight animation-delay-200"
          >
            Designing the Digital <span className="text-primary">Building Blocks</span> of Tomorrow
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 animation-delay-300"
          >
            Specialized in RTL design and verification for cutting-edge semiconductor applications, 
            delivering precise, efficient, and innovative digital solutions.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 animation-delay-400">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              View My Projects
            </button>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSec8JZ3yjtktU2sF2AwoLxob-XZRBcqXcYWWn87WlpjJaO2zA/viewform?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
