import { useState } from 'react';
import { filtrarNombre, filtrarPrecio, filtrarTags, filtroSale } from '../utils/filtros';

function Filtro({articulos, cambiarArticulos}) {
    const [valor, setValor] = useState({
        name: '',
        desde: 0,
        hasta: 0,
        sale: false,
        todo: false,
    });
    const [error, setError] = useState(null);
    
    const obtenerArticulos = async () => {
        try {
            return await articulos;
        } catch (error) {
            setError(error.message);
        }
    };

    const refrescar =()=>{
        window.location.replace('');
    }


    const filtrar = async (evento) => {
        evento.preventDefault();
        const form = new FormData(evento.target);
        obtenerArticulos().then(function (datos) {
            const datosArticulos=datos;
            const filtronombre = filtrarNombre(form.get('name'), datosArticulos)
            const filtroprecio = filtrarPrecio(filtronombre, form.get('hasta'), form.get('desde'))
            const filtrotags= filtrarTags(filtroprecio, form.getAll('tags'))
            console.log(filtrotags)
            const filtrosale= filtroSale(filtrotags, form.get('sale'))
            console.log(filtrosale)
            cambiarArticulos(filtrosale)
        }
            
        )
        
    };

    const cambioCelda = (evento) => {
        setValor((estadoAnterior) => ({
            ...estadoAnterior,
            [evento.target.name]: evento.target.value,
        }));
    };

    return (
        <div className='filtro'>
            <h1>Que Quieres buscar</h1>
            <form className="form" onSubmit={filtrar}>
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
                    <label for="sale">Compra</label>
                    <input
                        type="radio"
                        name="sale"
                        className="celdaForm"
                        value={false}
                        onChange={cambioCelda}
                        id="venta"
                    />
                </div>
                <label>Desde</label>
                <input
                    min='0'
                    type="number"
                    name="desde"
                    className="celdaForm"
                    value={valor.desde}
                    onChange={cambioCelda}
                    placeholder="desde"
                />
                <label>Hasta</label>
                <input
                    min='0'
                    type="number"
                    name="hasta"
                    className="celdaForm"
                    value={valor.hasta}
                    onChange={cambioCelda}
                    placeholder="hasta"
                />
                <select name="tags" multiple size="4">
                    <option value="lifestyle">lifestyle</option>
                    <option value="mobile">mobile</option>
                    <option value="motor">motor</option>
                    <option value="work">work</option>
                </select>
                <button type="submit">Filtrar</button>
                <button onClick={refrescar}>Limpiar</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
}

export default Filtro;
