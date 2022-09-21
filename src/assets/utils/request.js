/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import axios from 'axios'
axios.defaults.timeout = 5000
// axios.defaults.baseURL = ''
/* axios.defaults.baseURL = process.env.API_ROOT
console.log(process.env.API_ROOT) */

export function request (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // 设置请求超时时间
    timeout: 5000
  })

  // http request 拦截器
  instance.interceptors.request.use(
    config => {
      config.headers = {
        /* 'content-type': 'application/json'
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MzgxMTMwNCwic3ViIjoiNTM4MTEzMDQiLCJpYXQiOjE2NTcyNTI0NzQsImV4cCI6MTY4ODM1NjQ3NH0.-Elywq81a2slxCECgYC6x4slRJtZIj3_P5woX-Zcvso',
        'app-type': '9' */
      }
      return config
    },
    () => {
      return Promise.reject(err)
    }
  )
  return instance(config)
}
