import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import 'virtual:svg-icons-register'
import store from './store'
import useTheme from './utils/theme'

// 初始化主题
useTheme()
useREM()
createApp(App).use(store).use(mLibs).use(router).mount('#app')
