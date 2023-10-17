// 用户信息数据 此函数执行会返回一个数组，数组中包含两个用户信息
function createUserList() {
  return [
    {
      userId: 1,
      avatar: '',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin token',
    },
    {
      userId: 2,
      avatar: '',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'System token',
    },
  ]
}
// 对外暴露一个数组，数组里包含两个接口
// 一个获取用户信息接口
export default [
  // 用户登录接口
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      if (!checkUser) {
        return { code: 201, data: { message: '账号或密码不正确' } }
      }
      const { token } = checkUser
      return {
        code: 200,
        data: {
          token,
        },
      }
    },
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: ({ request }) => {
      const token = request.headers.token
      const checkUser = createUserList().find((item) => item.token === token)
      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      return {
        code: 200,
        data: {
          user: checkUser,
        },
      }
    },
  },
]
