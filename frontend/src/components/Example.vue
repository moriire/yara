<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="nearby" href="/location">
          <ion-icon :icon="locationOutline" />
          <ion-label>Nearby</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="home" href="/">
          <ion-icon :icon="listOutline" />
          <ion-label>Rent</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="library" href="/library">
          <ion-icon :icon="home" />
          <ion-label>Properties</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/settings">
          <ion-icon :icon="personOutline" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
  import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

  import { playCircle, radio, library, search, home, listOutline, personOutline, locationOutline } from 'ionicons/icons';

  export default {
    components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
    data() {
      return {
        locationOutline,
        personOutline,
        listOutline,
        playCircle,
        radio,
        library,
        search,
        home
      };
    },
  };
</script>