import { useEffect, useState } from 'react';
import { getArticulos } from '../api/service';
import { Loader } from '../utils/Loader';
import './ListaArticulos.css';
import noimagen  from '../images/nofoto.jpg'

function ListaArticulos({ setLoader, loader }) {
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        setLoader(true);
        getArticulos().then((response) => {
            setArticulos(response.data);
            setLoader(false)
        });
    }, []);

    return (
        <section className="ListaArticulos">
            {loader && (
                <div className="loader">
                    <Loader />
                </div>
            )}
            {articulos.map((articulo) => (
            <article key={articulo.id}>
                <div><img src={articulo.photo===null ?noimagen : process.env.REACT_APP_API_BASE_URL+articulo.photo }  alt="Girl in a jacket" width="100" height="100"/></div>
                <h2 >{articulo.name}</h2>
                <p>{articulo.price}</p>
                {articulo.sale ? <p>Vendo</p> : <p>Busco</p>}
            </article> ))}
        </section>
    );
}

export default ListaArticulos;
