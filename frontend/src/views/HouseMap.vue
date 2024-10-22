<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/"></ion-back-button>
      </ion-buttons>
      <ion-title>House Address - Map</ion-title>
      <ion-buttons slot="end">
        <ion-button color="dark">
          <ion-icon slot="icon-only" :ios="personCircleOutline" :md="personCircle"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <iframe
      width="100%"
      height="400"
      :src="'https://maps.google.com/maps?q=' + lat + ',' + lng + '&z=15&output=embed'"
      allowfullscreen
    >
    </iframe>
  </ion-content>
</template>

<script >
//import { useRoute } from '@ionic/vue-router';
import router from "@/router"
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar
} from '@ionic/vue'
import {  ref } from 'vue'

export default {
  components: {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonToolbar
  },
  setup() {
    //const route =useRoute()
    const { lng, lat} = router.currentRoute.value.query
    console.log(lng)
    const paletteToggle = ref(false)
   
    return {
      paletteToggle
    }
  }
}
</script>