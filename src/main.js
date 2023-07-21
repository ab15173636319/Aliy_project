import { createApp } from 'vue'

import 'virtual:windi.css'
import './iconfont/iconfont.css'

import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'

createApp(App)
  .use(ElementPlus)
  .use(router)
  .mount('#app')
