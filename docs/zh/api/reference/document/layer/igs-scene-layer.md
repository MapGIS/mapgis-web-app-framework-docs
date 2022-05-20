# IGS 三维场景服务图层

> src/model/document/igs-scene-layer.ts

构建 IGSSceneLayer 对象

```js
import { IGSSceneLayer } from '@mapgis/web-app-framework'
const layer = new IGSSceneLayer({ url })
```

## 属性

### type

- **类型**：`string`
- **描述**：图层类型
- **默认值**：LayerType.IGSScene

### url

- **类型**：`string`
- **描述**：服务基地址。约定 URL 格式如下：[protocol]://[ip]:[port]/igs/rest/g3d/{docName}

### scenes

- **类型**：`Scene`
- **描述**：文档中的场景
- **默认值**：[]

### activeScene

- **类型**：`Scene`
- **描述**：当前激活的 scene

### extendedPropKeys

- **类型**：`string`
- **描述**：扩展属性的 key 列表，多个用","分隔，"\*"为获取所有
- **默认值**：undefined

### fullExtent

- **类型**：`Rectangle3D`
- **描述**：全图范围
- **默认值**：new Rectangle(0.0, 0.0, 0.0, 0.0)

### popupEnabled

- **类型**：`boolean`
- **描述**：是否支持拾取
- **默认值**：false

### popupOptions

- **类型**：`object`
- **描述**：popup 选项。popup 弹窗时的配置参数,popupOptions 对象中 title 指弹窗的标题，展示 geojson 数据中的某一个字段属性，fields 展示列表，由传参者决定展示哪些字段值。

### highlightStyle

- **类型**：`object`
- **描述**：要素高亮时的显示样式。

```js
import { Style } from '@mapgis/webclient-es6-service'
const { MarkerStyle, LineStyle, PointStyle, FillStyle } = Style
let highlightStyle = new FillStyle()
```

### customPopup

- **类型**：`function`
- **描述**：JSX 风格的自定义 popup 样式内容, (features) => {}, features 为选中或者点击的要素。

### tipsEnabled

- **类型**：`boolean`
- **描述**：是否开启 tooltip 弹窗
- **默认值**：false

### tipsOptions

- **类型**：`object`
- **描述**：tooltip 弹窗时的配置参数，tipsOptions 对象中 title 指弹窗的标题，展示 geojson 数据中的某一个字段属性，fields 展示列表，由传参者决定展示哪些字段值。

### customTips

- **类型**：`function`
- **描述**：JSX 风格的自定义 tips 样式内容, (features) => {}, features 为选中或者点击的要素。

## method

### checkServiceVersion

- **描述**：根据服务地址判断服务类型
- **返回值**：服务类型
- **参数**

| 参数 | 描述     | 类型   | 默认值 |
| :--- | :------- | :----- | :----- |
| url  | 服务地址 | string | -      |

### load

- **描述**：图层加载完后，发出的事件。
- **返回值**

  | 返回值     | 描述         | 类型   | 默认值 |
  | :--------- | :----------- | :----- | :----- |
  | loadStatus | 图层加载状态 | string | -      |
  | scenes     | 文档中的场景 | object | -      |

### clone

- **描述**：深度克隆 IGSSceneLayer 对象。
- **返回值**：克隆后的 IGSSceneLayer 对象。

### \_parseUrl

- **描述**：url 解析,提取对应的 ip、port、docName。约定 URL 格式如下：[protocol]://[ip]:[port]/igs/rest/g3d/{docName}
- **返回值**

  | 返回值  | 描述          | 类型   | 默认值 |
  | :------ | :------------ | :----- | :----- |
  | ip      | 数据服务 ip   | string | -      |
  | port    | 数据服务 port | string | -      |
  | docName | 地图文档名    | string | -      |

# IGSSceneSublayerType

三场景服务图层子图层类型枚举

| 枚举       | 描述                 | 类型   | 默认值 |
| :--------- | :------------------- | :----- | :----- |
| unknow     | 类型未知             | number | -1     |
| vector3D   | 三维矢量数据图层     | number | 1      |
| model      | 三维模型图层         | number | 2      |
| elevation  | 三维高程（地形）图层 | number | 3      |
| label3D    | 三维注记图层         | number | 4      |
| cloud      | 三维云图层           | number | 5      |
| panorama   | 三维街景图层         | number | 6      |
| mapRef     | 二维 Map 引用图层    | number | 7      |
| modelCache | m3d 模型缓存图层     | number | 10     |

