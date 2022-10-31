import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap'
import router from './router'

import './assets/main.css'

createApp(App).use(router).mount('#app')
