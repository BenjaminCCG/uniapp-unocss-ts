<template>
  <view class="page-list pt-2">
    <slot :list="list" v-if="list.length > 0" />
    <empty v-else />

    <wd-loadmore :state="state" @reload="onload" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import empty from '@/components/empty.vue'
import { LoadMoreState } from 'wot-design-uni/components/wd-loadmore/types'
const props = defineProps<{
  onLoadData: (params: any) => Promise<{ rows: unknown[]; total: number }>
  extraData?: Object
}>()

const pageInfo = ref({
  page: 0,
})
const list = ref<unknown[]>([])

const state = ref<LoadMoreState>('loading')
const onload = () => {
  console.log('onload', props.extraData)

  props
    .onLoadData({ ...pageInfo.value, ...props.extraData })
    .then((res) => {
      const { rows, total } = res
      if (pageInfo.value.page === 0) {
        list.value = [...rows]
      } else if (pageInfo.value.page > 0) {
        list.value = [...list.value, ...rows]
      }
      if (total <= list.value.length) {
        state.value = 'finished'
      }
    })
    .catch((e) => {
      console.log(e, 'e')
    })
}
onShow(() => {
  onload()
})

onMounted(() => {
  Object.keys(props.extraData || {}).length > 0 && onload()
})
const onRefresh = () => {
  state.value = 'loading'
  pageInfo.value.page = 0
  onload()
}

onReachBottom(() => {
  if (state.value === 'loading') {
    pageInfo.value.page += 1
    onload()
  }
})

defineExpose({
  onRefresh,
  list,
})
</script>

<style scoped></style>
