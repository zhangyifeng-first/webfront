// 统一管理项目用户相关的接口
import request from "@/utils/request"
import type { loginForm, loginResponseData, userInfoResponseData } from './type'

enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info'
}

export const requestLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data)

export const requestUserInfo = () => request.post<any, userInfoResponseData>(API.LOGIN_URL)