import axios from 'axios';

const cliente = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

cliente.interceptors.response.use(
    (response) => response,
    (error) => {
        if (!error.response) {
            return Promise.reject({ message: error.message });
        }
        return Promise.reject({
            message: error.response.statusText,
            ...error.response,
            ...error.response.data,
        });
    }
);

export const cambiaAutorizacion = (token) => {
    cliente.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const eliminarTokenCabecera = () =>{
    delete cliente.defaults.headers.common['Authorization']
}


export default cliente;
