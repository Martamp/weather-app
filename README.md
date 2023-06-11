# La APP

Proyecto creado con React y JS para consultar el tiempo de forma global. Se recoge la ubicacion del usuario en primera instancia, pero es posible consultar y buscar el clima de otras ciudades e incluso guardar en favoritos las ciudades que el usuario quiera tener a mano.

## Scripts disponibles

Para comenzar con el proyecto:

### `npm install`

Este proyecto cuenta con varias dependencias, listadas mas adelante, para tenerlo disponible ejecuta el comando `npm install`, antes de iniciarla.\

### `npm start`

Para arrancar la App ejecuta `npm start`, se abrira inmediatamente en el puerto deseado.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

Si quieres hacer cambios en el codigo, recarga el navegador. Podras ver las peticiones realizadas en la pestaña de Network.

### `npm test`

Para ejecutar los tests lanza `npm test`, recorrera todos los test disponibles en tu terminal

## Cómo funciona la APP

Una vez levantado el royecto, el navegador solicitará tu ubicación para iniciar con los datos actualizados de la posición del usuario. Podrás ver el lugar donde se encuentra, el tiempo actual, la humedadad actual, las temperaturas minimas y máximas y la previsión para los próximos días.

### Buscar por ciudad

Para buscar otras ubicaciones, haz click en el icono del buscador, se desplegará la barra de búsqueda. Debido a la gratuidad de la API consultada, es conveniente escribir lentamente para no sobrepasar las peticiones por minuto disponibles. Las ciudades o paises que concuerden con los datos escritos irán apareciendo debajo del buscador, si no aparece ninguna es posible que o bien se estén superando las peticiones por segundo o bien no coincida con ninguna ciudad. Para volver a ocultar la barra de busqueda, haz click en el icono de la lupa.

### Añade a favoritos tus ciudades

Para consultar el tiempo de una de las ciudades listadas, haz click en la tarjeta, si solo quieres añadirla en favoritos, haz click en el icono de la estrella. Una vez limpies los campos de búsqueda o selecciones una ciudad, los datos se recargarán en la pagina y podrás ver la sección de favoritos ahora desplegada. El máximo de favoritos es de 3 ciudades, si se desea eliminar un favorito, puede volver a clickar el icono de la estrella para que desaparezca del listado

### Tu APP

Tu APP está dispoible tanto para Desktop como en version mobile

## Dependencias y tecnologías usadas :hammer_and_wrench:

### Herramientas

1. **Javascript** - Lenguaje de programación.
2. **React** - Framework para el desarollo de la interfaz.
3. **Styled components** - Para añadir estilos.
4. **React testing library - User event** - Para crear los tests.
5. **React icons** - Para obtener los iconos del clima.
6. **Countries list** - Para obtener los paises consultados.
7. **Git** - Para el control de versiones.
8. **Github** - Como repositorio remoto.

### APIs

1. **Open Weather Map - Previsión 5 días** - [https://openweathermap.org/forecast5](https://openweathermap.org/forecast5)
2. **Open Weather Map - Tiempo actual** - [https://openweathermap.org/current](https://openweathermap.org/current)
3. **GeoDB Cities - Listado de ciudades** - [https://rapidapi.com/wirefreethought/api/geodb-cities/](https://rapidapi.com/wirefreethought/api/geodb-cities/)

## Información del proyecto

Uso de Hooks para manejar los estados internos
Uso de contexto para facilitar el manejo de ls datos a través de la APP
Carpeta utils para almacenar las funcionalidades reutilizables
Carpeta components para almacenar aquellos componentes que no sean vistas y componetizar la APP
Carpeta Views: disponible para incluir mas vistas en un futuro

### Otros datos de interés

Las API Keys quedan expuestas en este repositorio para que se pueda probar en local, en caso de querer ocultarlas en un futuro se manejaría de esta forma:

Crearíamos un archivo en la terminal de configuración:

`myweatherFile config.js`

Guardaríamos las API Keys en un objeto dentro del archivo:

```javascript
const config = {
  MY_KEY: '123456',
};
```

Sustituye las keys por tu nuevo objeto:

`const mykey = config.MY_KEY;`

Quedaría algo asi:

`url: 'https://www.myapi.com/?query&sig=' + mykey`

Crea un archivo .gitignore para tu archivo de configuración:

`url: 'myweatherFile .gitignore`

En el archivo `.gitignore` añade los archivos que no quieras que se pusheen, en este caso el `config.js`, una vez añadas los cambios el archivo no debría aparecer entre los cambios subidos al repo
