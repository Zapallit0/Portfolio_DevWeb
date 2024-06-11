import React ,{useState} from 'react'
import './NavBar.css'
import {Squash as Hamburger} from 'hamburger-react'


function NavBar() {
const [showMenu, setShowMenu]=useState(false);
  return (
    <nav>
        <div className='navBar'>
            <picture>
                <img src="" alt="JVQ" />
            </picture>
            <Hamburger size={25} color="#BBD8FF" duration={0.3} toggled={showMenu} toggle={setShowMenu} easing="ease-in"/>
            <ul className='navPhone' style={{display:showMenu?'flex':'none'}}>
                <li>Home</li>
                <li>Servicios</li>
                <li>Nosotros</li>
                <button>Contáctanos</button>
            </ul>
            {/* <ul className='navComp' hidden="true">
                <li>Home</li>
                <li>Servicios</li>
                <li>Nosotros</li>
            </ul> */}
            {/* <button>
                Contáctanos
            </button> */}
        </div>
    </nav>
  )
}

export default NavBar