import { useContext } from 'react';
import AuthContext from "../utils/contexto"
import './Header.css'
import React from 'react'
import { ReactComponent as Logo } from './../images/logo.svg'
import { Link } from 'react-router-dom'



function Header() {
  const { login, cierrasesion } = useContext(AuthContext)
  return (
    <header className='header'>
      <Link to='/'>
        <div className='logo_'>
          <Logo className='svg' />
        </div>
      </Link>
      <nav className='nav'>
        <ul>
          {login &&
            <>
            <li><button onClick={cierrasesion}>Cierra sesion</button></li>
            <li><Link to='/adverts/new'>Sube tu articulo</Link></li>
            <li><Link to='/adverts'>Articulos</Link></li>
            </>
          }    

        </ul>
      </nav>
    </header>
  )
}

export default Header
