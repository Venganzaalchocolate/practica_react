import storage from '../utils/storage';
import cliente, { cambiaAutorizacion } from './cliente';

export const getTagsUrl = () => {
    const url = '/api/v1/adverts/tags';
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
        return error;
    }
};
