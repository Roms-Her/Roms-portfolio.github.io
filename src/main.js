import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import './assets/css/reset.css'
import './main.css'
import './assets/css/root.css'

const app = createApp(App)

app.use(MotionPlugin)

app.mount('#app')