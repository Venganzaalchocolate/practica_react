import axios from 'axios';

const cliente = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const cambiaAutorizacion = (token) =>
    (cliente.defaults.headers.common['Authorization'] = `Barer ${token}`);

export default cliente;