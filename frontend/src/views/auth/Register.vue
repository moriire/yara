<template>
    <ion-content class="ion-padding">
      <h2>Register</h2>
      <ion-item>
        <ion-label position="stacked">Email</ion-label>
        <ion-input v-model="email" type="email" placeholder="Enter your email"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Password</ion-label>
        <ion-input v-model="password" type="password" placeholder="Enter your password"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Confirm Password</ion-label>
        <ion-input v-model="confirmPassword" type="password" placeholder="Confirm your password"></ion-input>
      </ion-item>
      <ion-button expand="block" @click="register">Register</ion-button>
      <ion-button expand="block" color="light" @click="goToLogin">Back to Login</ion-button>
    </ion-content>
  </template>
  
  <script>
  import axios  from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      async register() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        try {
          await axios .post('users/', {
            email: this.email,
            password: this.password,
          });
          this.$router.push('/login');
        } catch (error) {
          console.error('Registration failed:', error);
        }
      },
      goToLogin() {
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>  