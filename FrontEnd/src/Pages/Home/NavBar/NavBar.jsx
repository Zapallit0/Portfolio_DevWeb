import React ,{useState} from 'react'
import './NavBar.css'
import {Squash as Hamburger} from 'hamburger-react'
import Circle from '../../../assets/Forms/Circle.svg'
import Logo from '../../../assets/Logo/5.svg'
function NavBar() {
const [showMenu, setShowMenu]=useState(false);
  return (
    <nav className='navBar'>
            <a>
                <img src={Logo} alt="JVQ" height="50px"/>
            </a>
            <div className='phone'>
                <Hamburger size={25} color="#BBD8FF" duration={0.3} toggled={showMenu} toggle={setShowMenu} easing="ease-in"/>
                <ul className='navPhone' style={{display:showMenu?'flex':'none'}}>
                    <li>Home</li>
                    <li>Servicios</li>
                    <li>Nosotros</li>
                    <button>Contáctanos</button>
                </ul>
            </div>
            <div className='comp'>
                <ul className='navComp'>
                    <img src={Circle} alt="background" />
                    <li>Home</li>
                    <li>Servicios</li>
                    <li>Nosotros</li>
                </ul>
                <button>
                    Contáctanos
                </button>
            </div>
    </nav>
  )
}

export default NavBar