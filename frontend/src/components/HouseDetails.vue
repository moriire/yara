<template>
   <house-swiper :images="props.house.images" />
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ props.house.title }}</ion-card-title>
      <ion-card-subtitle>{{ props.house.location }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
     
      <p>{{ props.house.description }}</p>
      <ion-list>
        <ion-item>
          <ion-label>Price</ion-label>
          <ion-note slot="end">{{ props.house.price }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Bedrooms</ion-label>
          <ion-note slot="end">{{ props.house.bedroom }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Bathrooms</ion-label>
          <ion-note slot="end">{{ props.house.bathrooms }}</ion-note>
        </ion-item>
      </ion-list>
      <ion-button expand="full" @click="openMap">View on Map</ion-button>
      <ion-button expand="full" @click="openIframe">View on Map iframe </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup>
import { Browser } from '@capacitor/browser'
import router from '@/router'
import HouseSwiper from '@/components/HouseSwiper.vue'
//import { ref } from 'vue'
const props = defineProps({
  house: {
    required: true,
    type: Object
  }
})
const openMap = async () => {
  const { lat, lng } = this.props.house.coordinates
  const url = `https://maps.google.com/?q=${lat},${lng}`
  await Browser.open({ url })
}
const openIframe = async () => {
  const { lat, lng } = this.props.house.coordinates
  router.push(`/map/?lat=${lat}&lng=${lng}`)
}
</script>

<style scoped>
ion-card {
  margin: 16px;
}
</style>
