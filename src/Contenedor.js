import Footer from './footer/Footer'
import Header from './header/Header'
import './contenedor.css'
import { BrowserRouter } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import NotFound from './NotFound'
import Articulo from './section/Articulo'
import CreaArticulo from './section/CreaArticulos'
import Login from './section/Login'
import PrivateRoute from './routes/rutasPrivadas'
import Filtro from './section/Filtro'
import Articulos from './section/Articulos'
import ListaArticulos from './section/ListaArticulos'

function Contenedor() {
  return (
    <div className='grid'>
      <BrowserRouter>
        <Header />

        <div className='contenido'>
          <Switch>
            <PrivateRoute exact path='/adverts/new' component={CreaArticulo} />
            <PrivateRoute exact path='/adverts/:id' component={Articulo} />
            <PrivateRoute exact path='/adverts' > 
              <Articulos/>
            </PrivateRoute>
            <PrivateRoute exact path='/404' component={NotFound} />
            <PrivateRoute exact path='/filtro' component={Filtro} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/'><Redirect to='/adverts' /></Route>
            <Route path='*'><Redirect to='/404' /></Route>
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Contenedor
