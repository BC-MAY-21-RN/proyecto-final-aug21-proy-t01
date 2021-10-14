![BrightCoders Logo](img/logo-bc.png)

# Nombre del proyecto
Gamerpot

## Problematica que atiende
El problema o tema que se quiere atender es el de las posibles molestias que las personas suelen tener al querer consultar información
relacionada con videojuegos debido a la dispersión de dicha información en múltiples sitios web, como conocer los videojuegos más recientes del mercado, encontrar ofertas de videojuegos en descuento o conocer los mejores videojuegos
disponibles en distintas plataformas.

## Propuesta de solución
La propuesta de solución es crear una aplicación móvil que integre en una sola plataforma múltiples características que permitan crear una comunidad
relacionada a los videojuegos en la que los usuarios puedan registrarse y personalizar su perfil, conocer información como los videojuegos más recientes salidos en el mercado, ofertas
de videojuegos de múltiples tiendas online, conocer a otros usuarios, etc.

## Definición de requerimientos del MVP

### Requerimientos funcionales

1. **Manejo de usuarios**
    1. El sistema deberá permitir que el usuario cree una cuenta nueva. Los datos mínimos que el sistema debe solicitar son:
        - Nombre de usuario.
        - Correo electrónico.
        - Contraseña.
    2. El sistema deberá permitir que el usuario inicie sesión en una cuenta usando su correo electrónico y contraseña.
    3. El sistema deberá permitir que el usuario pueda cerrar su sesión.

2. **Información de videojuegos**
    1. El sistema deberá contar con una sección en la que se visualice videojuegos recientes.
    2. El sistema deberá contar con una sección en la que se visualice un top de mejores videojuegos.
    3. El sistema deberá permitir consultar información específica de un videojuego de las secciones detalladas en los requerimientos 2.1 y 2.2. Esta información deberá ser presentada en una pantalla de la aplicación móvil.
        - Título.
        - Horas promedio de juego.
        - Imágenes.
        - Sinopsis.
        - Plataformas disponibles.
        - Género.
        - Desarrollador.
        - Publisher.
        - Sitio web.
        - Fecha de salida al mercado.
        - Puntuación de metacritic.
    4. El sistema deberá permitir a los usuarios dar like o eliminar su like a los videojuegos.

3. **Wishlist**
    1. El sistema deberá permitir agregar videojuegos a una wishlist.
    2. El sistema deberá permitir eliminar videojuegos de la wishlist.
    3. El sistema deberá permitir que el usuario consulte su wishlist.

4. **Ofertas de videojuegos**
    1. El sistema deberá contar con una sección en la que se visualicen ofertas de videojuegos.
        - Imagen.
        - Nombre del videojuego.
        - Porcentaje de descuento.
        - Precio normal.
        - Precio con descuento.
        - Puntuación de metacritic.
        - Tienda que lo oferta.
    2. El sistema deberá permitir filtrar ofertas.
        - Por nombre.
        - Por precio minimo.
        - Por precio máximo.
    3. El sistema deberá permitir cambiar la moneda en la que se muestran los precios de las ofertas.
        - Dólar estadounidense.
        - Peso mexicano.

5. **Comentarios**
    1. El sistema deberá presentar una sección de comentarios en las páginas de información específica de un videojuego (requisito 2.3).
    2. El sistema deberá permitir escribir comentarios a páginas de información específica de un videojuego (requisito 2.3).
    3. El sistema deberá permitir borrar comentarios.
    4. El sistema deberá permitir editar comentarios.

6. **Contacto**
    1. El sistema deberá contar con una sección de contacto para que los usuarios puedan contactar a los administradores. Los datos mínimos a solicitar son:
        - Correo electrónico.
        - Motivo del contacto.
    2. El sistema deberá enviar un correo electrónico a la administración de GAMERPOT con los detalles listados en el requisito 6.1.

7. **Perfil de usuario**
    1. El sistema deberá contar con una sección en la que el usuario podrá consultar su información de perfil.
        - Nombre
        - Imagen de perfil
        - Descripción
    2. El sistema deberá permitir al usuario editar la información de su perfil.
        - Nombre
        - Imagen de perfil
        - Descripción
    3. El sistema deberá permitir ver los perfiles de otros usuarios al dar clic en sus nombres en un comentario que hayan realizado.


