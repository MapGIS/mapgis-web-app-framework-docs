# ArcGIS 地图服务图层

构建 ArcGISMapImageLayer 对象

```js
import { ArcGISMapImageLayer } from '@mapgis/web-app-framework'
const layer = new ArcGISMapImageLayer({ url })
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.ArcGISMapImage

### capabilities

- **类型**：`string`
- **描述**：表示该图层支持的能力。如："Map,Query,Data"

### imageMaxHeight

- **类型**：`number`
- **描述**：该服务可生成的图片的最大高度，单位：像素
- **默认值**：2048

### imageMaxWidth

- **类型**：`number`
- **描述**：该服务可生成的图片的最大宽度，单位：像素
- **默认值**：2048

### maxScale

- **类型**：`number`
- **描述**：支持的最大比例尺，值为比例尺的分母
- **默认值**：0.0

### minScale

- **类型**：`number`
- **描述**：支持的最小比例尺，值为比例尺的分母
- **默认值**：0.0

### version

- **类型**：`string`
- **描述**：服务的版本
- **默认值**：''

### url

- **类型**：`string`
- **描述**：服务基地址。约定 URL 格式如下：http://[ip]/arcgis/rest/services/{mapName}/MapServer
- **默认值**：''

## method

### load

- **描述**：图层加载完后，发出的事件。
- **返回值**

  | 返回值           | 描述         | 类型   | 默认值 |
  | :--------------- | :----------- | :----- | :----- |
  | fullExtent       | 图层范围     | object | -      |
  | capabilities     | 支持的能力   | string | -      |
  | version          | 服务版本     | string | -      |
  | description      | 描述         | string | -      |
  | sublayers        | 子图层       | object | -      |
  | spatialReference | 坐标系       | object | -      |
  | loadStatus       | 图层加载状态 | string | -      |

### clone

- **描述**：深度克隆 ArcGISMapImageLayer 对象。
- **返回值**：克隆后的 ArcGISMapImageLayer 对象。

# ArcGIS 地图服务子图层

构建 ArcGISSublayer 对象

```js
import { ArcGISSublayer } from '@mapgis/web-app-framework'
const sublayer = new ArcGISSublayer()
```

## 属性

### geomType

- **类型**：`string`
- **描述**：几何类型,如："esriGeometryPolyline"
- **默认值**：''

### maxScale

- **类型**：`number`
- **描述**：支持的最大比例尺，值为比例尺的分母
- **默认值**：0.0

### minScale

- **类型**：`number`
- **描述**：支持的最小比例尺，值为比例尺的分母
- **默认值**：0.0

## method

### fromJSON

- **描述**：通过 json 对象初始化该对象
- **参数**：json 对象

### toJSON

- **描述**：将该对象转换为 json 对象

### clone

- **描述**：深度克隆 ArcGISSublayer 对象。
- **返回值**：克隆后的 ArcGISSublayer 对象。
