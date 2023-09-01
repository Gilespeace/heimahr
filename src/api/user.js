import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
export function getUserinfoAPI() {
  return request({
    url: '/sys/profile'
  })
}
/**
 * 更新密码
 * **/
export function updatePasswordAPI(data) {
  return request({
    url: '/sys/user/updatePass',
    method: 'put',
    data
  })
}