### Requerimientos no funcionales
1. **Usabilidad**
	1. Validaciones datos
		1. El sistema deberá validar los datos introducidos por el usuario para el registro.
        - Nombre debe contener entre 5 a 30 caracteres.
        - El email debera tener una estructura válida. (*example@mail.com*)
        - La contraseña debera tener entre 8 a 30 caracteres y debera contener por lo menos:
            - Una letra minúscula.
            - Una letra mayúscula.
            - Un número.
            - Un símbolo.
    3. El sistema deberá validar los datos introducidos por el usuario para el inicio de sesión.
        - El email debera tener una estructura válida. (*example@mail.com*)
		2. El sistema deberá validar los datos recibidos por otras conexiones.

2. **Rendimiento**
	1. Tiempo de respuestas
		1. El sistema deberá tener un tiempo máximo de respuesta al realizar un comentario y actualizar la bandeja de 20s.
		2. El sistema deberá tener un tiempo máximo para registrar un usuario de 20s.
		3. El sistema deberá tener un tiempo máximo para iniciar sesión de 15s

3. **Administración de la base de datos**
	1. Se debera emplear SQLite como base de datos.

4. **Librería para la conexión de la base de datos**
	1. Se deberá hacer uso del paquete react-native-sqlite-orm el cual es un ORM para SQLite.

5. **Interfaces**
	1. **Interfaces de usuario**
		1. **Registro.** En esta página se podrá crear una cuenta de usuario nueva.
		2. **Inicio de sesión.** En esta página se podrá iniciar sesión con una cuenta que esté registrada en el sistema.
		3. **Videojuegos recientes.** En esta página se podrá consultar los videojuegos más recientes en el mercado.
		4. **Ofertas de videojuegos.** En esta página se podrá consultar ofertas de videojuegos.
		5. **Top de mejores videojuegos.** En esta página se podrá consultar una lista de los mejores videojuegos del mercado.
		6. **Página individual de un videojuego.** En esta página se podrá consultar información específica de un videojuego de las páginas 3, 5 y 7 de este punto.
		7. **Wishlist.** En esta página se podrá consultar los videojuegos que se tienen agregados a la wishlist. Esta página sólo es accesible iniciando sesión con una cuenta de usuario.
		8. **Perfil de usuario.** en esta página el usuario podrá consultar y editar la información de su perfil.

	2. **Interfaces de Software**
		1. Ofertas de videojuegos
			- Nombre: Cheapshark API
			- Tipo: API REST
			- Fuente: https://apidocs.cheapshark.com/
			- Motivo de uso: Se deberá emplear esta API para obtener listas de ofertas de videojuegos.

		2. Listas de videojuegos
			- Nombre: Rawg.io
			- Tipo: API REST
			- Fuente: https://api.rawg.io/docs/
			- Motivo de uso: Se deberá emplear esta API para obtener una lista de videojuegos que serán desplegados en el sitio web.

		3. Conversor de moneda
			- Nombre: Currency Converter API
			- Tipo: API REST
			- Fuente: https://www.currencyconverterapi.com/docs
			- Motivo de uso: Se deberá emplear esta API para realizar cambios de moneda.
		
## Diseño del MVP

Incluyan en [esta carpeta](/design) su propuesta de diseño

## Recursos

- [Minimum Viable Product](https://www.agilealliance.org/glossary/mvp/#q=~(infinite~false~filters~(tags~(~'mvp))~searchTerm~'~sort~false~sortDirection~'asc~page~1))
- [Minimum Viable Product (MVP)](https://www.productplan.com/glossary/minimum-viable-product/)
- [Design Thinking](https://www.interaction-design.org/literature/topics/design-thinking)
- [El proceso de pensamiento de diseño](https://www.youtube.com/watch?v=_r0VX-aU_T8)
- [Metodología Design Thinking. Ejemplos](https://www.youtube.com/watch?v=_ul3wfKss58) 
- [Design Thinking ejemplo sencillo](https://www.youtube.com/watch?v=_H33tA2-j0s)
