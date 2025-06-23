//import './assets/css/style-starter.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import portfolioContext from './context/PortfolioContext'

const app = createApp(App)

app.use(router)
app.use(portfolioContext)

app.mount('#app')
