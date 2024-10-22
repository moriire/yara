<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Welcome Back</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input type="email" v-model="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password" v-model="password"></ion-input>
          </ion-item>
          <ion-button expand="full" @click="login">Login</ion-button>
          <ion-button expand="full" fill="clear" @click="$router.push('/register')">
            Don't have an account? Register
          </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = () => {
  if (!email.value || !password.value) {
    alert('Please enter email and password.');
    return;
  }
  // Handle login logic here
  alert(`Logging in with email: ${email.value}`);
};
</script>

<style scoped>
/* Style the login card */
ion-card {
  margin-top: 20vh;
}
</style>
