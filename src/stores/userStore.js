import { defineStore } from 'pinia';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/users',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        newUser: { nombre: '', edad: null },
        editingUser: null
    }),
    actions: {
        fetchUsers() {
            console.log('Fetching users...');
            return axios.get('http://localhost:3000/users')
                .then(response => {
                    console.log('Users fetched successfully:', response.data);
                    this.users = response.data;
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                });
        },
        addUser() {
            console.log('Adding user:', this.newUser);
            return apiClient.post('/', this.newUser)
                .then(() => {
                    console.log('User added successfully.');
                    this.resetForm();
                    this.fetchUsers();
                })
                .catch(error => {
                    console.error('Error adding user:', error);
                });
        },
        deleteUser(id) {
            console.log('Deleting user with ID:', id);
            return apiClient.delete('/' + id)
                .then(() => {
                    console.log('User deleted successfully.');
                    this.fetchUsers();
                })
                .catch(error => {
                    console.error('Error deleting user:', error);
                });
        },
        editUser(user) {
            console.log('Editing user:', user);
            this.newUser = { ...user };
            this.editingUser = user.id;
        },
        updateExistingUser() {
            console.log('Updating user:', this.newUser);
            return apiClient.put('/' + this.editingUser, this.newUser)
                .then(() => {
                    console.log('User updated successfully.');
                    this.resetForm();
                    this.fetchUsers();
                })
                .catch(error => {
                    console.error('Error updating user:', error);
                });
        },
        resetForm() {
            console.log('Resetting form.');
            this.newUser = { nombre: '', edad: null };
            this.editingUser = null;
        }
    }
});
