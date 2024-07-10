/*
 * @Author: wuli-wuhan 327878553@qq.com
 * @Date: 2024-05-08 14:38:43
 * @LastEditors: wuli-wuhan 327878553@qq.com
 * @LastEditTime: 2024-05-08 17:07:19
 * @FilePath: \app-vue3-ylqj\src\utils\sm4Util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as gmCrypt from 'gm-crypt'
import { SM4Util } from '@/utils/sm4'

const lsm4 = new SM4Util()
const SM4 = gmCrypt.sm4
// const pwdkey = 'ylQJZzIyYdmv5gXe'
const pwdkey = 'YLqsXX_BzW=gJWJW'
const iv = 'ylq_SiNoSOFT=568'

const sm4Config = {
  key: pwdkey,
  mode: 'ecb',
  iv,
  cipherType: 'base64',
}

const sm4Util = new SM4(sm4Config)

// 加密工具
export const encrypt = <T>(text: any) => {
  return sm4Util.encrypt(text, pwdkey)
}
// 解密工具
export const decrypt = (text: any) => {
  return sm4Util.decrypt(text, pwdkey)
}

export const encryptECB = (text: any) => {
  return lsm4.encryptCustom_ECB(text, pwdkey)
}

export const decryptECB = (text: any) => {
  return lsm4.decryptCustom_ECB(text, pwdkey)
}
export const encryptCBC = (text: any) => {
  return lsm4.encryptCustom_CBC(text, pwdkey, iv)
}

export const decryptCBC = (text: any) => {
  return lsm4.decryptCustom_CBC(text, pwdkey, iv)
}
