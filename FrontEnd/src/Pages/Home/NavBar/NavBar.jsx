import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { Squash as Hamburger } from 'hamburger-react'
import Circle from '../../../assets/Forms/Circle.svg'
import Logo from '../../../assets/Logo/5.svg'
import { ROUTES } from '../../../constants/routes'

function NavBar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuClick = () => {
    setShowMenu(false)
  }

  return (
    <nav className='navBar'>
      <Link to={ROUTES.HOME}>
        <img src={Logo} alt="JVQ" height="40px"/>
      </Link>

      <div className='phone'>
        <Hamburger size={25} color="#BBD8FF" duration={0.3} toggled={showMenu} toggle={setShowMenu} easing="ease-in"/>
        <ul className='navPhone' style={{display: showMenu ? 'flex' : 'none'}}>
          <li><Link to={ROUTES.HOME} onClick={handleMenuClick}>Home</Link></li>
          <li><Link to={ROUTES.SERVICES} onClick={handleMenuClick}>Servicios</Link></li>
          <li><Link to={ROUTES.ABOUT} onClick={handleMenuClick}>Nosotros</Link></li>
          <Link to={ROUTES.CONTACT} onClick={handleMenuClick}>
            <button>Contáctanos</button>
          </Link>
        </ul>
      </div>

      <div className='comp'>
        <ul className='navComp'>
          <img src={Circle} alt="background" />
          <li><Link to={ROUTES.HOME}>Home</Link></li>
          <li><Link to={ROUTES.SERVICES}>Servicios</Link></li>
          <li><Link to={ROUTES.ABOUT}>Nosotros</Link></li>
        </ul>
      </div>
      <button className='ctabutton'>
        <Link to={ROUTES.CONTACT}>Contáctanos</Link>
      </button>
    </nav>
  )
}

export default NavBar
