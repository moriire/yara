<template>
    <ion-content class="ion-padding">
      <h2>Reset Password</h2>
      <ion-item>
        <ion-label position="stacked">Email</ion-label>
        <ion-input v-model="email" type="email" placeholder="Enter your email"></ion-input>
      </ion-item>
      <ion-button expand="block" @click="resetPassword">Reset Password</ion-button>
      <ion-button expand="block" color="light" @click="goToLogin">Back to Login</ion-button>
    </ion-content>
  </template>
  <script>
  import axios  from 'axios';
  
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      async resetPassword() {
        try {
          await axios.post('password/reset/', {
            email: this.email,
          });
          alert('Password reset email sent');
          this.$router.push('/login');
        } catch (error) {
          console.error('Password reset failed:', error);
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