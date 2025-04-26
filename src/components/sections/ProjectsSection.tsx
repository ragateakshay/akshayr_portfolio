
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/animated-section';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { staggerContainer } from '@/lib/animations';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my most impactful work in RTL design and verification.
          </p>
        </AnimatedSection>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ProjectCard 
            title="HDMI 1.4b Transmitter" 
            category="Interface Design" 
            description="Design and verification of an HDMI 1.4b transmitter core for high-definition video transmission in consumer electronics." 
            image="/hdmi-project.jpg"
            link="/projects/hdmi-transmitter"
          />
          <ProjectCard 
            title="HDCP Implementation" 
            category="Content Protection" 
            description="Development of HDCP (High-bandwidth Digital Content Protection) modules compliant with HDMI 1.4b for secure content transmission." 
            image="/hdcp-project.jpg"
            delay={100}
            link="/projects/hdcp-implementation"
          />
          <ProjectCard 
            title="HDMI Protocol Integration" 
            category="Protocol Integration" 
            description="Integration of HDMI with DDC (Display Data Channel) and HDCP protocols for comprehensive multimedia interface solutions." 
            image="/soc-project.jpg"
            delay={200}
            link="/projects/hdmi-protocol-integration"
          />
        </motion.div>
        
        <AnimatedSection className="text-center mt-12">
          <a 
            href="https://www.linkedin.com/in/akshayragate" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
          >
            View All Projects
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
