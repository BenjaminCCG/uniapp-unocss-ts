<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import useGlobalData from './hooks/useGlobalData'
import { useCityStore } from '@/store'
const globalData = useGlobalData('provide')

onLaunch(() => {
  const systemInfo = uni.getSystemInfoSync()
  useCityStore().fetchCityList()
  globalData.bottomHeight = systemInfo.screenHeight - systemInfo.safeArea.bottom
})
onShow(() => {})
onHide(() => {})
</script>

<style lang="scss">
:root,
page {
  --wot-color-success: #ef233c;
  --wot-color-primary: #ef233c;
}
/* stylelint-disable selector-type-no-unknown */
button::after {
  border: none;
}

swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

uni-page-wrapper {
  background-color: #fff;
}

// 单行省略，优先使用 unocss: text-ellipsis
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// 两行省略
.ellipsis-2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

// 三行省略
.ellipsis-3 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.uni-page-head__title {
  font-size: 18px !important;
}
</style>
