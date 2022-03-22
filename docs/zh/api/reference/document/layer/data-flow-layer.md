# 数据流图层

构建 DataFlowLayer 对象

```js
import { DataFlowLayer } from '@mapgis/web-app-framework'
const layer = new DataFlowLayer({ url })
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.DataFlow

### spatialReference

- **类型**：`SpatialReference`
- **描述**：空间参数信息
- **默认值**：new SpatialReference()

### url

- **类型**：`string`
- **描述**：服务基地址。约定 URL 格式如下：ws://[ip]:[port]/dataflow/cars_xian/subscribe
- **默认值**：''

### layerStyle

- **类型**：`object`
- **描述**：数据流标注的样式
- **默认值**

```js
{
    type: 'point',
    radius: 24,
    color: '#FFFF00',
    outlineColor: '#FF0000',
    outlineWidth: 2,
    outlineOpacity: 1
  }
```

## method

### setLayerStyle

- **描述**：设置 layerStyle
- **参数**

  | 参数       | 描述     | 类型   | 默认值 |
  | :--------- | :------- | :----- | :----- |
  | layerStyle | 图层样式 | object | -      |

### load

- **描述**：图层加载完后，发出的事件。
- **返回值**

  | 返回值     | 描述         | 类型   | 默认值 |
  | :--------- | :----------- | :----- | :----- |
  | loadStatus | 图层加载状态 | string | -      |

  ### clone

- **描述**：深度克隆 DataFlowLayer 对象。
- **返回值**：克隆后的 DataFlowLayer 对象。
