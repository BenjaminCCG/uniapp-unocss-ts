/* eslint-disable no-param-reassign */
import qs from 'qs'
import { useUserStore } from '@/store'
import PLATFORM from '@/utils/platform'
import { encrypt, decrypt, encryptECB, decryptECB, encryptCBC, decryptCBC } from '@/utils/sm4Util'
import { H5_SERVER_BASEURL, MP_WEIXIN_SERVER_BASEURL } from '@/config'
export type CustomRequestOptions = UniApp.RequestOptions & {
  query?: Record<string, any>
  /** 出错时是否隐藏错误提示 */
  hideErrorToast?: boolean
} & IUniUploadFileOptions // 添加uni.uploadFile参数类型

// 请求基准地址
const baseUrl = PLATFORM.isH5 ? H5_SERVER_BASEURL : MP_WEIXIN_SERVER_BASEURL

// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options: CustomRequestOptions) {
    // 接口请求支持通过 query 参数配置 queryString
    if (options.query) {
      const queryStr = qs.stringify(options.query)
      if (options.url.includes('?')) {
        options.url += `&${queryStr}`
      } else {
        options.url += `?${queryStr}`
      }
    }
    // 接口请求data序列化
    if (options.data) {
      //   const infoecb = 'regJOA+foouUSICTt21e2iPoRgGuhjEuw0T5Pxt52F8='
      //   const infocbc = '3naObqbgOxYV3lyA2eH3PQ=='
      //   const bdata = '123456'
      //   console.log('beforeInfo', decryptCBC(infocbc))
      //   console.log('aCBCInfo', encryptCBC(bdata))
      //   console.log('beforeInfo', decryptECB(infoecb))
      //   console.log('aECBInfo', encryptECB(bdata))
      options.data = JSON.stringify(options.data)
      //   options.data = null
    }
    // 非 http 开头需拼接地址
    if (!options.url.startsWith('http') && !options.url.includes('/map')) {
      options.url = baseUrl + options.url
      // TIPS: 如果需要对接多个后端服务，也可以在这里处理，拼接成所需要的地址
    }
    // 1. 请求超时
    options.timeout = 10000 // 10s
    // 2. （可选）添加小程序端请求头标识
    options.header = {
      // platform, // 可选，与 uniapp 定义的平台一致，告诉后台来源
      ...options.header,
    }
    // 3. 添加 token 请求头标识
    const userStore = useUserStore()
    const { token } = userStore.userInfo as unknown as IUserInfo
    if (token) {
      options.header.Authorization = `Bearer ${token}`
    }
  },
}

export const requestInterceptor = {
  install() {
    // 拦截 request 请求
    uni.addInterceptor('request', httpInterceptor)
    // 拦截 uploadFile 文件上传
    uni.addInterceptor('uploadFile', httpInterceptor)
  },
}
