/*
 * @Author: 15337160259 327878553@qq.com
 * @Date: 2024-05-13 12:45:11
 * @LastEditors: BenjaminCCG 42145150+BenjaminCCG@users.noreply.github.com
 * @LastEditTime: 2024-07-04 17:07:22
 * @FilePath: \app-vue3-ylqj\pages.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: '肯德基',
    navigationBarBackgroundColor: '#FFFFFF',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f5f5f5',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
    },
  },
})
