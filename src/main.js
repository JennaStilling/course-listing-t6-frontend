import './assets/style.css'

import router from "./router.js";

import { createApp } from 'vue'
import App from './App.vue' //directory for first page

createApp(App).use(router).mount('#app');
