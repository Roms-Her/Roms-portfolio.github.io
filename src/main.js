import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import './assets/css/reset.css'
import './main.css'
import './assets/css/root.css'
import './assets/css/general.css'
import './assets/css/navbar.css'
import './assets/css/homePage.css'
// import './assets/css/presentationPage.css'
import './assets/css/projectsPage.css'
import './assets/css/moreInformations.css'

const app = createApp(App)

app.use(MotionPlugin)

app.mount('#app')