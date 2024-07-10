<template>
  <view class="list-box">
    <slot><empty /></slot>
    <wd-loadmore :state="state" @reload="loadmore" />
  </view>
</template>

<script lang="ts" setup>
import empty from '@/components/empty.vue'

// 声明触发的事件
const emit = defineEmits(['getLists', 'changeCurPage'])
const props = defineProps({
  pageNum: {
    type: Number,
    default: 10,
  },
  num: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 0,
  },
  options: {
    type: Object,
    default: {},
  },
  maxNum: Number,
})

let state = ref<String>('loading')

onReachBottom(() => {
  console.log('获取下一页0')
  if (props.num < props.maxNum) {
    console.log('获取下一页')
    emit('changeCurPage', (props.currentPage + 1, props.options.queryType))
    loadmore()
  } else if (props.num === props.maxNum) {
    state.value = 'finished'
  }
})
onLoad(() => {
  loadmore()
})

function loadmore() {
  setTimeout(() => {
    console.log(`获取一页 ${props.currentPage}数据接口`)
    emit('getLists', { ...props.options, page: props.currentPage })
    state.value = 'loading'
  }, 200)
}
</script>

<style lang="scss" scoped>
.list-box {
  background-color: #fff;
  border-radius: 30rpx;
}
</style>
