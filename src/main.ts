import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import TDesign from 'tdesign-vue-next'
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(TDesign)
app.use(createPinia())
app.use(router)

app.mount('#app')
