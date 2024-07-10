import { http } from '@/utils/http'

import { CityInfo, OrderInfo, StoreInfo } from './types/store'

export const getCityList = () => {
  return http<CityInfo[]>({
    url: `/Api.App.Normal/GetAllCities`,
    method: 'GET',
  })
}

export const getStoreByRange = (data: { Latitude: number; Longitude: number; Radius: number }) => {
  return http<StoreInfo[]>({
    url: `/Api.App.Normal/GetByRange`,
    method: 'POST',
    data,
  })
}

export const getStoreByKeyword = (data: {
  Keyword: string
  GbCityCode: string
  Latitude: number
  Longitude: number
}) => {
  return http<StoreInfo[]>({
    url: `/Api.App.Normal/SearchByCityCodeAndKeyword`,
    method: 'POST',
    data,
  })
}

export const validStore = (data: { StoreCode: string }) => {
  return http<StoreInfo[]>({
    url: `/Api.App.Normal/ValidStore`,
    method: 'POST',
    data,
  })
}

export const getOrderInfo = (data: { OrderID: string }) => {
  return http<OrderInfo>({
    url: `/Api.App.Order/QueryOrder`,
    method: 'POST',
    data,
  })
}

export const checkGoods = (data: { LinkID: string; StoreCode: string }) => {
  return http({
    url: `/Api.App.Order/CheckLinkID`,
    method: 'POST',
    data,
  })
}
