
# mi-proyecto-vue
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
# Ayudantía de Tecnologías Web

## Proyecto de Vue.js 3 con Vue Router

En esta ayudantía vamos a construir paso a paso un proyecto de Vue.js 2 utilizando Vue Router para manejar el enrutamiento.

### Paso 1: Crear un nuevo proyecto de Vue.js

Primero, instalamos Vue CLI, una herramienta que nos permite crear rápidamente estructuras de proyecto de Vue.js:

```bash
npm install -g @vue/cli
```
depues crearemos un proyecto con el nombre (mi-proyecto-vue)
```bash
vue create mi-proyecto-vue
```

seleccionamos el: 
```bash
as ([Vue 3] stylus, babel, router) 
```
ya que este nos crea el router por defecto 


# Paso 2: Instalar Vue Router
-nos dirigimos al proyecto que creamos 
cd mi-proyecto-vue
-(al momento de instalar el proyecto si es que no permitiste el router para el proyecto debes
instalar el siguiente comando)
npm install vue-router@3


# Vue.js Routing: `router-link` y `router-view`

Imagina que una página web es como un gran libro de cuentos, donde cada historia es una página diferente. En este libro, para ir de una historia a otra necesitas algo que te guíe. Aquí es donde entran en juego `router-link` y `router-view`, que son conceptos que se usan en Vue.js, un framework para construir páginas web.

## `router-link`

Piensa en `router-link` como marcapáginas mágicos. Cuando quieres ir a una historia específica, solo necesitas tocar el marcapáginas y ¡pum! te lleva directamente a esa historia. En términos de una página web, `router-link` es como un enlace que te permite navegar a diferentes partes de la página web o a otras páginas sin necesidad de cargar toda la página de nuevo.

## `router-view`

Ahora, imagina que `router-view` es el espacio en blanco de cada página de tu libro de cuentos donde se escribe la historia. Cada vez que usas uno de tus marcapáginas mágicos (`router-link`), `router-view` cambia para mostrarte la historia (o página web) que quieres leer. Es el lugar donde se muestra el contenido de la página a la que has navegado.

## En resumen

`router-link` es como un marcapáginas que te lleva a la parte del libro que quieres leer.
`router-view` es el espacio donde se muestra la historia que has elegido leer.

Ambos son esenciales para crear una navegación fluida y una estructura organizada en aplicaciones Vue.js con enrutamiento.




