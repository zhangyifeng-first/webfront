// 对外暴露整个插件对象
import SvgIcon from '@/components/SvgIcon/index.vue'
import { App } from 'vue'
const allGlobalComponent = { SvgIcon }
// 引入element-plus 的图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  install(app: App) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key as keyof typeof allGlobalComponent],)
    })
    // 将element-plus 的图标注册全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
