//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

import Count from './count.js'
import Person from './person.js'

//使用插件
Vue.use(Vuex)

//创建并导出store
export default new Vuex.Store({
    modules : {
        Count,
        Person
    }
});
