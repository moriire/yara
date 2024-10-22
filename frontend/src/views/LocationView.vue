<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Location Search</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div v-if="loading" class="text-center">
          <ion-spinner name="crescent"></ion-spinner>
          <p>Loading...</p>
        </div>
        <div v-else>
          <h2 class="text-center">Search Results Near You</h2>
          <ion-list>
            <ion-item v-for="(result, index) in searchResults" :key="index">
              <ion-label>
                <h3>{{ result.name }}</h3>
                <p>{{ result.description }}</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { Geolocation } from '@capacitor/geolocation';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        loading: true,
        searchResults: [],
        errorMessage: '',
      };
    },
    async mounted() {
      try {
        // Request the user's location
        const coordinates = await Geolocation.getCurrentPosition();
        const { latitude, longitude } = coordinates.coords;
        console.log('Latitude:', latitude, 'Longitude:', longitude);
        
        // Perform automatic search using Axios
        this.performSearch(latitude, longitude);
      } catch (error) {
        console.error('Error getting location:', error);
        this.loading = false;
        this.errorMessage = 'Could not retrieve location. Please try again.';
      }
    },
    methods: {
      async performSearch(latitude, longitude) {
        try {
          // Replace with your actual API endpoint
          const response = await axios.get(`https://example.com/api/search`, {
            params: {
              lat: latitude,
              lon: longitude,
            },
          });
          this.searchResults = response.data.results;
          this.loading = false;
        } catch (error) {
          console.error('Error performing search:', error);
          this.loading = false;
          this.errorMessage = 'Search failed. Please try again later.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  .ion-padding {
    padding: 16px;
  }
  </style>  