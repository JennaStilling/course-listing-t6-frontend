import './assets/main.css'

import router from "./router.js";

import { createApp } from 'vue'
import FirstPage from './views/CourseList.vue' //directory for first page

createApp(FirstPage).mount('#app')
