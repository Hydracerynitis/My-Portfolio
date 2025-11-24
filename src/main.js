//import './assets/css/style-starter.css'

import { createApp } from 'vue'
import i18n from './locales/i18n'
import App from './App.vue'
import router from './router'
import portfolioContext from './context/PortfolioContext'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(portfolioContext)

app.mount('#app')
