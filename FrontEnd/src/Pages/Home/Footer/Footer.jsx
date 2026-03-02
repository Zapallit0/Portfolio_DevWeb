import './Footer.css'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/Logo/5.svg'
import BrochureDR from '../../../PDF/DigitalRescue.pdf'
import { ROUTES } from '../../../constants/routes'

function Footer() {
  return (
    <footer>
        <a href="www.jhersvin.com"><img src={Logo} alt="Logo D" height="50px"/></a>
        <ul>
            <li><Link to={ROUTES.HOME}>Home</Link></li>
            <li><Link to={ROUTES.SERVICES}>Servicios</Link></li>
            <li><Link to={ROUTES.ABOUT}>Nosotros</Link></li>
            <li><a href={BrochureDR} target='_blank' rel='noopener noreferrer' download>BROCHURE</a></li>
        </ul>
    </footer>
  )
}

export default Footer
