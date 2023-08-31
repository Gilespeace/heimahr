const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  avatar: state => state.user.userinfo.staffPhoto,
  name: state => state.user.userinfo.username
}
export default getters
