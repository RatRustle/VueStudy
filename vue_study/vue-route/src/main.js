import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

//完整引入Element UI
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';

//引入路由器
import router from './router/index'

Vue.config.productionTip = false

//Vue.use(VueRouter)

//Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
