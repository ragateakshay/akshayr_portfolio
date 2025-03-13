import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/Layout';
import { MicrochipIcon, CodeIcon, TerminalIcon, CircuitBoardIcon, ServerIcon, MonitorIcon } from 'lucide-react';
import { Button } from '../components/ui/button';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Animated section component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </motion.div>
  );
};

// Expertise card component
const ExpertiseCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="glass p-6 rounded-xl h-full flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
    >
      <div>
        <div className="rounded-full p-3 w-12 h-12 mb-4 bg-primary/10 flex items-center justify-center">
          <Icon className="text-primary" size={20} />
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

// Project card component
const ProjectCard = ({ title, category, description, image, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="overflow-hidden rounded-xl shadow-md group h-full flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 bg-white flex-grow flex flex-col">
        <div className="chip mb-3 inline-block self-start">{category}</div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link 
            to="/projects" 
            className="text-primary font-medium inline-flex items-center group"
          >
            View details
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Index = () => {
  // Hero animations
  const heroControls = useAnimation();
  
  useEffect(() => {
    heroControls.start('visible');
  }, [heroControls]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
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
            animate={heroControls}
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
                href="https://forms.gle/exampleGoogleFormURL" 
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

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              An RTL design engineer with 1 year of experience, passionate about creating efficient digital designs 
              for modern computing and connectivity standards.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="/user-image.jpg" 
                alt="Akshay R" 
                className="rounded-xl w-full object-cover shadow-md"
              />
            </AnimatedSection>
            
            <AnimatedSection>
              <h3 className="text-2xl font-semibold mb-4">Precision in Every Design</h3>
              <p className="text-muted-foreground mb-6">
                With 1 year of hands-on experience in RTL design and verification, I specialize in creating 
                high-performance, energy-efficient digital systems from concept to implementation.
              </p>
              <p className="text-muted-foreground mb-6">
                My expertise focuses on HDMI 1.4b transmitter design IP implementation, verification frameworks, 
                and digital system architecture for consumer electronics and multimedia applications.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["SystemVerilog", "VHDL", "UVM", "Verilog", "HDMI 1.4b", "Timing Analysis", "Protocol Verification"].map((skill, i) => (
                  <span key={i} className="chip bg-secondary text-secondary-foreground">
                    {skill}
                  </span>
                ))}
              </div>
              <Link 
                to="/about" 
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
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized knowledge in RTL design, verification, and implementation methodologies 
              for HDMI 1.4b transmitter protocols.
            </p>
          </AnimatedSection>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <ExpertiseCard 
              icon={CircuitBoardIcon} 
              title="RTL Design" 
              description="Implementation of high-performance, area-efficient RTL designs using SystemVerilog and VHDL for multimedia interfaces."
            />
            <ExpertiseCard 
              icon={CodeIcon} 
              title="HDMI 1.4b Protocol" 
              description="Design and verification of HDMI 1.4b interfaces, ensuring compliance with specifications and interoperability with consumer electronics."
            />
            <ExpertiseCard 
              icon={MicrochipIcon} 
              title="Video Interface Implementation" 
              description="Implementation of video timing controllers and interface protocols for reliable audio/video transmission."
            />
            <ExpertiseCard 
              icon={TerminalIcon} 
              title="Functional Verification" 
              description="Comprehensive verification using UVM, SystemVerilog, and assertion-based methodologies to ensure design correctness." 
            />
            <ExpertiseCard 
              icon={ServerIcon} 
              title="Protocol Compliance" 
              description="Rigorous testing and verification to ensure designs meet HDMI 1.4b industry standards and certification requirements."
            />
            <ExpertiseCard 
              icon={MonitorIcon} 
              title="FPGA Prototyping" 
              description="Rapid prototyping of designs using FPGAs, enabling early software development and hardware validation."
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
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
            />
            <ProjectCard 
              title="HDCP Implementation" 
              category="Content Protection" 
              description="Development of HDCP (High-bandwidth Digital Content Protection) modules compliant with HDMI 1.4b for secure content transmission." 
              image="/hdcp-project.jpg"
              delay={100}
            />
            <ProjectCard 
              title="HDMI Protocol Integration" 
              category="Protocol Integration" 
              description="Integration of HDMI with DDC (Display Data Channel) and HDCP protocols for comprehensive multimedia interface solutions." 
              image="/soc-project.jpg"
              delay={200}
            />
          </motion.div>
          
          <AnimatedSection className="text-center mt-12">
            <Link 
              to="/projects" 
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
            >
              View All Projects
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Digital Design to Life?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're looking for HDMI 1.4b interface design, protocol implementation, or consultation on your hardware project, let's discuss how I can help you achieve your goals.
            </p>
            <a 
              href="https://forms.gle/exampleGoogleFormURL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
            >
              Start a Conversation
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
