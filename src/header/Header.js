import './Header.css';
import React from 'react';
import {ReactComponent as Logo } from "./../images/logo.svg";

function Header() {
    return (
        <header className="header">
            <div className="logo"><Logo className="svg"/></div>
            <nav className="nav">
                <ul>
                    <li>Login</li>
                    <li>Crea Articulo</li>
                    <li>Buscar</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
