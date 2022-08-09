// 专门用于mock数据用的请求
import mockRequests from './mockRequest'

// 调用的是mockRequests发送请求接口
export const reqBannerList = () => {
  return mockRequests({
    url: '/banner',
    method: 'get',
  })
}
