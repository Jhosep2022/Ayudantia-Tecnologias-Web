<template>
    <div>
      <h1>Inicio</h1>
      <main>
        <section>
          <h2>Bienvenido</h2>
          <p>Esta es la página principal de tu aplicación Vue.js</p>
          
          <!-- Formulario para agregar o editar un usuario -->
          <form @submit.prevent="editingUser ? updateExistingUser() : addUser()">
            <div>
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" v-model="newUser.nombre" required>
            </div>
            <div>
              <label for="edad">Edad:</label>
              <input type="number" id="edad" v-model="newUser.edad" required>
            </div>
            <button type="submit">{{ editingUser ? 'Actualizar Usuario' : 'Agregar Usuario' }}</button>
            <button v-if="editingUser" type="button" @click="cancelEdit()">Cancelar</button>
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
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.nombre }}</td>
                    <td>{{ user.edad }}</td>
                    <td>
                    <button @click="deleteUser(user.id)">Eliminar</button>
                    <button @click="editUser(user)">Editar</button>
                    </td>
                </tr> <!-- This is the closing tag that was missing -->
            </tbody>
            </table>
  
        </section>
      </main>
      <footer>
        <p>© {{ year }} Tu Empresa</p>
      </footer>
    </div>
  </template>
  
  <script>
  import UserService from '../services/userService';
  
  export default {
    name: 'Home',
    data() {
      return {
        year: new Date().getFullYear(),
        users: [],
        newUser: {
          nombre: '',
          edad: null
        },
        editingUser: null
      }
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        UserService.getAllUsers().then(response => {
          this.users = response.data;
        }).catch(error => {
          console.error('Error al obtener los usuarios:', error);
        });
      },
      addUser() {
        UserService.createUser(this.newUser).then(() => {
          this.resetForm();
          this.fetchUsers();
        }).catch(error => {
          console.error('Error al agregar usuario:', error);
        });
      },
      deleteUser(id) {
        UserService.deleteUser(id).then(() => {
          this.fetchUsers();
        }).catch(error => {
          console.error('Error al eliminar usuario:', error);
        });
      },
      editUser(user) {
        this.newUser = { ...user };
        this.editingUser = user.id;
      },
      updateExistingUser() {
        UserService.updateUser(this.editingUser, this.newUser).then(() => {
          this.resetForm();
          this.fetchUsers();
        }).catch(error => {
          console.error('Error al actualizar usuario:', error);
        });
      },
      cancelEdit() {
        this.resetForm();
      },
      resetForm() {
        this.newUser = { nombre: '', edad: null };
        this.editingUser = null;
      }
    }
  }
  </script>
  