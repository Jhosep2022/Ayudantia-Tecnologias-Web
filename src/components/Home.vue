<template>
    <div>
      <h1>Inicio</h1>
      <main>
        <section>
          <h2>Bienvenido</h2>
          <p>Esta es la página principal de tu aplicación Vue.js</p>
          
          <!-- Formulario para agregar o editar un usuario -->
          <form @submit.prevent="store.editingUser ? store.updateExistingUser() : store.addUser()">
            <div>
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" v-model="store.newUser.nombre" required>
            </div>
            <div>
              <label for="edad">Edad:</label>
              <input type="number" id="edad" v-model="store.newUser.edad" required>
            </div>
            <button type="submit">{{ store.editingUser ? 'Actualizar Usuario' : 'Agregar Usuario' }}</button>
            <button v-if="store.editingUser" type="button" @click="store.cancelEdit()">Cancelar</button>
          </form>
  
          <!-- Tabla para mostrar los usuarios -->
          <h3>Usuarios</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in store.users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.nombre }}</td>
                <td>{{ user.edad }}</td>
                <td>
                  <button @click="store.deleteUser(user.id)">Eliminar</button>
                  <button @click="store.editUser(user)">Editar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <footer>
        <p>© {{ year }} Tu Empresa</p>
      </footer>
    </div>
  </template>
  
  <script setup>
import { onMounted } from 'vue';
import { useUserStore } from '../stores/userStore';

const store = useUserStore();
const year = new Date().getFullYear();

onMounted(async () => {
  await store.fetchUsers();
});

console.log('Estado de la tienda de usuarios:', store);
</script>

  