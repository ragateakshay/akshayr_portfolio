
import React from 'react';
import { motion } from 'framer-motion';
import { CircuitBoardIcon, CodeIcon, MicrochipIcon, TerminalIcon, ServerIcon, MonitorIcon } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { ExpertiseCard } from '@/components/cards/ExpertiseCard';
import { staggerContainer } from '@/lib/animations';

const ExpertiseSection: React.FC = () => {
  return (
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
  );
};

export default ExpertiseSection;
