import './NotFound.css';
import React from 'react';

function NotFound() {

    return (
        <div className="b_notFound">
            <div class="notFound">
                <h1>OOPS!!</h1>
                <h2>
                    No encontramos lo que buscas, por favor vuelve a intentarlo
                </h2>
                <a className='boton_404' href="/adverts">Volver</a>
            </div>
        </div>
    );
}

export default NotFound;
