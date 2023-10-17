import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg 插件需要配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import CustomGlobalComponent from '@/components'
// 引入自定义全局样式
import '@/styles/index.scss'
// 引入路由插件
import router from './router'
// 引入大仓库
import pinia from './store'

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(CustomGlobalComponent)
app.use(router)
app.use(pinia)


app.mount('#app')
