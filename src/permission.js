import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'
import store from '@/store'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/404'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // 进度条
  NProgress.start()

  // 改变标题
  document.title = getPageTitle(to.meta.title)

  // 有token的情况
  if (store.getters.token) {
    // 有token还去登录页,打回来!!
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      next()// 放行
    }
  } else {
    /* 没有token的情况*/
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login') // 中转到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
