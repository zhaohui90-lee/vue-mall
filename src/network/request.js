import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios拦截器
  instance.interceptors.request.use(config => {
    // 1.config中的一些数据不符合交易需求
    // 2.在请求过程是展示一个请求的图标
    // 3.某些网络请求（比如登录--token）， 必须携带一些特殊的信息
    console.log(config);
    // 通过放行
    return config
  }, error => {
    console.log(error);
  })

  // 相应拦截
  instance.interceptors.response.use(result => {
    console.log(result);
    return result.data
  }, error => {
    console.log(error);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
