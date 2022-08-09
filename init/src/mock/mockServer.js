//  先引入mockjs模块
import Mock from 'mockjs'

// 把Json数据格式引入进来
import banner from './banner.json'

// 自定义token
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxz'

// mock数据：第一个参数请求地址，第二个参数请求数据
Mock.mock('http://127.0.0.1:5173/mock/banner', { code: 200,token, data: banner })
