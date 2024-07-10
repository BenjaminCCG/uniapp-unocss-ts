<template>
  <my-card class="">
    <view class="pb-2 font-size-4" v-if="cardTitle">{{ cardTitle }}</view>
    <view class="flex flex-justify-around">
      <view
        class="text-center w-20"
        v-for="item in layoutBtnData"
        :key="item.title"
        @click="gotoPage(item.url)"
      >
        <image class="image-icon" :src="item.imgurl" mode="widthFix"></image>
        <view>{{ item.title }}</view>
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
.image-icon {
  width: 96rpx;
  height: 96rpx;
}
</style>
