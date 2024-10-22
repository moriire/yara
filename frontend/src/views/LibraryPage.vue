<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ house.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-fab slot="fixed" horizontal="end" vertical="bottom">
    <ion-fab-button size="small">
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button>
        <ion-icon :icon="document"></ion-icon>
      </ion-fab-button>
      <ion-fab-button>
        <ion-icon :icon="colorPalette"></ion-icon>
      </ion-fab-button>
      <ion-fab-button>
        <ion-icon :icon="globe"></ion-icon>
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>
      <div class="example-content">
        <house-details :house="house" />
      </div>
      <ion-fab vertical="bottom" horizontal="center">
        <ion-fab-list>
          <ion-fab-button>
            <ion-icon :icon="chevronForwardCircle"></ion-icon>
          </ion-fab-button>
          <ion-fab-button>
            <ion-icon :icon="chevronForwardCircle"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import router from '@/router'
import HouseDetails from '@/components/HouseDetails.vue'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import { add, colorPalette, document, globe } from 'ionicons/icons';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonBackButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage
} from '@ionic/vue'
const house = ref([])
const getHouse = async (pk) => {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/houses/${pk}`)
    house.value = res.data
  } catch (error) {
    console.log(error)
  }
}

watch(async () => await getHouse(router.currentRoute.value.params.id))

onMounted(() => {
  //console.log(router.currentRoute.value.params.id)
  getHouse(router.currentRoute.value.params.id)
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
