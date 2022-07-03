import Vue from 'vue'
import App from './App.vue'
//import {mixin,mixin2} from './mixin'

//引入插件
import plugins from './plugins'

Vue.config.productionTip = false

//应用插件
Vue.use(plugins)

//Vue.mixin(mixin)
//Vue.mixin(mixin2)

new Vue({
    el : '#app',
    render: h => h(App),
})