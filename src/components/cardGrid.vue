<!--
 * @Author: 15337160259 327878553@qq.com
 * @Date: 2024-05-13 12:55:30
 * @LastEditors: Benjamin Chang 42145150+BenjaminCCG@users.noreply.github.com
 * @LastEditTime: 2024-06-24 19:59:54
 * @FilePath: \app-vue3-ylqj\src\components\empty.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <my-card class="">
    <view class="pb-2 text-large" v-if="cardTitle">{{ cardTitle }}</view>
    <view class="flex flex-wrap">
      <view
        class="card-box"
        v-for="item in layoutBtnData"
        :key="item.title"
        @click="gotoPage(item.url)"
      >
        <view class="flex">
          <image class="image-icon" :src="item.imgurl"></image>
          <view class="right">
            <view class="title">{{ item.title }}</view>
            <view class="text">{{ item.text }}</view>
          </view>
        </view>
      </view>
    </view>
  </my-card>
</template>

<script lang="ts" setup>
import MyCard from '@/components/myCard.vue'
interface IObjItem {
  [x: string]: string
}

defineProps<{
  cardTitle: String
  layoutBtnData: Array<IObjItem>
}>()

const gotoPage = (page: string) => {
  uni.navigateTo({
    url: `/pages/${page}`,
  })
}
</script>

<style lang="scss" scoped>
.card-box {
  display: flex-item;
  width: 50%;
}
.image-icon {
  display: inline-block;
  width: 22px;
  height: 24px;
}
.right {
  flex: 1;
  margin-left: 8px;
  .title {
    font-size: medium;
  }
  .text {
    font-size: small;
    font-weight: 400;
    color: #999;
    margin-top: 10rpx;
  }
}
</style>
