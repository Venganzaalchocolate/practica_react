import './Contenido.css';
import ListaArticulos from './ListaArticulos';
import Login from './Login';

function Contenido() {
    return (
        <section className="contenido">
            {' '}
            
            <Login/>
            <ListaArticulos />
        </section>
    );
}

export default Contenido;
