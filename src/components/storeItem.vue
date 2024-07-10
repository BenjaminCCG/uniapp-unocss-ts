<template>
  <view class="store-item flex p-3" @click="handleClick">
    <!-- <view class="relative">
      <image :src="props.store.StorePic" v-if="props.store.StorePic"></image>
    </view> -->
    <view class="flex flex-col base-info">
      <text class="text-black text-lg">{{ props.store.StoreName }}</text>
      <text>{{ props.store.StoreAddress }}</text>
      <view class="text-black">
        <text class="mr-5">营业时间：{{ props.store.BusinessHours }}</text>
        <text>距离:{{ props.store.Distance }}米</text>
      </view>
    </view>
    <view class="right">
      <wd-icon name="check" size="12px" color="#fff"></wd-icon>
    </view>
  </view>
</template>

<script setup lang="ts">
import { StoreInfo } from '@/service/types/store'
import logo from '@/static/images/kfc-logo.jpg'
const props = defineProps<{
  store: Partial<StoreInfo>
}>()

const emits = defineEmits(['handleClick'])

function handleClick() {
  emits('handleClick', props.store)
}
</script>

<style scoped lang="scss">
.store-item {
  border: 1px solid #eee;
  border-radius: 10rpx;
  margin-bottom: 10px;
  position: relative;
  .right {
    display: none;
  }
  .base-info {
    font-size: 26rpx;
    color: #999;
    text {
      &:nth-of-type(2) {
        margin: 10rpx 0;
      }
    }
  }
  .detail {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50rpx;
    line-height: 50rpx;
    width: 100%;
    text-align: center;
    font-size: 24rpx;
    background: #eee;
    border-radius: 0 0 10rpx 10rpx;
  }
  gap: 20rpx;
  image {
    width: 180rpx;
    height: 200rpx;
    border-radius: 10rpx;
  }
}
.active {
  border: 1px solid #ef233c !important;
  .right {
    text-align: center;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    line-height: 20px;
    background-color: #ef233c;
    border-radius: 0 0 0 10rpx;
  }
}
</style>
