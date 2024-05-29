import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


// import VXETable from 'vxe-table'
// import 'vxe-table/lib/style.css'

Vue.config.productionTip = false
// Vue.use(VXETable)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
