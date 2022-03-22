# GEOJSON 图层

构建 GeoJsonLayer 对象

```js
import { GeoJsonLayer } from '@mapgis/web-app-framework'
const layer = new GeoJsonLayer(layerConfig)
```

## 属性

### elevationInfo

- **类型**：`ElevationInfo`
- **描述**：高程信息
- **默认值**：new ElevationInfo()

### geomType

- **类型**：`string`
- **描述**：几何类型。Lin:线、Pnt:点、Net:网络类。
- **默认值**：''

### spatialReference

- **类型**：`SpatialReference`
- **描述**：空间参数信息
- **默认值**：new SpatialReference()

### url

- **类型**：`string`
- **描述**：通过 GeoJson 文件的 URL 来设置数据源。指向实际的文件。url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
- **默认值**：''

### source

- **类型**：`object`
- **描述**：通过 GeoJSON 对象来设置数据源。

### featureStyle

- **类型**：`object`
- **描述**：图层中要素的显示样式。

```js
import { Style } from '@mapgis/webclient-es6-service'
const { MarkerStyle, LineStyle, PointStyle, FillStyle } = Style
let featureStyle = new FillStyle()
```

### popupEnabled

- **类型**：`boolean`
- **描述**：是否支持拾取。
- **默认值**：false

### popupOptions

- **类型**：`object`
- **描述**：popup 弹窗时的配置参数,popupOptions 对象中 title 指弹窗的标题，展示 geojson 数据中的某一个字段属性，fields 展示列表，由传参者决定展示哪些字段值。

### highlightStyle

- **类型**：`object`
- **描述**：要素高亮时的显示样式。

```js
import { Style } from '@mapgis/webclient-es6-service'
const { MarkerStyle, LineStyle, PointStyle, FillStyle } = Style
let highlightStyle = new FillStyle()
```

### customPopup

- **类型**：`function`
- **描述**：JSX 风格的自定义 popup 样式内容, (features) => {}, features 为选中或者点击的要素

### tipsEnabled

- **类型**：`boolean`
- **描述**：是否开启 tooltip 弹窗
- **默认值**：false

### tipsOptions

- **类型**：`object`
- **描述**：tooltip 弹窗时的配置参数，tipsOptions 对象中 title 指弹窗的标题，展示 geojson 数据中的某一个字段属性，fields 展示列表，由传参者决定展示哪些字段值。

### customTips

- **类型**：`function`
- **描述**：JSX 风格的自定义 tips 样式内容, (features) => {}, features 为选中或者点击的要素。

### tokenKey

- **类型**：`string`
- **描述**：token 的 key 值
- **默认值**：token

### tokenValue

- **类型**：`string`
- **描述**：token 的参数值
- **默认值**：''

## method

### load

- **描述**：图层加载完后，发出的事件。
- **返回值**

  | 返回值     | 描述         | 类型   | 默认值 |
  | :--------- | :----------- | :----- | :----- |
  | loadStatus | 图层加载状态 | string | -      |

### clone

- **描述**：深度克隆 GeoJsonLayer 对象。
- **返回值**：克隆后的 GeoJsonLayer 对象。
