# 要素图层

构建 FeatureLayer 对象

```js
import { IGSFeatureLayer } from '@mapgis/web-app-framework'
const layer = new IGSFeatureLayer({ url })
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.Feature

### maxScale

- **类型**：`number`
- **描述**：图层显示的最大比例尺:在地图视图中超出该比例尺,图层将不再显示。
- **默认值**：0.0。表示该图层的显示不受最大比例尺的限制，可以无限放大。
- **示例**

```js
// The layer will not be visible when the view is zoomed in beyond a scale of 1:2,000
layer.maxScale = 2000
```

### minScale

- **类型**：`number`
- **描述**：图层显示的最小比例尺:在地图视图中超出该比例尺,图层将不再显示。
- **默认值**：0.0。表示该图层的显示不受最小比例尺的限制，可以无限缩小。

### tokenKey

- **类型**：`string`
- **描述**：token 的 key 值
- **默认值**：token

### tokenValue

- **类型**：`string`
- **描述**：token 的参数值
- **默认值**：''

### spatialReference

- **类型**：`SpatialReference`
- **描述**：空间参数信息
- **默认值**：new SpatialReference()

### definitionExpression

- **类型**：`string`
- **描述**：SQL 查询条件，用于过滤要素
- **默认值**：''

### elevationInfo

- **类型**：`ElevationInfo`
- **描述**：高程信息
- **默认值**：new ElevationInfo()

### geomType

- **类型**：`string`
- **描述**：几何类型。Lin:线、Pnt:点、Net:网络类
- **默认值**：''

### outFields

- **类型**：`string[]`
- **描述**：服务器端返回的要素的字段列表。如果没有设置，默认只返回 FID 字段。返回所有字段，用["*"]。
- **默认值**：''
- **示例**：指定字段:["name","GDP_2016","GDP_2017"]

### popupEnabled

- **类型**：`boolean`
- **描述**：是否支持拾取
- **默认值**：true

### refreshInterval

- **类型**：`number`
- **描述**：刷新间隔，单位为分钟。默认值为 0。0 表示不刷新。最小间隔为 0.1 分钟。
- **默认值**：0

### screenSizePerspectiveEnabled

- **类型**：`boolean`
- **描述**：对于像素单位的元素(icon、labels 等)，是否开启透视投影。
- **默认值**：true

# ElevationMode

高程模式枚举

| 枚举             | 描述           |
| :--------------- | :------------- |
| OnTheGround      | 贴地形表面     |
| RelativeToGround | 相对于地形表面 |
| AbsoluteHeight   | 绝对高度       |
| RelativeToScene  | 相对于场景     |

```js
import { ElevationMode } from '@mapgis/web-app-framework'
const mode = ElevationMode.OnTheGround
```

# LengthUnit

距离单位

| 枚举       | 描述 |
| :--------- | :--- |
| Meters     | 米   |
| Kilometers | 千米 |

```js
import { LengthUnit } from '@mapgis/web-app-framework'
const unit = LengthUnit.Meters
```

# FeatureExpressionInfo

要素表达式信息

## 属性

### expression

- **类型**：`string`
- **描述**：用于确定要素高度的表达式。设置了该表达式后，几何自身的 z 坐标将会忽略。当高程模式为 OnTheGround 时，该属性无效。
- **默认值**：''

# ElevationInfo

高程信息类。描述要素在 Z 方向上如何放置。

```js
import { ElevationInfo } from '@mapgis/web-app-framework'
const elevationInfo: ElevationInfo = new ElevationInfo()
```

## 属性

### mode

- **类型**：`string`
- **描述**：高程模式
- **默认值**：ElevationMode.OnTheGround

### offset

- **类型**：`number`
- **描述**：高程偏移。默认为零，默认单位为米。
- **默认值**：0

### featureExpressionInfo

- **类型**：`featureExpressionInfo|undefined`
- **描述**：要素表达式信息

### unit

- **类型**：`string`
- **描述**：offset 和 featureExpression 的单位。
- **默认值**：LengthUnit.Meters
