/*
 * @Author: wuli-wuhan 327878553@qq.com
 * @Date: 2024-05-08 14:38:43
 * @LastEditors: Benjamin Chang 42145150+BenjaminCCG@users.noreply.github.com
 * @LastEditTime: 2024-07-09 19:30:13
 * @FilePath: \app-vue3-ylqj\src\typings.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 全局要用的类型放到这里

type IResData<T> = {
  code: number
  msg: string
  data: T
}

// uni.uploadFile文件上传参数
type IUniUploadFileOptions = {
  file?: File
  files?: UniApp.UploadFileOptionFiles[]
  filePath?: string
  name?: string
  formData?: any
}

type IUserInfo = {
  nickname?: string
  avatar?: string
  /** 微信的 openid，非微信没有这个字段 */
  openid?: string
  token?: string
  Latitude: number
  Longitude: number
}

enum TestEnum {
  A = 'a',
  B = 'b',
}
