# Práctica fundamentos React

Crear una aplicación de tipo dashboard que será la interfaz gráfica desde
la que podremos gestionar el API de anuncios Nodepop.

### Backend

- Usaremos el siguiente proyecto como backend.

  > [nodepop-api](https://github.com/davidjj76/nodepop-api)

- Una vez en marcha, tendremos nuestro backend corriendo en el puerto 3001
  (configurable via archivo .env). Tenéis disponible un swagger en la ruta `/swagger`
  donde podréis probar los diferentes endpoints y ver cómo pasar los datos en las
  peticiones.

- En el backend tendremos disponibles los siguientes endpoints:

  - `/api/auth/signup`
    - **_POST_**
      - Nos permite crear usuarios.
  - `/api/auth/me`
    - **_GET_**
      - Nos devuelve la información del usuario autenticado
  - `/api/auth/login`
    - **_POST_**
      - Devuelve un token de acceso cuando le pasamos un email y password de un usuario correctos.
  - `/api/v1/adverts`
    - **_GET_** - Devuelve un listado de anuncios, con la posiblidad de aplicar
      filtros con la query que enviemos en la URL. Los filtros posibles son: - **_name=coche:_** que el nombre empiece por “coche”, sin importar
      MAY/MIN - **_sale=true/false:_** si el anuncio es de compra o venta - **_price=0-25000:_** precio dentro del rango indicado - **_tags=motor,work...:_** que tenga todos los tags
    - **_POST_**
      - Crea un anuncio.
  - `/api/v1/adverts/tags`
    - **_GET_**
      - Devuelve el listado de tags disponibles.
  - `/api/v1/adverts/:id`
    - **_GET_**
      - Devuelve un único anuncio por Id.
    - **_DELETE_**
      - Borra un anuncio por Id.

  > Todos los endpoints bajo `/adverts` requieren que se envíe el token
  > proporcionado en el endpoint de **_login_**. Se ha de enviar en la cabecera de la petición de la siguiente forma:

  ```
  Header[‘Authorization’] = `Bearer ${token}`
  ```

  > Los datos del backend son persistidos en una base de datos sqlite en el directorio
  > `/data` (de ese modo no os teneís que preocupar de crear bases de datos).
  > Las fotos subidas al backend son almacenadas en el directorio `/uploads` y servidas
  > por el backend cómo contenido estático en `/public` (la ruta pública de cada foto es
  > almacenada en la base de datos).

### Frontend
---
- La aplicación frontend será una SPA (Single Page Application) desarrollada con
  React como librería principal. Se usó `npx create-react-app` para la inicialización del proyecto

- En la aplicación se implementarán una serie de rutas (enrutado en el navegador)
  divididas en dos grupos: **_Públicas_** y **_Protegidas_**. En cada una de la rutas se renderizará un componente principal tal como se explica a continuación.

- **_Públicas_** - Accesibles para cualquier usuario.
  - `/login` - **_LoginPage_**
- **_Protegidas_** - Accesibles **_SOLO_** para usuarios autenticados. Cualquier acceso
  de un usuario no autenticado a cualquiera de estas rutas redireccionará a
  `/login`.
  - `/` - Redirecciona a `/adverts`
  - `/adverts` - **_AdvertsPage_**
  - `/adverts/:id` - **_AdvertPage_**
  - `/adverts/new` - **_NewAdvertPage_**
    > Para cualquier otra url que no coincida se creará un componente
    > **_NotFoundPage_** que informará al usuario que la página solicitada no
    > existe (la típica 404)

### Notas para el profesor

- No he tenido tiempo de entregarlo como me habría gustado, el estilo es horroroso y caótico, y el código debería estar más limpio. Le he dedicado todo el tiempo que me ha sido posible.
- Con los filtros he tenido un problema, a ver, el componente padre suministra la lista de articulos a sus hijos filtro y listaarticulos. Filtro, tiene la capacidad de cambiar la lista de articulos filtrandolos, y como los articulos ahora están filtrados listaasticulos los muestra, pero..... y aquí es donde he tenido el problema si vuelvo a filtrar sin refrescar la página me filtra sobre los datos filtrados. Y no puedo refrescar la página antes de pasar los filtros porque perderia la info de los filtros. No se si me he explicado. Como podría hacerlo?. Gracias !!!! PD: He hecho una trampilla porque si le das al botón limpiar te refresca la página y entonces puedes volver a buscar. 
- Ha veces me ha dado problemas al borrar archivos, aun que no contenian nada se quedaba como guardado de alguna forma y si no los importaba (aun que estuviesen vacios) me saltaba error. ¿Por qué puede ser?
