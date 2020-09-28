// 发现模块的所有网络请求
// 轮播
import {request} from '@/network/request.js'
export function getArticleType(){
     return request({
        url:'/getArticleType'
    })
}
