// views/PerfilView.vue
<template>
  <div>
    <Navbar />
    <perfil-component />
  </div>
</template>

<script>
import PerfilComponent from '../components/Perfil.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    'perfil-component': PerfilComponent,
    Navbar
  }
}
</script>
