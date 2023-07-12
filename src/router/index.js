import vueRouter from "vue-router";
import Vue from "vue";

const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(vueRouter)

//导入页面
import HomePage from '@/pages/HomePage.vue'
import RentCar from '@/pages/RentCar.vue'
import PersonalOrders from '@/pages/PersonalOrders.vue'

const router = new vueRouter({
    routes:[
        {
            path:'/homepage',
            component:HomePage
        },
        {
            path:'/rentCar',
            component:RentCar
        },
        // {
        //     path:"/makeOrder",
        //     component:MakeOrder
        // },
        {
            path:"/personalOrders",
            component:PersonalOrders
        },
        // {
        //     path:"/showOrders",
        //     component:ShowOrders
        // }
    ]
})

// router.beforeEach((to,from,next)=>{
//     if(from.path==='/homepage'&&localStorage.getItem('loginStatus')==='false'){
//         Message({
//             message: '请先登录用户',
//             type: 'error',
//             duration: 2* 1000
//         })
//     }else{
//         next()
//     }
// })

export default router