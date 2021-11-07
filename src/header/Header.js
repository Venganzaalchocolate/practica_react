import { useContext, useState } from 'react'
import AuthContext from '../utils/contexto'
import './Header.css'
import React from 'react'
import { ReactComponent as Logo } from './../images/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  const { login, cierrasesion } = useContext(AuthContext)
  const [confiarmacion, setconfirmacion] = useState(false)

  function botonconfirmacion() {
    setconfirmacion(true)
  }

  function quitarBorrar() {
    setconfirmacion(false)
  }

  function closed() {
    cierrasesion()
  }

  return (
    <header className='header'>
      <Link to='/'>
        <div className='logo_'>
          <Logo className='svg' />
        </div>
      </Link>
      <nav className='nav'>
        <ul>
          {login && (
            <>
              {confiarmacion && (
                <>
                <p>Estas seguro que quieres cerrar sesion?</p>
                <button onClick={closed}>Si</button>
                <button onClick={quitarBorrar}>No</button>
                </>
              )}
              <li>
                <button onClick={botonconfirmacion}>Cierra sesion</button>
              </li>
              <li>
                <Link to='/adverts/new'>Sube tu articulo</Link>
              </li>
              <li>
                <Link to='/adverts'>Articulos</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
