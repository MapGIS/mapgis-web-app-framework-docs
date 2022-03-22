# 几何图层

构建 GraphicsLayer 对象

```js
import { GraphicsLayer } from '@mapgis/web-app-framework'
const layer = new GraphicsLayer(layerConfig)
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.Graphics

## method

### load

- **描述**：图层加载完后，发出的事件。
- **返回值**

  | 返回值     | 描述         | 类型   | 默认值 |
  | :--------- | :----------- | :----- | :----- |
  | loadStatus | 图层加载状态 | string | -      |

### clone

- **描述**：深度克隆 GraphicsLayer 对象。
- **返回值**：克隆后的 GraphicsLayer 对象。
