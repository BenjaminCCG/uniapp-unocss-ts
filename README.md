<!--
 * @Author: wuli-wuhan 327878553@qq.com
 * @Date: 2024-05-08 14:38:43
 * @LastEditors: wuli-wuhan 327878553@qq.com
 * @LastEditTime: 2024-05-08 15:13:12
 * @FilePath: \app-vue3-ylqj\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<p align="center">
</p>

<h1 align="center">
  <a href="https://github.com/codercup/unibest" target="_blank">unibest框架</a>
  <a href="https://wot-design-uni.netlify.app/component/button.html" target="_blank">wot-design-UI</a>
</h1>

<div align="center">

</div>

## ⚙️ 环境

- node>=18
- pnpm>=7.30

## &#x1F4C2; 安装

执行 `pnpm i` 安装依赖

## 📦 运行（支持热更新）

- web平台： `pnpm dev:h5`, 然后打开 [http://localhost:9000/](http://localhost:9000/)。
- weixin平台：`pnpm dev:mp-weixin` 然后打开微信开发者工具，导入本地文件夹，选择本项目的`dist/dev/mp-weixin` 文件。
- APP平台：`pnpm dev:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/dev/app` 文件夹，选择运行到模拟器(开发时优先使用)，或者运行的安卓/ios基座。

## 🔗 发布

- web平台： `pnpm build:h5`，打包后的文件在 `dist/build/h5`，可以放到web服务器，如nginx运行。如果最终不是放在根目录，可以在 `manifest.config.ts` 文件的 `h5.router.base` 属性进行修改。
- weixin平台：`pnpm build:mp-weixin`, 打包后的文件在 `dist/build/mp-weixin`，然后通过微信开发者工具导入，并点击右上角的“上传”按钮进行上传。
- APP平台：`pnpm build:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/build/app` 文件夹，选择发行 - APP云打包。

## 📄 License

[MIT](https://opensource.org/license/mit/)

## 🔗 开发接口

后端服务地址： https://www.showdoc.com.cn/649940036021098/3796403752691717
UI地址：https://js.design/f/Mj8gi-?p=lewp_CUnhC&mode=design
