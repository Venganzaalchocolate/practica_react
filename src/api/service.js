
import storage from '../utils/storage';
import cliente, { cambiaAutorizacion} from './cliente';

export const getTags = () => {
    const url = '/api/v1/adverts/tags';
    return cliente.get(url);
};

export const getArticulos = (id='') => {
    const url = `/api/v1/adverts/${id}`;
    return cliente.get(url);
};

export const login = async (objetoCredenciales, guardar) => {
    const url = '/api/auth/login';
    try {
        const token = await cliente.post(url, objetoCredenciales);
        cambiaAutorizacion(token.data.accessToken);
        if (guardar) {
            storage.set('token', token.data.accessToken);
        }
    } catch (error) {
        return Promise.reject(error);
    }
};

export const creaArticulo = async (formulario) => {
    const url = '/api/v1/adverts';
    try {
        await cliente.post(url, formulario);
    } catch (error) {
        console.log(error);
    }
};

export const borrarArticuloApi = async (id='') =>{
    const url= `/api/v1/adverts/${id}`
    return cliente.delete(url)
}


