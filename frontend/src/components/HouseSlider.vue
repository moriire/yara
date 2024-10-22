<template>
  <ion-grid>
    <ion-row>
      <ion-col
        size-lg="4"
        size-md="6"
        size-xs="12"
        v-for="(house, index) in props.houses"
        :key="index"
      >
        <ion-card>
          <img :src="house.images[0].img" :alt="index" />
          <ion-card-header>
            <ion-card-title @click="gotoDetails(house.id)">
              {{ house.title }}
            </ion-card-title>
            <ion-card-subtitle>{{ house.location }}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p>{{ house.description.substr(1, 100) }}...</p>
            <div style="display: flex; flex-direction: row; justify-content: space-between">
              <p><strong>Price:</strong> &#8358; {{ house.price }}</p>
             
              <router-link :to="{name:'detail', params:{id : house.id}}">
                <ion-icon slot="icon-only" :ios="arrowForward" :md="arrowForward"></ion-icon>
              </router-link>
            </div>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup>
//import { RouterLink } from '@ionic/vue-router';
import { IonButton, IonIcon,  IonGrid, IonRow, IonCardContent, IonCardTitle, IonCardSubtitle, IonCol, IonCard, IonCardHeader, IonNavLink } from '@ionic/vue'
import { arrowForward } from 'ionicons/icons'
import router from '@/router'
const props = defineProps({
  houses: {
    required: true,
    type: Array
  }
})
const gotoDetails = (pk) => {
  router.push({ name: 'library', params: { id: pk } })
}
</script>
<style scoped></style>
