import { getToken, setToken, removeToken } from '@/utils/auth'

export default {
  namespace: 'user', // 开启命名空间
  state: {
    token: getToken()// 从缓存(cookies)中读取初始值
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
      setToken(token)// 同步到缓存
    },
    removeToken: (state) => {
      state.token = null
      removeToken()// 删除Vuex的token
    }
  },
  actions: {
    async login(context, data) {
      // todo: 调用登录接口
      // const token = await login(data)
      // 返回一个token 123456
      // context.commit('setToken', token)
    }
  }
}
