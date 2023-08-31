import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserinfoAPI } from '@/api/user'
export default {
  namespaced: 'user', // 开启命名空间
  state() {
    return {
      token: getToken(), // 从缓存(cookies)中读取初始值
      userinfo: {}
    }
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
      setToken(token)// 同步到缓存
    },
    removeToken: (state) => {
      state.token = null
      removeToken()// 删除Vuex的token
    },
    setUserinfo: (state, userinfo) => {
      state.userinfo = userinfo
    }
  },
  actions: {
    // 登录
    async login(context, data) {
      // todo: 调用登录接口
      const token = await login(data)
      // 返回一个token 123456
      context.commit('setToken', token)
    },
    // 获取用户信息
    async getUserinfo(context) {
      const userinfo = await getUserinfoAPI()
      context.commit('setUserinfo', userinfo)
      return userinfo
    }
  }
}
