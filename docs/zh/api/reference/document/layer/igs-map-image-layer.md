# IGS 矢量地图文档图层

> src/model/document/igs-map-image-layer.ts

构建 IGSMapImageLayer 对象

```js
import { IGSMapImageLayer } from '@mapgis/web-app-framework'
const layer = new IGSMapImageLayer({ url })
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.IGSMapImage

### url

- **类型**：`string`
- **描述**：服务基地址。约定 URL 格式如下：[protocol]://[ip]:[port]/igs/rest/mrms/docs/{docName}
- **默认值**：''

## method

### load

- **描述**：图层加载完后，发出的事件。
- **返回值**

  | 返回值     | 描述             | 类型   | 默认值 |
  | :--------- | :--------------- | :----- | :----- |
  | loadStatus | 图层加载状态     | string | -      |
  | fullExtent | 获取图层全图范围 | object | -      |
  | sublayers  | 子图层           | string | 'Net'  |

### clone

- **描述**：深度克隆 IGSMapImageLayer 对象。
- **返回值**：克隆后的 IGSMapImageLayer 对象。

### \_parseUrl

- **描述**：url 解析,提取对应的 ip、port、docName。约定 URL 格式如下：[protocol]://[ip]:[port]/igs/rest/mrms/docs/{docName}
- **返回值**

  | 返回值  | 描述          | 类型   | 默认值 |
  | :------ | :------------ | :----- | :----- |
  | ip      | 数据服务 ip   | string | -      |
  | port    | 数据服务 port | string | -      |
  | docName | 地图文档名    | string | -      |

# IGS 矢量地图文档图层子图层

构建 IGSSublayer 对象

```js
import { IGSSublayer } from '@mapgis/web-app-framework'
const layer = new IGSSublayer()
```

## 属性

### geomType

- **类型**：`string`
- **描述**：几何类型。Lin:线、Pnt:点、Net:网络类
- **默认值**：''

### sysLibraryGuid

- **类型**：`string`
- **描述**：系统库 GUID
- **默认值**：''

## method

### fromJSON

- **描述**：通过 json 对象初始化该对象
- **参数**：json 对象

### toJSON

- **描述**：将该对象转换为 json 对象

### clone

- **描述**：深度克隆 IGSSublayer 对象。
- **返回值**：克隆后的 IGSSublayer 对象。
