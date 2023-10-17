// 登录接口请求的数据类型
export interface loginForm {
    username: string,
    password: string
}
interface dataType {
    token?: string,
    message?: string
}
// 登录接口返回的数据类型
export interface loginResponseData {
    code: number,
    data: dataType
}
interface user {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string
}
interface userType {
    user: user
}
export interface userInfoResponseData {
    code: number,
    data: userType
}