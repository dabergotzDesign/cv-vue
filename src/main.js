import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/main.sass'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core' 
import { far } from '@fortawesome/free-regular-svg-icons' // all reg. icons
import { fas } from '@fortawesome/free-solid-svg-icons' // all solid icons
import {fab} from '@fortawesome/free-brands-svg-icons' // all brand icons

library.add(far,fas,fab)



const app = createApp(App)

app.component('FontAwesome', FontAwesomeIcon)
app.use(router)
app.mount('#app')
