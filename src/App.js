import React from 'react'
import { useState } from 'react'
import { cerrarSesion, comprobacionInicialToken } from './utils/token'
import { AuthContextProvider } from "./utils/contexto.js"
import Contenedor from './Contenedor'
import { useHistory } from 'react-router'

const tieneCabeceraConToken = comprobacionInicialToken()

function App() {
  const history = useHistory()
  const [login, setlogin] = useState(tieneCabeceraConToken)

  const cierrasesion = () => {
    cerrarSesion()
    setlogin(false)
  }

  const setlog = () => {
    setlogin(true)
  }
  return (
    <AuthContextProvider value={{ login, cierrasesion, setlog, history }}>
      <Contenedor/>
    </AuthContextProvider>
  )
}

export default App
