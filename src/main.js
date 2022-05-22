import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(store)
app.use(router)
app.config.devtools = true;
//createApp(App).use(VueAxios, axios).mount('#app')
app.use(VueAxios, axios).mount('#app')
