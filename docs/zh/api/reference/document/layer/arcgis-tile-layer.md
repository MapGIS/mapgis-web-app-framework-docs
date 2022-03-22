# ArcGIS 瓦片服务图层

构建 ArcGISTileLayer 对象

```js
import { ArcGISTileLayer } from '@mapgis/web-app-framework'
const layer = new ArcGISTileLayer({ url })
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.ArcGISTile

### url

- **类型**：`string`
- **描述**：服务基地址。约定 URL 格式如下：http://[ip]/arcgis/rest/services/{tileName}/MapServer
- **默认值**：''

### version

- **类型**：`string`
- **描述**：服务的版本
- **默认值**：''

### load

- **描述**：图层加载完后，发出的事件。
- **返回值**

  | 返回值           | 描述         | 类型   | 默认值 |
  | :--------------- | :----------- | :----- | :----- |
  | tileInfo         | 瓦片信息     | object | -      |
  | fullExtent       | 图层范围     | object | -      |
  | version          | 服务版本     | string | -      |
  | description      | 描述         | string | -      |
  | spatialReference | 坐标系       | object | -      |
  | loadStatus       | 图层加载状态 | string | -      |

  ### clone

- **描述**：深度克隆 ArcGISTileLayer 对象。
- **返回值**：克隆后的 ArcGISTileLayer 对象。
