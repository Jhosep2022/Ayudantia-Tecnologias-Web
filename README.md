<<<<<<< HEAD
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
=======
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

seleccionamos el as ([Vue 3] stylus, babel, router) ya que este nos crea el router por defecto 

# Paso 2: Instalar Vue Router
-nos dirigimos al proyecto que creamos 
cd mi-proyecto-vue
-(al momento de instalar el proyecto si es que no permitiste el router para el proyecto debes
instalar el siguiente comando)
npm install vue-router@3


# Vue.js Routing: `router-link` y `router-view`

## `router-link`

`router-link` es un componente HTML que se utiliza para crear enlaces que permiten navegar entre diferentes rutas de la aplicación. Se representa como una etiqueta `<a>` o cualquier otro elemento HTML válido. El atributo `to` especifica la ruta de destino. Al hacer clic en el enlace, se actualiza la URL del navegador y se renderiza el componente correspondiente en `router-view`.

## `router-view`

`router-view` es un componente especial que representa el área de la interfaz de usuario donde se renderizan los componentes de las diferentes rutas. Solo puede existir una instancia de `router-view` por aplicación. Se utiliza la directiva `v-router-view` para indicarle a Vue dónde renderizar el componente de la ruta actual. El componente renderizado en `router-view` se define en la configuración de las rutas del enrutador.

## En resumen

`router-link` controla la navegación entre rutas, mientras que `router-view` muestra el contenido de la ruta actual. `router-link` se utiliza en la plantilla de los componentes, mientras que `router-view` se define en la configuración global del enrutador. Ambos componentes son esenciales para crear una navegación fluida y una estructura organizada en aplicaciones Vue.js con enrutamiento.



>>>>>>> 7339de3c06039f1307d2c892d4010e7b6e5294a1