# IGSSceneSublayerRenderType

三场景服务图层子图层渲染类型枚举

| 枚举       | 描述             | 类型   | 默认值 |
| :--------- | :--------------- | :----- | :----- |
| unknow     | 类型未知         | number | -1     |
| covering   | 依附层           | number | 0      |
| cloud      | 云层             | number | 1      |
| elevation  | 地形层           | number | 2      |
| model      | 模型层           | number | 3      |
| label      | 注记层           | number | 4      |
| panorama   | 街景图层         | number | 5      |
| modelCache | m3d 模型缓存图层 | number | 10     |

# Scene

构建 Scene 对象

```js
import { Scene } from '@mapgis/web-app-framework'
const scene = new Scene()
```

## 属性

### sceneIndex

- **类型**：`number`
- **描述**：该场景在场景文档中的索引
- **默认值**：-1

### sceneName

- **类型**：`string`
- **描述**：场景名
- **默认值**：''

### sceneMode

- **类型**：`string`
- **描述**：场景类型
- **默认值**：''

### sceneRange

- **类型**：`Rectangle3D`
- **描述**：场景包围盒

### sublayers

- **类型**：`IGSSceneSublayer[]`
- **描述**：场景中包含的图层列表
- **默认值**：[]

### layer

- **类型**：`IGSSceneLayer`
- **描述**：场景所属的场景服务图层

### extendedProps

- **类型**：`object`
- **描述**：扩展属性

## method

### fromJSON

- **描述**：通过 json 对象初始化该对象
- **参数**：json 对象

### toJSON

- **描述**：将该对象转换为 json 对象

### clone

- **描述**：深度克隆 Scene 对象。
- **返回值**：克隆后的 Scene 对象。

# IGSSceneSublayer

构建 IGSSceneSublayer 对象

```js
import { IGSSceneSublayer } from '@mapgis/web-app-framework'
const sublayer = new IGSSceneSublayer()
```

## 属性

### id

- **类型**：`string`
- **描述**：图层唯一 id
- **默认值**：''

### maximumScreenSpaceError

- **类型**：`number`
- **描述**：最大屏幕几何异常
- **默认值**：16

### layerIndex

- **类型**：`number`
- **描述**：子图层的索引
- **默认值**：-1

### title

- **类型**：`string`
- **描述**：子图层名称
- **默认值**：''

### url

- **类型**：`string`
- **描述**：子图层 gdbp 地址,如果是模型缓存图层的话，为 mcj 文件的路径。
- **默认值**：''

### visible

- **类型**：`boolean`
- **描述**：子图层是否可见。
- **默认值**：true

### type

- **类型**：`IGSSceneSublayerType`
- **描述**：子图层类型。
- **默认值**：IGSSceneSublayerType.unknow

### renderType

- **类型**：`IGSSceneSublayerRenderType`
- **描述**：子图层渲染类型。
- **默认值**：IGSSceneSublayerRenderType.unknow

### range

- **类型**：`Rectangle3D`
- **描述**：子图层的外包范围

### beginLevel

- **类型**：`number`
- **描述**：开始级别。
- **默认值**：-1

### endLevel

- **类型**：`number`
- **描述**：结束级别。
- **默认值**：-1

### originPoint

- **类型**：`Point3D`
- **描述**：网格划分的源点。

### maxFrameSize

- **类型**：`Size`
- **描述**：最大网格大小。

### layer

- **类型**：`IGSSceneLayer`
- **描述**：子图层所属的场景服务图层。

### extendedProps

- **类型**：`object`
- **描述**：扩展属性。

## method

### fromJSON

- **描述**：通过 json 对象初始化该对象
- **参数**：json 对象

### toJSON

- **描述**：将该对象转换为 json 对象

### clone

- **描述**：深度克隆 IGSSceneSublayer 对象。
- **返回值**：克隆后的 IGSSceneSublayer 对象。
