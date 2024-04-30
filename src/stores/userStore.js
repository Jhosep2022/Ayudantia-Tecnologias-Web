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
        async fetchUsers() {
            try {
              console.log('Fetching users...');
              const response = await apiClient.get('/');
              console.log('Users fetched successfully:', response.data);
              this.users = response.data;
            } catch (error) {
              console.error('Error fetching users:', error);
            }
        },
        async addUser() {
          try {
            console.log('Adding user:', this.newUser);
            const response = await apiClient.post('/', this.newUser);
            console.log('User added successfully:', response.data);
            this.resetForm();
            await this.fetchUsers();
          } catch (error) {
            console.error('Error adding user:', error.response);
          }
        },
        async deleteUser(id) {
          try {
            console.log('Deleting user with ID:', id);
            await apiClient.delete('/' + id);
            console.log('User deleted successfully.');
            await this.fetchUsers();
          } catch (error) {
            console.error('Error deleting user:', error);
          }
        },
        async updateExistingUser() {
          try {
            console.log('Updating user:', this.newUser);
            await apiClient.put('/' + this.editingUser, this.newUser);
            console.log('User updated successfully.');
            this.resetForm();
            await this.fetchUsers();
          } catch (error) {
            console.error('Error updating user:', error);
          }
        },
        resetForm() {
          console.log('Resetting form.');
          this.newUser = { nombre: '', edad: null };
          this.editingUser = null;
        },
        cancelEdit() {
          console.log('Editing cancelled.');
          this.editingUser = null;
          this.resetForm();
        }
    }
});
