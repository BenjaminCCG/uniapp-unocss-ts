<template>
  <view
    class="page-content box-border"
    :style="{
      paddingBottom: `${safeAreaInsets.bottom + ($slots.footer ? 68 : 0)}rpx`,
      backgroundColor: props.bgColor,
      minHeight: `calc(100vh - ${PLATFORM.isH5 ? '44px' : 0})`,
    }"
  >
    <slot></slot>
  </view>
  <view
    class="footer"
    v-if="$slots.footer"
    :style="{ paddingBottom: `${safeAreaInsets.bottom + 20}px` }"
  >
    <slot name="footer"></slot>
  </view>
</template>

<script setup lang="ts">
import PLATFORM from '@/utils/platform'
const { safeAreaInsets } = uni.getSystemInfoSync()
const props = withDefaults(
  defineProps<{
    bgColor?: string
  }>(),
  {
    bgColor: 'rgb(245 245 245 / 100%)',
  },
)
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 40px;
  padding-top: 20rpx;
  background: #fff;
}
</style>
