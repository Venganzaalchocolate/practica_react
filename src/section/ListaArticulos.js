import { useEffect, useState } from 'react'
import { getArticulos } from '../api/service'
import './ListaArticulos.css'
import noimagen from '../images/nofoto.jpg'
import { Link } from 'react-router-dom'
import { element } from 'prop-types'

const url = process.env.REACT_APP_API_BASE_URL

function ListaArticulos(articulos) {
  const [error, setError] = useState(null)
  const [art, setart]=useState([])

  const obtenerArticulos = async () => {
    try {
        return await articulos;
    } catch (error) {
        setError(error.message);
    }
};
  

  useEffect(() => {
    obtenerArticulos().then(function (datos) {
      const datosArticulos=datos.articulos;
      setart(datosArticulos)})
  }, [articulos])

  return (
    <section className='listaArticulos'>
      {error && <div>{error}</div>}
      {art.length > 0 ? (
        art.map(articulo => (
          <Link to={`/adverts/${articulo.id}`}>
            <article key={articulo.id}>
              <div>
                <img
                  className='imagen'
                  src={
                    articulo.photo === null ? noimagen : url + articulo.photo
                  }
                />
              </div>
              <h2>{articulo.name}</h2>
              <p>{articulo.price}</p>
              {articulo.sale ? <p>Vendo</p> : <p>Busco</p>}
              {articulo.tags.map(element=>(<p>{element}</p>))}
            </article>
          </Link>
        ))
      ) : (
        <Link to='/adverts/new'>
          <h1>No hay articulos, crea el tuyo</h1>
        </Link>
      )}
    </section>
  )
}

export default ListaArticulos
