<!--
 * @Author: 15337160259 327878553@qq.com
 * @Date: 2024-05-13 12:55:30
 * @LastEditors: 15337160259 327878553@qq.com
 * @LastEditTime: 2024-05-13 13:13:27
 * @FilePath: \app-vue3-ylqj\src\components\empty.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="card-item">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.card-item {
  width: 86%;
  padding: 1rem 1rem;
  margin: 1rem auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.07);
}
</style>
