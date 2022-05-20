# 地图服务图层

> src/model/document/map-image-layer.ts

构建 MapImageLayer 对象

```js
import { MapImageLayer } from '@mapgis/web-app-framework'
const layer = new MapImageLayer()
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.MapImage

### maxScale

- **类型**：`number`
- **描述**：图层显示的最大比例尺:在地图视图中超出该比例尺,图层将不再显示。
- **默认值**：0. 0。表示该图层的显示不受最大比例尺的限制，可以无限放大。

### minScale

- **类型**：`number`
- **描述**：图层显示的最小比例尺:在地图视图中超出该比例尺,图层将不再显示。
- **默认值**：0. 0。表示该图层的显示不受最小比例尺的限制，可以无限缩小。

### sublayers

- **类型**：`Sublayer[]`
- **描述**：子图层。
- **默认值**：[]

### tokenKey

- **类型**：`string`
- **描述**：token 的参数名。
- **默认值**：''

### tokenValue

- **类型**：`string`
- **描述**：token 的参数值。
- **默认值**：''

### imageFormat

- **类型**：`string`
- **描述**：图片格式。
- **默认值**：'png'

### spatialReference

- **类型**：`SpatialReference`
- **描述**：空间参数信息。
- **默认值**：new SpatialReference()

### allSublayers

- **类型**：`Sublayer[]`
- **描述**：所有的子图层。包括子图层的子图层。
- **默认值**：[]

## method

### findSublayerById

- **描述**：通过子图层 ID 获取子图层。
- **返回值**：查找到的 Sublayer 对象。
- **参数**

  | 参数       | 描述    | 类型   | 默认值 |
  | :--------- | :------ | :----- | :----- |
  | sublayerID | 图层 ID | string | -      |

### getImageUrl

- **描述**：根据出图的范围、图片的宽高获取图片的 url。
- **返回值**：图片的 url。
- **参数**

  | 参数   | 描述 | 类型      | 默认值 |
  | :----- | :--- | :-------- | :----- |
  | extent | 范围 | Rectangle | -      |
  | width  | 宽度 | number    | -      |
  | height | 高度 | number    | -      |

# MapImageLayer 的子图层

构建 Sublayer 对象

```js
import { Sublayer } from '@mapgis/web-app-framework'
const layer = new Sublayer()
```

## 属性

### id

- **类型**：`string`
- **描述**：图层的唯一标识。在服务器的请求参数中,用图层的 id 代表该图层
- **默认值**：''

### layer

- **类型**：`MapImageLayer`
- **描述**：该子图层所属的图层。

### sublayers

- **类型**：`Sublayer[]`
- **描述**：子图层列表，子图层支持多层嵌套。
- **默认值**：[]

### title

- **类型**：`string`
- **描述**：标题。用于在图层列表或图例中标识该图层。
- **默认值**：''

### url

- **类型**：`string`
- **描述**：子图层的 url。
- **默认值**：''

### visible

- **类型**：`boolean`
- **描述**：是否可见。
- **默认值**：true

## method

### fromJSON

- **描述**：通过 json 对象初始化该对象
- **参数**：json 对象

### toJSON

- **描述**：将该对象转换为 json 对象

### clone

- **描述**：深度克隆 Sublayer 对象。
- **返回值**：克隆后的 Sublayer 对象。
