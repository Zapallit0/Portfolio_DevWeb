import React from 'react'
import HeroSection from './Sections/HeroSection.jsx';
import TechStackSection from './Sections/TechStack.jsx';
import PortfolioSection from './Sections/Portafolio.jsx';
import SoftSkillsSection from './Sections/SoftSkills.jsx';
import './AboutUs.css'
function AboutPage() {
  return (
    <section className='AboutUsPage'>
      <HeroSection />
      <TechStackSection />
      <PortfolioSection />
      <SoftSkillsSection />
    </section>
  );
}

export default AboutPage;