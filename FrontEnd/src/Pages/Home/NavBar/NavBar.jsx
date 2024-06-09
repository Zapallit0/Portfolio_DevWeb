import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <nav>
        <div className='navBarPhone'>
            <picture>
                <img src="" alt="JVQ" />
            </picture>
            <ul>
                <li>Home</li>
                <li>Servicios</li>
                <li>Nosotros</li>
            </ul>
            <button>
                Contáctanos
            </button>
        </div>
        <div className='navBarFull' hidden="true">
            <picture>
                <img src="" alt="JVQ" />
            </picture>
            <ul>
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