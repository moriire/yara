<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Search</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Search Bar -->
      <ion-searchbar
        v-model="searchQuery"
        placeholder="Search by location or title"
        debounce="500"
      ></ion-searchbar>
      <!-- Search Bar -->
      <ion-input
        label="Input with clear button"
        label-placement="stacked"
        :clear-input="true"
        placeholder="Enter text to see clear button"
        value="Default value"
      >
      </ion-input>
      <!-- Filter Options (Price Range, bedroom, etc.) -->
      <div class="filter-section">
        <ion-item>
          <ion-label>Price Range</ion-label>
          <ion-range v-model="filters.price" min="1000" max="7000000" step="1000" color="secondary">
            <ion-label slot="start">{{ filters.price[0] | currency }}</ion-label>
            <ion-label slot="end">{{ filters.price[1] | currency }}</ion-label>
          </ion-range>
        </ion-item>
        <ion-item>
          <ion-label>bedroom</ion-label>
          <ion-select v-model="filters.bedroom" interface="popover" placeholder="Any">
            <ion-select-option v-for="n in 5" :key="n" :value="n"
              >{{ n }}+ bedroom</ion-select-option
            >
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-button @click="applyFilters" expand="block">Apply Filters</ion-button>
        </ion-item>
      </div>

      <!-- Search Results -->
      <ion-list v-if="filteredHouses.length > 0">
        <ion-item v-for="house in filteredHouses" :key="house.id" :href="'/house/' + house.id">
          <img :src="house.images[0].img" slot="start" class="thumbnail" />
          <ion-label>
            <h2>{{ house.title }}</h2>
            <p>{{ house.price | currency }} - {{ house.location }}</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <div v-else class="no-results">
        <p>No results found</p>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup>
import { IonInput, IonItem, IonList } from '@ionic/vue';
import { ref, computed, onMounted } from 'vue'
import axios from "axios"

const searchQuery = ref('')
const filters = ref({
  price: [1000, 7000000],
  bedroom: null
})

const houses = ref([])
const getHouses = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/houses/")
    houses.value = res.data
  } catch (error) {
    console.log(error)
  }
 
}

onMounted(()=>{
  getHouses()
})

// Filtered house results based on search query and filters
const filteredHouses = computed(() => {
  return houses.value.filter((house) => {
    const matchesQuery =
      house.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      house.location.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesPrice =
      house.price >= filters.value.price[0] && house.price <= filters.value.price[1]
    const matchesbedroom = !filters.value.bedroom || house.bedroom >= filters.value.bedroom

    return matchesQuery && matchesPrice && matchesbedroom
  })
})

const applyFilters = () => {
  getHouses
  // Re-run the filter computation
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .thumbnail {
    width: 60px;
    height: 60px;
  }
}

.thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.filter-section {
  padding: 16px;
}

.no-results {
  text-align: center;
  padding: 16px;
}

ion-item {
  --min-height: 90px;
}
</style>
