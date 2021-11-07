import { useEffect, useState } from 'react'
import { getArticulos } from '../api/service'
import Filtro from './Filtro'
import ListaArticulos from './ListaArticulos'
import './Articulos.css'

function Articulos() {
  const [articulos, setArticulos] = useState([])

  const obtenerArticulos = async () => {
    try {
      const objetoArticulos = await getArticulos()
      setArticulos(objetoArticulos.data)
    } catch (error) {
      setArticulos(error)
    }
  }

  const cambiarArticulos = lista => {
    setArticulos(lista)
  }

  useEffect(() => {
    obtenerArticulos()
  }, [setArticulos])

  return (
    <div className='contenderFiltroArticulo'>
      <ListaArticulos articulos={articulos} />
      <Filtro articulos={articulos} cambiarArticulos={cambiarArticulos} />
    </div>
  )
}

export default Articulos
