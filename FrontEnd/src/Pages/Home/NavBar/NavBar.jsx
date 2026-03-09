import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { Squash as Hamburger } from 'hamburger-react'
import Circle from '../../../assets/Forms/Circle.svg'
import Logo from '../../../assets/Logo/Jhersvin/Logo_Jhersvin.svg'
import { ROUTES } from '../../../constants/routes'

function NavBar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuClick = useCallback(() => {
    setShowMenu(false)
  }, [])

  return (
    <nav className='navBar'>
      <Link to={ROUTES.HOME}>
        <img src={Logo} alt="JVQ" height="40px"/>
      </Link>

      <div className='phone'>
        <Hamburger size={25} color="#BBD8FF" duration={0.3} toggled={showMenu} toggle={setShowMenu} easing="ease-in"/>
        {showMenu && <div className='navPhone-backdrop' onClick={handleMenuClick} />}
        <ul className={`navPhone ${showMenu ? 'navPhone--open' : ''}`}>
          <li><Link to={ROUTES.HOME} onClick={handleMenuClick}>Home</Link></li>
          <li><Link to={ROUTES.SERVICES} onClick={handleMenuClick}>Servicios</Link></li>
          <li>
            <Link to={ROUTES.CONTACT} onClick={handleMenuClick}>
              <button>Contáctanos</button>
            </Link>
          </li>
        </ul>
      </div>

      <div className='comp'>
        <ul className='navComp'>
          <img src={Circle} alt="background" />
          <li><Link to={ROUTES.HOME}>Home</Link></li>
          <li><Link to={ROUTES.SERVICES}>Servicios</Link></li>
        </ul>
      </div>
      <button className='ctabutton'>
        <Link to={ROUTES.CONTACT}>Contáctanos</Link>
      </button>
    </nav>
  )
}

export default NavBar
