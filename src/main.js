import Vue from 'vue'
import App from './App.vue'


//import elementui & bootstrap & jquery
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.js';

// import axios
import axios from 'axios'

import router from './router'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
