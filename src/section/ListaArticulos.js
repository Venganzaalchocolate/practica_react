import { useEffect, useState } from 'react';
import { getTagsUrl } from '../api/service';
import './ListaArticulos.css';

function ListaArticulos() {
    const [tags, setTags] = useState([]);

    useEffect(()=>{getTagsUrl().then(response => setTags(response.data))}, [])

    return (
        <section className="ListaArticulos">
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </section>
    );
}

export default ListaArticulos;
