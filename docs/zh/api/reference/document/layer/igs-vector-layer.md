# IGS 矢量图层

> src/model/document/igs-vector-layer.ts

构建 IGSVectorLayer 对象

```js
import { IGSVectorLayer } from '@mapgis/web-app-framework'
const layer = new IGSVectorLayer({ url })
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.IGSVector

### geomType

- **类型**：`string`
- **描述**：网络分析类特有字段，此字段等于 Net 时为网络分析类
- **默认值**：''

### url

- **类型**：`string`
- **描述**：服务基地址。约定 URL 格式如下：[protocol]://[ip]:[port]/igs/rest/mrms/layers
- **默认值**：''

### gdbps

- **类型**：`string`
- **描述**：图层的 gdbp 地址，允许多个图层。语法：gdbp1,gdbp2,gdbp3。例：gdbps= gdbp://MapGisLocal/示例数据/ds/世界地图/sfcls/海洋陆地, gdbp://MapGisLocal/示例数据/ds/世界地图/sfcls/国界
- **默认值**：''

## method

### load

- **描述**：图层加载完后，发出的事件。
- **返回值**

  | 返回值     | 描述                                 | 类型   | 默认值 |
  | :--------- | :----------------------------------- | :----- | :----- |
  | loadStatus | 图层加载状态                         | string | -      |
  | fullExtent | 获取图层全图范围                     | object | -      |
  | geomType   | 当 Type 为 22 设置 geomType 为网络类 | string | 'Net'  |

### clone

- **描述**：深度克隆 IGSVectorLayer 对象。
- **返回值**：克隆后的 IGSVectorLayer 对象。

### \_parseUrl

- **描述**：url 解析,提取对应的 ip、port。约定 URL 格式如下：[protocol]://[ip]:[port]/igs/rest/mrms/layers
- **返回值**

  | 返回值 | 描述          | 类型   | 默认值 |
  | :----- | :------------ | :----- | :----- |
  | ip     | 数据服务 ip   | string | -      |
  | port   | 数据服务 port | string | -      |
