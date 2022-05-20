# IGS 瓦片服务图层

> src/model/document/igs-tile-layer.ts

构建 IGSTileLayer 对象

```js
import { IGSTileLayer } from '@mapgis/web-app-framework'
const layer = new IGSTileLayer({ url })
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.IGSTile

### url

- **类型**：`string`
- **描述**：服务基地址。约定 URL 格式如下：[protocol]://[ip]:[port]/igs/rest/mrms/tile/{hdfName}
- **默认值**：''

## method

### load

- **描述**：图层加载完后，发出的事件。
- **返回值**

  | 返回值     | 描述         | 类型   | 默认值 |
  | :--------- | :----------- | :----- | :----- |
  | loadStatus | 图层加载状态 | string | -      |

### clone

- **描述**：深度克隆 IGSTileLayer 对象。
- **返回值**：克隆后的 IGSTileLayer 对象。

### \_parseUrl

- **描述**：url 解析,提取对应的 ip、port、serverName。约定 URL 格式如下：[protocol]://[ip]:[port]/igs/rest/mrms/tile/{hdfName}
- **返回值**

  | 返回值   | 描述          | 类型   | 默认值 |
  | :------- | :------------ | :----- | :----- |
  | ip       | 数据服务 ip   | string | -      |
  | port     | 数据服务 port | string | -      |
  | tileName | 瓦片服务名    | string | -      |

### \_praseTileInfo

- **描述**：解析瓦片信息。
- **返回值**

  | 返回值     | 描述         | 类型   | 默认值 |
  | :--------- | :----------- | :----- | :----- |
  | fullExtent | 图层范围     | object | -      |
  | tileInfo   | 瓦片服务信息 | object | -      |
