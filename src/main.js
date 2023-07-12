import Vue from 'vue'
import App from './App.vue'
//elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入路由器
import router from './router'
//引入store
import store from './store/index'

//关闭生成提示
Vue.config.productionTip = false
//应用elementUi
Vue.use(ElementUI);
//

new Vue({
  render: h => h(App),
  router,
  store,
  //总线
  beforeCreate(){
    Vue.prototype.$bus=this;
  }
}).$mount('#app')
