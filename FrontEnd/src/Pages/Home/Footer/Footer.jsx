import './Footer.css'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Instagram } from 'lucide-react'
import Logo from '../../../assets/Logo/Jhersvin/Logo_Jhersvin.svg'
import BrochureDR from '../../../PDF/DigitalRescue.pdf'
import { ROUTES } from '../../../constants/routes'

function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.jhersvin.com" className="footer__logo">
        <img src={Logo} alt="Logo Jhersvin" height="80" width="80" />
      </a>

      <ul className="footer__nav">
        <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.SERVICES}>Servicios</Link></li>
        <li><Link to={ROUTES.ABOUT}>Nosotros</Link></li>
        <li><a href={BrochureDR} target="_blank" rel="noopener noreferrer" download>Brochure</a></li>
      </ul>

      <hr className="footer__divider" />

      <div className="footer__socials">
        <a href="#" aria-label="GitHub"><Github size={20} /></a>
        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
      </div>

      <p className="footer__copy">&copy; 2026 Jhersvin. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
