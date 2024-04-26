// App.vue
<template>
  <!-- Esta es la estructura HTML del componente. -->
  <div id="app">
    <!-- router-view es un componente especial de Vue Router. -->
    <!-- Actúa como un marcador de posición donde se renderizan los componentes de la ruta actual. -->
    <!-- Cuando cambias de ruta, router-view se actualiza para mostrar el componente de esa ruta. -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
