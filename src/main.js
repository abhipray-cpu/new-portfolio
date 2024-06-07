import { createApp } from 'vue'
import './style.css'
import { store } from './store/store'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
createApp(App).use(Vue3Lottie).use(store).mount('#app')