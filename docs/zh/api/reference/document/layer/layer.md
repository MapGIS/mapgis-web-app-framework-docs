# 图层类

> src/model/document/layer.ts

构建 Layer 对象

```js
import { Layer } from '@mapgis/web-app-framework'
const layer = new Layer()
```

## 属性

### description

- **类型**：`string`
- **描述**：图层描述。
- **默认值**：''

### fullExtent

- **类型**：`Rectangle`
- **描述**：全图范围。
- **默认值**：new Rectangle(0.0, 0.0, 0.0, 0.0)

### id

- **类型**：`string`
- **描述**：图层唯一 id。
- **默认值**：''

### loadStatus

- **类型**：`loadStatus`
- **描述**：图层加载状态。
- **默认值**：LoadStatus.notLoaded

### opacity

- **类型**：`number`
- **描述**：不透明度。范围：0——1,0:完全透明，1：完全不透明。
- **默认值**：1

### title

- **类型**：`string`
- **描述**：图层标题。图层在图层列表或图例中显示的名称。
- **默认值**：''

### type

- **类型**：`LayerType`
- **描述**：图层类型。
- **默认值**：LayerType.Unknown

### isVisible

- **类型**：`boolean`
- **描述**：是否可见。
- **默认值**：true

## method

### load

- **描述**：图层加载完后，发出的事件。

### clone

- **描述**：深度克隆 Layer 对象。

### \_deepClone

- **描述**：定义一个深拷贝函数，接收目标 target 对象。
- **返回值**：对 target 对象深度拷贝后的值。
- **参数**

  | 参数   | 描述       | 类型   | 默认值 |
  | :----- | :--------- | :----- | :----- |
  | target | 被拷贝对象 | object | -      |

# LoadStatus

图层加载状态枚举

| 枚举      | 描述       |
| :-------- | :--------- |
| notLoaded | 没有加载过 |
| loading   | 正在加载   |
| loaded    | 加载成功   |
| failed    | 加载失败   |

# LayerType

图层类型枚举

| 枚举                        | 描述                                                                                                                                    |
| :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| Unknown                     | 未知                                                                                                                                    |
| Group                       | 组图层                                                                                                                                  |
| Tile                        | 瓦片服务图层                                                                                                                            |
| MapImage                    | 地图服务图层                                                                                                                            |
| IGSTile                     | IGServer 瓦片服务图层                                                                                                                   |
| IGSMapImage                 | IGServer 地图服务图层                                                                                                                   |
| IGSVector                   | IGServer 矢量服务图层                                                                                                                   |
| OGCWMTS                     | OGCWMTS 服务图层                                                                                                                        |
| OGCWMS                      | OGCWMS 服务图层                                                                                                                         |
| ArcGISTile                  | ArcGIS 瓦片服务图层                                                                                                                     |
| ArcGISMapImage              | ArcGIS 地图服务图层                                                                                                                     |
| VectorTile                  | 矢量瓦片图层                                                                                                                            |
| WebTile                     | 互联网服务图层                                                                                                                          |
| CustomTile                  | 自定义瓦片服务图层                                                                                                                      |
| CustomMapImageLayer         | 自定义地图服务图层                                                                                                                      |
| AMapMercatorEMap            | 高德电子地图                                                                                                                            |
| AMapMercatorSatelliteMap    | 高德卫星影像图层                                                                                                                        |
| AMapMercatorSatelliteAnnMap | 高德卫星影像图注记图层                                                                                                                  |
| ModelCache                  | 三维模型缓存图层,用于显示三维模型缓存。如：m3d(中地定义的模型缓存格式)，osgb(osgb 格式的倾斜摄影模型)、3dTileset(cesium 标准的模型缓存) |
| Elevation                   | 高程图层，用于接入地形服务                                                                                                              |
| IGSElevation                | IGS 高程图层，用于接入 IGS 三维服务中的地形服务                                                                                         |
| Scene                       | IGS 场景图层,用于对接 IGS 的三维场景服务                                                                                                |
| IGSScene                    | IGS 场景图层,用于对接 IGS 的三维场景服务                                                                                                |
| Graphics                    | 覆盖物(临时绘制)图层                                                                                                                    |
| DataFlow                    | 数据流                                                                                                                                  |
| EsGeoCode                   | 地理编码                                                                                                                                |
| Feature                     | 要素图层                                                                                                                                |
| IGSFeature                  | IGServer 要素图层                                                                                                                       |
| GeoJson                     | geoJson 图层                                                                                                                            |
