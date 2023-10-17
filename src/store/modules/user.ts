import type { loginForm, loginResponseData } from '@/api/user/type';
// 创建用户相关的小仓库
import { defineStore } from 'pinia';

import { requestLogin } from '@/api/user';
import type { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token';
// 引入常量路由
import { constantRoute } from '../../router/routes';


let useUserStore = defineStore('User', {
    // 小仓库存储数据的地方
    state: (): UserState => {
        return {
            token: GET_TOKEN(),
            // 仓库存储菜单需要的数据
            menuRoutes: constantRoute
        }
    },
    // 异步|逻辑的地方
    actions: {
        // 用户登录的方法
        async userLogin(data: loginForm) {
            let result: loginResponseData = await requestLogin(data)
            // 登录成功
            let { code } = result
            if (code === 200) {
                this.token = (result.data.token as string)
                // 本地存储
                SET_TOKEN((result.data.token as string))
                return 'ok'
            }
            // 登录失败
            return Promise.reject(new Error(result.data.message))
        }
    },
    getters: {

    }
})

export default useUserStore