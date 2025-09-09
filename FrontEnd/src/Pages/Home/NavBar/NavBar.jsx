import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { Squash as Hamburger } from 'hamburger-react'
import Circle from '../../../assets/Forms/Circle.svg'
import Logo from '../../../assets/Logo/5.svg'

function NavBar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuClick = () => {
    setShowMenu(false)
  }

  return (
    <nav className='navBar'>
      <Link to="/">
        <img src={Logo} alt="JVQ" height="40px"/>
      </Link>
      
      <div className='phone'>
        <Hamburger size={25} color="#BBD8FF" duration={0.3} toggled={showMenu} toggle={setShowMenu} easing="ease-in"/>
        <ul className='navPhone' style={{display: showMenu ? 'flex' : 'none'}}>
          <li><Link to="/" onClick={handleMenuClick}>Home</Link></li>
          <li><Link to="/servicios" onClick={handleMenuClick}>Servicios</Link></li>
          <li><Link to="/nosotros" onClick={handleMenuClick}>Nosotros</Link></li>
          <Link to="/contacto" onClick={handleMenuClick}>
            <button>Contáctanos</button>
          </Link>
        </ul>
      </div>
      
      <div className='comp'>
        <ul className='navComp'>
          <img src={Circle} alt="background" />
          <li><Link to="/">Home</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
        </ul>
        <button className='ctabutton'>
          <Link to="/contacto">Contáctanos</Link>
        </button>
      </div>
    </nav>
  )
}

export default NavBar