// 进行axios 的二次封装，使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 第一步，利用axios对象的create方法，创建axios实例
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 第二步，给request实例添加请求和响应拦截器
request.interceptors.request.use((config) => {
  // config对象 headers属性请求头，经常给服务端携带公共参数
  // 返回配置对象
  return config
})

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // 定义一个变量，存储网络错误信息
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'token 过期'
        break
      case 403:
        message = '没有权限访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)
export default request
