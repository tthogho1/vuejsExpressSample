import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import querystring from 'querystring'

const app = createApp(App)
app.use(store)
app.use(router)
app.config.devtools = true;
//createApp(App).use(VueAxios, axios).mount('#app')
app.use(querystring)
app.use(VueAxios, axios).mount('#app')
