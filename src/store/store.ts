import { StoreInfo } from '@/service/types/store'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStoreStore = defineStore('store', () => {
  const searchStore = ref<Partial<StoreInfo>>({})

  const setSearchStore = (val: Partial<StoreInfo>) => {
    searchStore.value = val
  }

  const storeInfo = ref<Partial<StoreInfo>>({})

  const setStoreInfo = (val: Partial<StoreInfo>) => {
    storeInfo.value = val
  }

  return {
    storeInfo,
    setStoreInfo,
    searchStore,
    setSearchStore,
  }
})
