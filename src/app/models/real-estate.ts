export interface RealEstate {
  Type?: string; // 取引の種類
  Region?: string; // 地区
  MunicipalityCode?: string // 市区町村コード
  Prefecture?: string; // 都道府県名
  Municipality?: string; // 市区町村名
  DistrictName?: string; // 地区名
  TradePrice?: string; // 取引価格（総額）
  PricePerUnit?: string; // 坪単価
  FloorPlan?: string // 間取り
  Area?: string; // 面積（平方メートル）
  UnitPrice?: string // 取引価格（平方メートル単価）
  LandShape?: string // 土地の形状
  Frontage?: string // 間口
  TotalFloorArea?: string // 延床面積(平方メートル)
  BuildingYear?: string // 建築年
  Structure?: string // 建物の構造
  Use?: string // 用途
  Purpose?: string // 今後の利用目的
  Direction?: string // 前面道路：方位
  Classification?: string // 前面道路：種類
  Breadth?: string // 前面道路：幅員（ｍ）
  CityPlanning?: string // 都市計画
  CoverageRatio?: string // 建ぺい率（％）
  FloorAreaRatio?: string // 容積率（％）
  Period?: string // 取引時点
  Renovation?: string // 改装
  Remarks?: string // 取引の事情等
}