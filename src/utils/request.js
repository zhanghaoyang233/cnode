import axios from 'axios'

// 设置 baseURL
let baseURL = ''
if (process.env.NODE_ENV !== 'production') {
  // 开发环境
  baseURL = 'https://cnodejs.org'
} else {
  // 生产环境
  baseURL = 'https://cnodejs.org'
}

const request = axios.create({
  baseURL: baseURL
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 请求前的设置
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    // 自定义响应
    return res
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)


export default request