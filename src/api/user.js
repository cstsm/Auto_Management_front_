//导入request模块
import request from '@/utils/request'

//登录请求
export function login(data){
    return request({
        url: '/rent/index/login',
        method: 'post',
        data
    })
}
//
export function getInfo(){
    return request({
        url: '/rent/index/info',
        method: 'get',
    })
}