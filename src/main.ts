import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入elementplus 组件
import elementplus from 'element-plus'
//引入样式
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(router)
//将element-ui 挂载在全局对象上
app.use(elementplus)
app.mount('#app')
