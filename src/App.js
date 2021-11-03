import React from 'react';
import { useState } from 'react';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Contenido from './section/Contenido';
import { cerrarSesion, comprobacionInicialToken } from './utils/token';
import { BrowserRouter as Router } from 'react-router-dom';

const tieneCabeceraConToken = comprobacionInicialToken();

function App() {
    const [login, setlogin] = useState(tieneCabeceraConToken);

    const estadoLogin = () => setlogin(true);

    const cierrasesion=()=> {
        cerrarSesion();
        setlogin(false);

    }
    return (
        <Router>
            <div className="grid">
                <Header login={login} handleLogout={cierrasesion} />
                <Contenido estaLogin={estadoLogin} login={login} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
