//import './assets/main.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';


//import '@ionic/core/css/palettes/dark.always.css';
import '@ionic/core/css/palettes/dark.system.css';
//import './theme/variable.css';

import { IonicVue } from '@ionic/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from "axios"
import App from './App.vue'
import router from './router'

const app = createApp(App)
axios.defaults.baseURL="http://127.0.0.1:8000/"
app.use(createPinia())
app.use(IonicVue)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
