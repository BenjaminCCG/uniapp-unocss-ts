import { CityInfo } from '@/service/types/store'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCityList } from '@/service/store'

export const useCityStore = defineStore(
  'city',
  () => {
    const cityInfo = ref<Partial<CityInfo>>({})

    const setCityInfo = (val: Partial<CityInfo>) => {
      cityInfo.value = val
    }

    const cityList = ref<Partial<CityInfo>[]>([])

    const setCityList = (val: Partial<CityInfo>[]) => {
      cityList.value = val
    }

    const fetchCityList = async () => {
      const res = await getCityList()
      const data = res.data.map((item) => {
        return {
          ...item,
          name: item.DistrictName
            ? item.DistrictName + '(' + item.CityNameZh + ')'
            : item.CityNameZh,
        }
      })
      cityList.value = data
    }

    return {
      cityInfo,
      setCityInfo,
      cityList,
      setCityList,
      fetchCityList,
    }
  },
  {
    persist: true,
  },
)
