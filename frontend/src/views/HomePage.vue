<style scoped>
</style>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Houses</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">

        <ion-loading
          trigger="open-loading"
          :duration="3000"
          message="Dismissing after 3 seconds..."
        >
        </ion-loading>
        <HouseSlider :houses ="houses" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { onMounted, ref } from "vue"
import axios from "axios"
import HouseSlider from '@/components/HouseSlider.vue'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLoading } from '@ionic/vue'
const houses = ref([])
const getHouses = async () => {
  try {
    const res = await axios.get("api/houses/")
    houses.value = res.data
  } catch (error) {
    console.log(error)
  }
 
}
onMounted(()=>{
  getHouses()
})
</script>
