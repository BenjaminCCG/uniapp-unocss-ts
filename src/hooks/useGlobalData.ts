type methodType = 'provide' | 'inject'

type GlobalDataType = {
  bottomHeight?: number
}

interface IUseGlobalData {
  (method?: methodType): GlobalDataType
}

const useGlobalData: IUseGlobalData = (method = 'inject') => {
  if (method === 'inject') {
    return inject<GlobalDataType>('GlobalData', {})
  }

  const data: GlobalDataType = {}

  provide('GlobalData', data)

  return data
}

export default useGlobalData
