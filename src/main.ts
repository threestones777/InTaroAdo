import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueViewer)
VueViewer.setDefaults({
  inline: true,
  button: true, //右上角按钮
  navbar: false, //底部缩略图
  title: false, //当前图片标题
  toolbar: true, //底部工具栏
  tooltip: true, //显示缩放百分比
  movable: true, //是否可以移动
  zoomable: true, //是否可以缩放
  rotatable: true, //是否可旋转
  scalable: true, //是否可翻转
  transition: true, //使用 CSS3 过度
  fullscreen: false, //播放时是否全屏
  keyboard: false //是否支持键盘
})
app.use(createPinia())
app.use(router)

app.mount('#app')
