// views/HomeView.vue
<template>
  <div>
    <Navbar />
    <home-component />
  </div>
</template>

<script>
import HomeComponent from '../components/Home.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    'home-component': HomeComponent,
    Navbar
  }
}
</script>
