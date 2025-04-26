
import React from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An RTL/ASIC design engineer with 1 year of experience, passionate about creating efficient digital designs 
            for modern computing and connectivity standards.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="space-y-6">
            <img 
              src="/akshayr.jpg" 
              alt="Akshay R" 
              className="rounded-xl w-full aspect-square object-cover shadow-md"
            />
            <img 
              src="/photo-1518770660439-4636190af475" 
              alt="Circuit Board Close-up" 
              className="rounded-xl w-full aspect-square object-cover shadow-md"
            />
          </AnimatedSection>
          
          <AnimatedSection>
            <h3 className="text-2xl font-semibold mb-4">Precision in Every Design</h3>
            <p className="text-muted-foreground mb-6">
              With 1 year of hands-on experience in RTL/ASIC design and verification, I specialize in creating 
              high-performance, energy-efficient digital systems from concept to implementation.
            </p>
            <p className="text-muted-foreground mb-6">
              My expertise focuses on HDMI 1.4b transmitter design IP implementation, verification frameworks, 
              and digital system architecture for consumer electronics and multimedia applications.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "RTL/ASIC Design", "Verilog HDL", "Timing Analysis",
                "Simulators, Synthesis & Waveform Tools (Cadence-NC, VCS, DC, Spyglass, Verdi, Simvision)"
              ].map((skill, i) => (
                <span key={i} className="chip bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
            <a 
              href="https://www.linkedin.com/in/akshayragate" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary font-medium inline-flex items-center group"
            >
              Learn more about my experience
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
