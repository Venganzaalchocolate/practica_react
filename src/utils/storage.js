const storage = {
    get(clave) {
        const valor = localStorage.getItem(clave);
        if (!valor) {
            return null;
        } else {
            return JSON.parse(valor);
        }
    },

    set(clave, valor) {
        localStorage.setItem(clave, JSON.stringify(valor))
    },

    remove(valor) {
        localStorage.removeItem(valor)
    },
};

export default storage;
