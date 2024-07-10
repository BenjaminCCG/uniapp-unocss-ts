<!--
 * @Author: 15337160259 327878553@qq.com
 * @Date: 2024-05-13 12:55:30
 * @LastEditors: 15337160259 327878553@qq.com
 * @LastEditTime: 2024-05-13 13:18:21
 * @FilePath: \app-vue3-ylqj\src\components\empty.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="empty-content">
    <image src="@/static/icon/empty.png" mode="widthFix"></image>
    <view>
      <text class="empty-text">
        <slot>空空如也</slot>
      </text>
    </view>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.empty-content {
  display: flex;
  flex-direction: column;
  place-content: center center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 50%;

  image {
    width: 180rpx;
  }

  .empty-text {
    font-size: 36rpx;
    color: #5b5b5b;
  }
}
</style>
