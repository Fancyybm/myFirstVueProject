import Vue from 'vue'
import App from './App.vue'
import router from './router'


import axios from 'axios'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/index'
import 'mint-ui/lib/mint-ui.common'
import './mui/css/mui.min.css'
import mui from './mui/js/mui.js'

import MintUi from 'mint-ui'

// import moment from 'moment'

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)


import VueScroller from 'vue-scroller'
Vue.use(VueScroller)


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFmt', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// Vue.prototype.moment = moment

Vue.prototype.axios = axios


Vue.use(MintUi)
Vue.use(router)
axios.defaults.baseURL = 'http://vue.lovegf.cn:8899'


//引入图片懒加载
import vueLazyLoad from 'vue-lazyload'
Vue.use(vueLazyLoad, {
  preLoad: 1.5,
  error: require('./assets/logo.png'),
  loading: require('./assets/logo.png'),
  attempt: 2,
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
