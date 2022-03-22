# IGS 矢量要素图层

构建 IGSFeatureLayer 对象

```js
import { IGSFeatureLayer } from '@mapgis/web-app-framework'
const layer = new IGSFeatureLayer({ url })
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.IGSFeature

### url

- **类型**：`string`
- **描述**：矢量要素图层：http://[host]:[port]/igs/rest/mrfs/layer/query?gdbp={gdbp}
- **默认值**：''

### featureStyle

- **类型**：`object`
- **描述**：图层中要素的显示样式。与图层组件中的定义保持一致。

```js
import { Style } from '@mapgis/webclient-es6-service'
const { MarkerStyle, LineStyle, PointStyle, FillStyle } = Style
let featureStyle = new FillStyle()
```

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

- **描述**：深度克隆 IGSFeatureLayer 对象。
- **返回值**：克隆后的 IGSFeatureLayer 对象。

### \_parseUrl

- **描述**：url 解析,提取对应的 ip、port、gdbp。约定 URL 格式如下：http://[host]:[port]/igs/rest/mrfs/layer/query?gdbp={gdbp}
- **返回值**

  | 返回值 | 描述          | 类型   | 默认值 |
  | :----- | :------------ | :----- | :----- |
  | ip     | 数据服务 ip   | string | -      |
  | port   | 数据服务 port | string | -      |
  | gdbp   | 图层 gdbp     | string | -      |
