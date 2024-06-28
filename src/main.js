import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import 'virtual:svg-icons-register'
import store from './store'
import useTheme from './utils/theme'
import mDirectives from './directives'
import './permission'

// 初始化主题
useTheme()
useREM()
createApp(App).use(store).use(mLibs).use(router).use(mDirectives).mount('#app')
