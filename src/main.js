import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' //auto car dans /router/index.js

createApp(App).use(router).mount('#app')
