# OGCWMS 服务图层

> src/model/document/ogc-wms-layer.ts

构建 OGCWMSLayer 对象

```js
import { OGCWMSLayer } from '@mapgis/web-app-framework'
const layer = new OGCWMSLayer({ url })
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.OGCWMS

### format

- **类型**：`ModelCacheFormat`
- **描述**：模型缓存格式
- **默认值**：ModelCacheFormat.m3d

### url

- **类型**：`string`
- **描述**：缓存基地址
- **默认值**：''

### maximumScreenSpaceError

- **类型**：`number`
- **描述**：最大屏幕几何异常
- **默认值**：16

### modelSwitchEnabled

- **类型**：`boolean`
- **描述**：是否支持多模态切换
- **默认值**：false

### popupEnabled

- **类型**：`boolean`
- **描述**：是否支持拾取
- **默认值**：false

### popupOptions

- **类型**：`object`
- **描述**：popup 选项。popup 弹窗时的配置参数,popupOptions 对象中 title 指弹窗的标题，展示 geojson 数据中的某一个字段属性，fields 展示列表，由传参者决定展示哪些字段值。

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
- **描述**：tooltip 弹窗时的配置参数，tipsOptions 对象中 title 指弹窗的标题，展示 geojson 数据中的某一个字段属性，fields 展示列表，由传参者决定展示哪些字段值

### customTips

- **类型**：`object`
- **描述**：JSX 风格的自定义 tips 样式内容, (features) => {}, features 为选中或者点击的要素。

## method

### load

- **描述**：图层加载完后，发出的事件。
- **返回值**

  | 返回值     | 描述         | 类型   | 默认值 |
  | :--------- | :----------- | :----- | :----- |
  | loadStatus | 图层加载状态 | string | -      |

### clone

- **描述**：深度克隆 ModelCacheLayer 对象。
- **返回值**：克隆后的 ModelCacheLayer 对象。
