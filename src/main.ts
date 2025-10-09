import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './styles/main.scss'  // 新增這行引入全域樣式
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
