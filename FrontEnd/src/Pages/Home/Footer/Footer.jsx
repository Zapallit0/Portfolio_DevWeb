import React from 'react'
import './Footer.css'
import Logo from '../../../assets/Logo/5.svg'
import BrochureDR from '../../../PDF/DigitalRescue.pdf'
function Footer() {
  return (
    <footer>
        <a href="www.jhersvin.com"><img src={Logo} alt="Logo D" height="50px"/></a>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Servicios</a></li>
            <li><a href="">Nosotros</a></li>
            <li><a href={BrochureDR} target='_blank' rel='noopener noreferrer'  download>BROCHURE</a></li>
        </ul>
        
    </footer>
  )
}

export default Footer