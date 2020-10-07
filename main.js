import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store

// 导入myRequest
// import myRequest from './myRequest.js'
// Vue.prototype.$myRequest = myRequest


App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
