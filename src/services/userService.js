import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/users',
  withCredentials: false, 
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
