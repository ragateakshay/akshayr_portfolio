
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Hero scrollToSection={scrollToSection} />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
