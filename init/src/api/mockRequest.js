import axios from 'axios'
import { AxiosRequestConfig } from "axios";


// 利用axios对象的create方法，去创建一个案axios实例
// requests就是案axios，只不过稍微配置一下
const proxyCore = axios.create({
  // 配置对象
  // 基础路径，发请求的时候，路径当中会出现api
  baseURL: 'http://127.0.0.1:5173/mock',
  timeout: 5000,
})

// 请求拦截器，在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
proxyCore.interceptors.request.use((config) => {
  // 添加请求token
  config.headers["token"] = "gg12j3h4ghj2g134kj1g234gh12jh34k12h34g12kjh34kh1g";
  // config配置对象，对象里面有一个属性很重要，headers请求头
  if (!config.headers.token) {
    alert('请求头没有token');
  }
  return config
})

// 响应拦截器
proxyCore.interceptors.response.use(
  (res) => {
    // 判断响应中是否带有token
    if(!res.data.token){
      alert("响应报错！没有携带koken");
      return
    }
    switch (res.data.code) {
      case 200:
        break;
      case 404:
        alert("找不到相关请求!");
        break;
      case 500:
        alert("服务器内部出现错误!");
        break;
      default:
        alert('其他未知的错误!')
        break;
    }
    return res.data
  },
  (error) => {
    return Promise.reject(new Error('failed'))
  }
)

/**
 * 代理基础
 * 注意：对此封装旨在实现AxiosRequestConfig的代码提示功能，并无特殊意义
 * @param {AxiosRequestConfig} cfg
 */

const mockRequests = (cfg) => proxyCore(cfg);


export default mockRequests
