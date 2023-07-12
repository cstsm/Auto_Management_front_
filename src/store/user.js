import {getInfo, login} from "@/api/user";

export default {
    // 开启命名空间
    namespaced: true,
    // state 数据
    state: () => ({
        userinfo: {
            username: '登录'
        },
    }),
    actions: {
        //登录用户
        loginUser(context, obj) {
            login({}).then(
                response => {
                    console.log(response)
                    getInfo().then(res => {
                        context.commit('LOGINUSER', res.data)
                    })
                }
            )
        },

    },
    mutations: {
        //登录用户获取信息
        LOGINUSER(state, value) {
            state.userinfo = value;
            localStorage.setItem('loginStatus', 'true')
        },
        EXIT(state) {
            localStorage.setItem('loginStatus', 'false')
            state.userinfo = {
                username: '登录'
            }
        }
    },
    getters: {}
}
