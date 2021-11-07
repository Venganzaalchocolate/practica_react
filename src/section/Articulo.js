import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { borrarArticuloApi, getArticulos, login } from '../api/service';
import noimagen from '../images/nofoto.jpg';
import { useHistory } from 'react-router';

function Articulo() {
    const [articulo, setArticulo] = useState('');
    const [botonBorrar, setbotonBorrar] = useState(false);
    const location = useLocation();
    const id = location.pathname.split('/');
    const id2 = id[2];
    const history = useHistory()

    function borrarArticulo() {
        setbotonBorrar(true);
    }

    function quitarBorrar() {
        setbotonBorrar(false);
    }

    function borrarDefArticulo() {
        if (login) {
            borrarArticuloApi(id2);
            history.push('/adverts')
        } else {
            history.push('/login')
        }
        
    }

    useEffect(() => {

        const id = location.pathname.split('/');
        const id2 = id[2];

        async function getArt (id2) {
            try {
                const respuesta= await getArticulos(id2)
                setArticulo(respuesta.data)
            } catch (error) {
                history.push('/404')
            } 
            
        }
        
        getArt(id2)
    }, []);

    return (
        <section className="articulo">
            
            <article key={articulo.id}>
                <div>
                    <img
                        src={
                            articulo.photo === null
                                ? noimagen
                                : process.env.REACT_APP_API_BASE_URL +
                                articulo.photo
                        }
                        width="100"
                        height="100"
                    />
                </div>
                <h2>{articulo.name}</h2>
                <p>{articulo.price}</p>
                {articulo.sale ? <p>Vendo</p> : <p>Busco</p>}
                <p>{articulo.tags}</p>
                <button className="borrar" onClick={borrarArticulo}>
                    Borrar
                </button>
                {botonBorrar && (
                    <div>
                        <p>Estas seguro que quieres borrar?</p>
                        <button onClick={borrarDefArticulo}>Si</button>
                        <button onClick={quitarBorrar}>No</button>
                    </div>
                )}
            </article>
        </section>
    );
}

export default Articulo;
