import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/users', // Asegúrate de que la URL base coincide con tu servidor Node.js
  withCredentials: false, // Esto es opcional dependiendo de si necesitas manejar cookies
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getAllUsers() {
    return apiClient.get('/');
  },
  getUserById(id) {
    return apiClient.get('/' + id);
  },
  createUser(data) {
    return apiClient.post('/', data);
  },
  updateUser(id, data) {
    return apiClient.put('/' + id, data);
  },
  deleteUser(id) {
    return apiClient.delete('/' + id);
  }
};
