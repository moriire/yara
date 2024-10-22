<template>
    <ion-content>
      <!-- House Details Section -->
      <div class="house-details">
        <h1>{{ house.title }}</h1>
        <h2>{{ house.price }} USD</h2>
        <p>{{ house.description }}</p>
  
        <!-- Main House Image with click-to-view fullscreen -->
        <img
          :src="house.images[0]"
          alt="House Image"
          class="main-house-image"
          @click="openImageViewer(0)"
        />
  
        <!-- Thumbnail gallery -->
        <div class="thumbnail-gallery">
          <img
            v-for="(image, index) in house.images"
            :key="index"
            :src="image"
            alt="House Thumbnail"
            @click="openImageViewer(index)"
            class="thumbnail"
          />
        </div>
  
        <!-- Fullscreen Image Viewer with Swiper -->
        <div v-if="isImageViewerOpen" class="image-viewer">
          <swiper :initial-slide="currentImageIndex" @slideChange="updateImageIndex">
            <swiper-slide v-for="(image, index) in house.images" :key="index">
              <img :src="image" class="full-image" />
            </swiper-slide>
          </swiper>
          <ion-button @click="closeImageViewer" expand="block">Close</ion-button>
        </div>
  
        <!-- House Map Location Link -->
        <ion-button :href="house.mapLocationLink" target="_blank">View on Map</ion-button>
      </div>
    </ion-content>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.min.css';
  
  const isImageViewerOpen = ref(false);
  const currentImageIndex = ref(0);
  
  // Dummy house data
  const house = {
    title: 'Modern Family House',
    price: 450000,
    description: 'A beautiful modern house with 4 bedrooms, 3 bathrooms, and a spacious backyard.',
    images: [
      '/assets/house1.jpg',
      '/assets/house2.jpg',
      '/assets/house3.jpg',
      '/assets/house4.jpg'
    ],
    mapLocationLink: 'https://maps.google.com/?q=40.7128,-74.0060'
  };
  
  // Methods to open and close the image viewer
  const openImageViewer = (index) => {
    currentImageIndex.value = index;
    isImageViewerOpen.value = true;
  };
  
  const closeImageViewer = () => {
    isImageViewerOpen.value = false;
  };
  
  const updateImageIndex = (swiper) => {
    currentImageIndex.value = swiper.activeIndex;
  };
  </script>
  
  <style scoped>
  .house-details {
    padding: 16px;
    text-align: center;
  }
  
  .main-house-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  .thumbnail-gallery {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 20px;
  }
  
  .thumbnail {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    cursor: pointer;
  }
  
  .image-viewer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  
  .full-image {
    width: 90%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  </style>
  