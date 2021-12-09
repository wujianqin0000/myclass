import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import {Message } from "element-ui"
// 引入vue-UUID组件
import UUID from 'vue-uuid'
Vue.use(UUID)
Vue.prototype.$msg = Message
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.timeout = 30000; // 设置超时时间
// axios.defaults.baseURL = 'http://121.40.99.230:8088'
// axios请求统一拦截
// axios统一拦截响应
//  REQUEST 请求异常拦截
axios.interceptors.request.use(config => {
  //= =========  所有请求之前都要执行的操作  ==============
  // 比如给每个请求加请求头
  let JWT = window.sessionStorage.getItem('JWT')
  if (JWT) { config.headers.authorization = JWT} // 获取JWT令牌 
  return config // 将处理过的config返回
}, err => {
  //= =================  错误处理  ====================
  Message.error({
    message: '请求超时!'
  })
  return Promise.resolve(err)
})

//  RESPONSE 响应异常拦截
axios.interceptors.response.use(res => {
  // = =============  所有请求完成后都要执行的操作  ==================
  // 第一种方式
  // 根据返回的code值来做不同的处理（和后端约定）
  function toLogin () {
    router.push('/login') // 跳转至登陆页面  
    window.sessionStorage.removeItem('JWT') // 退出登录页面后清空JWT令牌 防止无账号访问后台
  }
  switch (res.data.code) {
    case 200:
      return res;
    case 500:
      router.push('/errorpage')
      Message.error({
        message: '服务器异常'
      })
      break
    case 400:
      Message.error({
        message: res.data.msg
      })
      break
    case 2:
      router.push('/notfound')
      Message.error({
        message: '授权失败'
      })
      break
    case 6:
      router.push('/notfound')
      Message.error({
        message: '风险操作'
      })
      break
    default:
      Message.error({
        message: res.data.msg
      })
      break
  }
  // 若不是正确的返回code，且已经登录，就抛出错误
  // const err = new Error(data.description)
  // console.log(data);
  // err.data = data
  // err.response = response

  // =====================第二种方式，仅对200和error状态处理========================
  // if (data.status && data.status == 200 && data.data.status == 'error') {
  //   Message.error({
  //     message: data.data.msg
  //   })
  //   return
  // }
  // return data
}, err => {
   // =======请求超时或服务器无响应异常处理=======
   const {code, message } = err
   if (code === 'ECONNABORTED' || message === 'Network Error') { // 请求超时或服务器无响应
     router.push('/errorpage') // 跳转至错误界面500  
    //  Message.error({
    //   message: '/errorpage'
    // })
     return Promise.resolve(err)
   }
  //= =============  错误处理  ====================
  function toError (code) {
    err.message = ''
    router.push(code === 404 ? '/notfound' : '/errorpage') // 跳转至错误界面
    // Message.error({
    //   message: `/code === ${code}`
    // })
  }
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message =  err.response.data.msg
        // toError (404) // 跳转至错误界面404
        break
      case 401:
        err.message = '未授权，请重新登录(401)'
        toError (404) // 跳转至错误界面404
        break
      case 403:
        err.message = '拒绝访问(403)'
        toError (404) // 跳转至错误界面404
        break
      case 404:
       
        // err.message = '请求出错(404)'
        toError (404) // 跳转至错误界面404
        break
      case 408:
        err.message = '请求超时(408)'
        toError (404) // 跳转至错误界面404
        break
      case 500:
        // err.message = '服务器错误(500)'
        toError (500) // 跳转至错误界面500
        break
      case 501:
        err.message = '服务未实现(501)'
        toError (500) // 跳转至错误界面500
        break
      case 502:
        err.message = '网络错误(502)'
        toError (500) // 跳转至错误界面500
        break
      case 503:
        err.message = '服务不可用(503)'
        toError (500) // 跳转至错误界面500
        break
      case 504:
        err.message = '网络超时(504)'
        toError (500) // 跳转至错误界面500
        break
      case 505:
        err.message = 'HTTP版本不受支持(505)'
        toError (500) // 跳转至错误界面500
        break
      default:
        err.message = `连接出错(${err.response.status})!`
        toError (500) // 跳转至错误界面500
    }
    if (err.message) {
      Message.error({
        message: err.message
      })
    }
  } else {
    err.message = '连接服务器失败!'
  }
  return Promise.resolve(err)
})

// 挂载路由守卫
// to 访问的路由地址 from从那个地址跳转而来 next 放行函数
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login' || to.path === '/notfound' || to.path === '/errorpage') return next()
  const JWT = window.sessionStorage.getItem('JWT')
  if (!JWT) {
    Message.error('请先登录!!!')
    return next('/login')
  }
  next()
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
