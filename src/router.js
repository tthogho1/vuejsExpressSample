import {createRouter, createWebHistory} from 'vue-router'
import WebCamMap from './Map.vue'
import ImgList from './List.vue' 

export const router = createRouter({
    history : createWebHistory(),
    routes:[
        {
            path:'/',
            name: 'list',
            component: ImgList,
        },
        {
            path: '/map',
            name: 'map',
            component: WebCamMap,
        },
    ],
})