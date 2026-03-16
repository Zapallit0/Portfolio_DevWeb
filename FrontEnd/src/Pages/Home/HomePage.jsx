import HeroSection from '../AboutUs/Sections/HeroSection.jsx'
import TechStackSection from '../AboutUs/Sections/TechStack.jsx'
import PortfolioSection from '../AboutUs/Sections/Portafolio.jsx'
import SoftSkillsSection from '../AboutUs/Sections/SoftSkills.jsx'
import Contact from './Contact/Contact'
import SEO from '../../Components/SEO'
import '../AboutUs/AboutUs.css'

function HomePage() {
  return (
    <section className='AboutUsPage'>
      <SEO
        title="Jhersvin — Desarrollo Web Fullstack | React & Node.js"
        description="Portafolio de Jhersvin, desarrollador fullstack. Proyectos, stack tecnológico y servicios de desarrollo web a medida."
        path="/"
        includeStructuredData
      />
      <HeroSection />
      <TechStackSection />
      <PortfolioSection />
      <SoftSkillsSection />
      <Contact />
    </section>
  )
}

export default HomePage