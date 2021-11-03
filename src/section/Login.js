import { useState } from 'react';
import { login } from '../api/service';
import { Loader } from '../utils/Loader';
import './login.css'

function Login({ estaLogin, setLoader, loader}) {
    const [valor, setValor] = useState({ email: '', password: '' });
    const [guardar, setGuardar] = useState(false);
    const [error, setError] = useState(null);
    

    //para actualizar un diccionario solo cambiando los campos iguales usamos el ...valor (mantiene los campos iguales y cambia los que les demos)
    const cambioCelda = (evento) => {
        setValor((estadoAnterior) => ({
            ...estadoAnterior,
            [evento.target.name]: evento.target.value,
        }));
    };

    const guardarToken = () => {
        setGuardar((estadoAnterior) => (estadoAnterior ? false : true));
    };

    const envioFormulario = async (evento) => {
        evento.preventDefault();
        setLoader(true);
        try {
            await login(valor, guardar);
            estaLogin();
            const paginaActual = window.location.href
            window.location.href='/articulos'

        } catch (error) {
            error.status === 401
                ? setError('Usuario y/o contraseña incorrectos')
                : setError(error.message);
        } finally {
            setLoader(false);
        }
    };

    return (
        <form className="login" onSubmit={envioFormulario}>
            <h1>Login</h1>
            <h3>Usuario</h3>
            <input
                autoFocus
                type="email"
                name="email"
                className="celdaForm"
                value={valor.email}
                onChange={cambioCelda}
                placeholder="email"
            />
            <h3>Contraseña</h3>
            <input
                type="password"
                name="password"
                className="celdaForm"
                value={valor.password}
                onChange={cambioCelda}
                placeholder="contraseña"
            />
            <input type="checkbox" value={guardar} onChange={guardarToken} />
            <button type="submit" disabled={!valor.email || !valor.password}>
                enviar
            </button>
            {error && <div>{error}</div>}
            {loader && (
                <div className="loader">
                    <Loader />
                </div>
            )}
        </form>
    );
}

export default Login;
