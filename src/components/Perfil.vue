<template>
    <div>
      <h1>Perfil</h1>
      <div>
        <img :src="profilePicture" alt="Foto de perfil" />
      </div>
      <div>
        <h2>{{ firstName }} {{ lastName }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Perfil',
    data() {
      return {
        firstName: 'Juan',
        lastName: 'Pérez',
        profilePicture: 'https://via.placeholder.com/150'
      }
    }
  }
  </script>