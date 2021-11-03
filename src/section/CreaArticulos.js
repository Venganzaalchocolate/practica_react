import './creaArticulos.css';
import { useState } from 'react';
import { creaArticulo } from '../api/service';

function CreaArticulo() {
    const [valor, setValor] = useState({
        name: '',
        sale: '',
        price: '',
        tags: [],
        file:'',
    });
    const [error, setError] = useState(null);


    const cambioCelda = (evento) => {
        setValor((estadoAnterior) => ({
            ...estadoAnterior,
            [evento.target.name]: evento.target.value,
        }));
    };

    const envioFormulario = async (evento) => {
        const form = new FormData(evento.target)
        evento.preventDefault();
        try {
            //const formulario = form(valor)
            await creaArticulo(form)
            const paginaActual = window.location.href
            window.location.href='/articulos'

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="creaArticulos">
            <h1>Sube tu artículo</h1>
            <form className="form" onSubmit={envioFormulario}>
                <label for="Nombre">¿Que quieres subir?</label>
                <input
                    autoFocus
                    type="string"
                    name="name"
                    className="celdaForm"
                    value={valor.name}
                    onChange={cambioCelda}
                    placeholder="name"
                />
                <div className="sale">
                <label for="sale">Venta</label>
                <input
                    type="radio"
                    name="sale"
                    className="celdaForm"
                    value={true}
                    onChange={cambioCelda}
                    id="sale"
                />
                <label for="compro">Compro</label>
                <input
                    type="radio"
                    name="sale"
                    className="celdaForm"
                    value={false}
                    onChange={cambioCelda}
                    id="venta"
                />
                </div>
                
                <label for="Precio">Precio</label>
                <input
                    type="number"
                    name="price"
                    className="celdaForm"
                    value={valor.price}
                    onChange={cambioCelda}
                />
                <select name="tags" multiple size='4'>
                    <option value="lifestyle">lifestyle</option>
                    <option value="mobile">mobile</option>
                    <option value="motor">motor</option>
                    <option value="work">work</option>
                </select>
                <input
                    type="file"
                    value={valor.file}
                    onChange={cambioCelda}>

                </input>
                <button
                    type="submit"
                    disabled={!valor.name || !valor.sale || !valor.price}
                >
                    Crear
                </button>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
}

export default CreaArticulo;
