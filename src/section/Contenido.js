import { useState, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import NotFound from '../NotFound';
import './Contenido.css';
import CreaArticulo from './CreaArticulos';
import ListaArticulos from './ListaArticulos';
import Login from './Login';


function Contenido({ estaLogin, login }) {
    const [loader, setLoader] = useState(false);
    const referencia = useRef(null)

    function estadoLoader(estado) {
        setLoader(estado);
    }

    return (
        <section className="contenido">
            <Switch>
                <Route exact path="/login">
                    <Login
                        estaLogin={estaLogin}
                        loader={loader}
                        setLoader={estadoLoader}
                    />
                    ;
                </Route>
                <Route exact path="/articulos">
                    {!login ? (
                        <Redirect to="/login" />
                    ) : (
                        <ListaArticulos
                            loader={loader}
                            setLoader={estadoLoader}
                        />
                    )}
                </Route>
                <Route exact path="/creaarticulos">
                    {!login ? (
                        <Redirect to="/login" />
                    ) : (
                        <CreaArticulo
                            estaLogin={estaLogin}
                            loader={loader}
                            setLoader={estadoLoader}
                        />
                    )}
                </Route>
                <Route exact path="/404">
                    <NotFound/>
                </Route>
                <Route path='/'>
                    <Redirect to="/articulos" />
                </Route>

                
            </Switch>
        </section>
    );
}

export default Contenido;
