import { useEffect, useState } from 'react';
import { getTagsUrl } from '../api/service';
import './ListaArticulos.css';

function ListaArticulos() {
    const [tags, setTags] = useState([]);

    useEffect(()=>{getTagsUrl().then(response => setTags(response.data))}, [])

    return (
        <section className="ListaArticulos">
            <ul>
                {tags.map((tag) => (
                    <li key={tag.id}>{tag}</li>
                ))}
            </ul>
        </section>
    );
}

export default ListaArticulos;
