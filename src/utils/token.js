import { cambiaAutorizacion, eliminarTokenCabecera} from '../api/cliente';
import storage from './storage';

export function comprobacionInicialToken() {
    const token = storage.get('token');
    cambiaAutorizacion(token);

    if (!!token) {
        return true;
    } else {
        return false;
    }
}

export function cerrarSesion() {
    eliminarTokenCabecera()
    storage.remove('token')
}
