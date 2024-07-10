/**
 * 城市信息
 */
export interface CityInfo {
  /**
   * 简称
   */
  Abbr: string
  /**
   * 是否城市
   */
  Ascity: boolean
  /**
   * 城市代码
   */
  CityCode: string
  /**
   * 英文名称
   */
  CityNameEn: string
  /**
   * 中文名称
   */
  CityNameZh: string
  /**
   * 创建时间
   */
  CreateTime: number
  /**
   * 区县代码
   */
  DistrictCode?: string
  /**
   * 区县名称
   */
  DistrictName?: string
  /**
   * 是否在线
   */
  EnableOnline: boolean
  /**
   * 统一城市代码
   */
  GbCityCode: string
  /**
   * ID
   */
  Id: number
  /**
   * 纬度
   */
  Latitude: number
  /**
   * 经度
   */
  Longitude: number
  /**
   * 市场代码
   */
  MarketCode: string
  /**
   * 更新时间
   */
  UpdateTime: number
}

/**
 * 门店查询参数
 */
export interface StoreSearchParams {
  /**
   * 纬度
   */
  Latitude: string
  /**
   * 经度
   */
  Longitude: string
  /**
   * 半径范围
   */
  Radius: number
  [property: string]: any
}

/**
 * 门店信息
 */
export interface StoreInfo {
  /**
   * 营业状态文本
   */
  BaseStatusComments: string
  /**
   * 营业时间
   */
  BusinessHours: string
  /**
   * 城市代码
   */
  GbCityCode: string
  /**
   * 纬度
   */
  Latitude: number
  /**
   * 经度
   */
  Longitude: number
  /**
   * 电话
   */
  Phone: string
  /**
   * 门店地址
   */
  StoreAddress: string
  /**
   * 门店代码
   */
  StoreCode: string
  /**
   * 门店名称
   */
  StoreName: string
  /**
   * 门店简称
   */
  StoreNameShort: string
  /**
   * 门店照片
   */
  StorePic?: string
  /**
   * 支持在线支付
   */
  SupportOnlinePay: boolean
  /**
   * 距离
   */
  Distance: number
  [property: string]: any
}

export interface OrderInfo {
  ItemName: string
  LinkID: string
  OrderID: string
  OutOrderID: string
  PosOrderNumber: string
  Status: number
  StatusName: string
  StoreAddress: string
  StoreCode: string
  StoreName: string
  Time: string
}
