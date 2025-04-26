
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Digital Design to Life?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're looking for HDMI 1.4b interface design, protocol implementation, or consultation on your hardware project, let's discuss how I can help you achieve your goals.
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSec8JZ3yjtktU2sF2AwoLxob-XZRBcqXcYWWn87WlpjJaO2zA/viewform?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary text-white px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
          >
            Start a Conversation
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
