import { useEffect, useState } from 'react';
import { getArticulos } from '../api/service';
import { Loader } from '../utils/Loader';
import './ListaArticulos.css';

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
            <ul>
                {articulos.map((articulo) => (
                    <li key={articulo.id}>{articulo.name}</li>
                ))}
            </ul>
        </section>
    );
}

export default ListaArticulos;
