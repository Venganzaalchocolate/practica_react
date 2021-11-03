import './Header.css';
import React from 'react';
import { ReactComponent as Logo } from './../images/logo.svg';
import { Link } from 'react-router-dom';

function Header({ login, handleLogout }) {
    return (
        <header className="header">
            <Link to="/">
                <div className="logo_">
                    <Logo className="svg"/>
                </div>
            </Link>
            <nav className="nav">
                <ul>
                    {login ? (
                        <li onClick={handleLogout}>Cierra sesion</li>
                    ) : (
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                    <li>
                        <Link to="/creaarticulos">Crea Articulo</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
