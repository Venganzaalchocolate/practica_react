import { useState } from 'react';
import { login } from '../api/service';

function Login() {
    const [valor, setValor] = useState({ email: '', password: '' });
    const [guardar, setGuardar]= useState(false)

    //para actualizar un diccionario solo cambiando los campos iguales usamos el ...valor (mantiene los campos iguales y cambia los que les demos)
    const cambioCelda = (evento) => {
        setValor((estadoAnterior) => ({
            ...estadoAnterior,
            [evento.target.name]: evento.target.value,
        }));
    };

    const guardarToken =(evento) =>{
        setGuardar(estadoAnterior => estadoAnterior ? false : true)
    }

    const envioFormulario = async (evento) => {
        evento.preventDefault();
        await login(valor, guardar)
    };

    return (
        <form className="form" onSubmit={envioFormulario}>
            <h2>Usuario</h2>
            <input
                autoFocus
                type="email"
                name="email"
                className="celdaForm"
                value={valor.email}
                onChange={cambioCelda}
                placeholder="email"
            />
            <input
                type="password"
                name="password"
                className="celdaForm"
                value={valor.password}
                onChange={cambioCelda}
                placeholder="contraseña"
            />
            <input type="checkbox" value={guardar} onChange={guardarToken}/>
            <button type="submit" disabled={!valor.email|| !valor.password}>enviar</button>
            
        </form>
    );
}

export default Login;
