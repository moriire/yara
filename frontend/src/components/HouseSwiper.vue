<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(image, index) in props.images" :key="index">
      <img :src="image.img" :alt="index" />
    </swiper-slide>

    <!-- Add Pagination and Navigation -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
const props = defineProps({
  images: {
    required: true,
    type: Array
  }
})

const swiperOptions = {
  pagination: { el: '.swiper-pagination' },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: true
}
</script>

<style scoped>
img {
  width: 100%;
  height: 80vh;
  display: block;
}
</style>
