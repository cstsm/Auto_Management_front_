//引入vue
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import user from "./user"
//import pickPoint from "./pickpoint"

export default new Vuex.Store({
    modules:{
        user,
        //pickPoint
    }
})