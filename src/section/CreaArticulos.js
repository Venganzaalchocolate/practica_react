import './creaArticulos.css'
import { useEffect, useState } from 'react'
import { creaArticulo } from '../api/service'
import { useHistory } from 'react-router'
import { tags } from '../utils/tags'
import { element } from 'prop-types'

function CreaArticulo() {
  const history = useHistory()
  const [valor, setValor] = useState({
    name: '',
    sale: '',
    price: '',
    tags: [],
    file: ''
  })
  const [error, setError] = useState(null)
  const [listags, setTags] = useState([])

  const listatags = async () => {
    try {
      const listtags = await tags()
      setTags(listtags.data)
    } catch (error) {
      setError(error)
    }
  }

  const cambioCelda = evento => {
    setValor(estadoAnterior => ({
      ...estadoAnterior,
      [evento.target.name]: evento.target.value
    }))
  }

  const envioFormulario = async evento => {
    const form = new FormData(evento.target)
    evento.preventDefault()
    try {
      //const formulario = form(valor)
      await creaArticulo(form)
      history.push('/adverts')
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    listatags()
  }, [])

  return (
    <div className='creaArticulos'>
      <h1>Sube tu artículo</h1>
      <form className='form' onSubmit={envioFormulario}>
        <label for='Nombre'>¿Que quieres subir?</label>
        <input
          required
          autoFocus
          type='string'
          name='name'
          className='celdaForm'
          value={valor.name}
          onChange={cambioCelda}
          placeholder='name'
        />
        <div className='sale'>
          <label for='sale'>Venta</label>
          <input
            type='radio'
            name='sale'
            className='celdaForm'
            value={true}
            onChange={cambioCelda}
            id='sale'
          />
          <label for='compro'>Compro</label>
          <input
            type='radio'
            name='sale'
            className='celdaForm'
            value={false}
            onChange={cambioCelda}
            id='venta'
          />
        </div>

        <label for='Precio'>Precio</label>
        <input
          required
          type='number'
          name='price'
          className='celdaForm'
          value={valor.price}
          onChange={cambioCelda}
        />
        <select name='tags' multiple size={listags.length}>
          {listags.map(element => (
            <option value={element}>{element}</option>
          ))}
        </select>
        <input name='photo' type='file'></input>
        <button
          type='submit'
          disabled={!valor.name || !valor.sale || !valor.price}
        >
          Crear
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  )
}

export default CreaArticulo
