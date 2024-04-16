# api

## getAppConfig

- **类型** `Function`
- **详细** 获取[应用配置](/zh/config/app.html)。包含应用图标、标题、主题、微件布局和目录数据等信息。

```js
// 获取应用配置
this.config = await api.getAppConfig()
// 拷贝应用logo、标题和链接列表
this.app.logo = this.config.logo
this.app.title = this.config.title
this.app.subtitle = this.config.subtitle
this.app.links = deepClone(this.config.links)
this.app.copyright = this.config.copyright
// 拷贝数据目录
if (this.config.data) {
  this.app.data = deepClone(this.config.data)
}
```

## getConfig

- **类型** `Function`
- **详细** 获取[公共配置](https://osmapgis.gitee.io/mapgis-pan-spatial-map-docs/zh/config/common/base.html)。目前公共配置有：基础配置、行政区划配置、图幅号配置。
- **参数**

  | 参数 | 说明           | 类型   | 默认值 |
  | ---- | -------------- | ------ | ------ |
  | name | 要获取的配置名 | string | -      |

```js
// 基础配置
const config = await api.getConfig('base')

// 行政区划配置
const districtConfig = await api.getConfig('district')

// 图幅号配置
const frameConfig = await api.getConfig('sheet')
```

## saveConfig

- **类型** `Function`
- **详细** 保存[公共配置](https://osmapgis.gitee.io/mapgis-pan-spatial-map-docs/zh/config/common/base.html)。目前公共配置有：基础配置、行政区划配置、图幅号配置。
- **参数**

  | 参数 | 说明             | 类型   | 默认值 |
  | ---- | ---------------- | ------ | ------ |
  | data | 要保存的配置信息 | object | -      |

```js
api
  .saveConfig({
    name: 'base',
    config: config
  })
  .then(() => {
    console.log('更新基础配置成功')
  })
  .catch(() => {
    console.log('更新基础配置失败')
  })
```

## getWidgetConfig

- **类型** `Function`
- **详细** 获取微件配置
- **参数**

  | 参数 | 说明                                           | 类型   | 默认值 |
  | ---- | ---------------------------------------------- | ------ | ------ |
  | name | 微件名，已有微件名可在管理平台微件管理中查看。 | string | -      |

```js
const config = await api.getWidgetConfig('city-grow')
```

## saveWidgetConfig

- **类型** `Function`
- **详细** 修改微件配置
- **参数**

  | 参数 | 说明                                                                                                 | 类型   | 默认值 |
  | ---- | ---------------------------------------------------------------------------------------------------- | ------ | ------ |
  | data | [微件配置](https://osmapgis.gitee.io/mapgis-pan-spatial-map-docs/zh/config/widget/data-catalog.html) | string | -      |

```js
api
  .saveWidgetConfig({
    name: 'city-grow',
    config: config
  })
  .then(() => {
    console.log('更新城市生长配置成功')
  })
  .catch(() => {
    console.log('更新城市生长配置失败')
  })
```

## updateData

- **类型** `Function`
- **详细** 更新数据目录节点信息
- **参数**

  | 参数 | 说明         | 类型   | 默认值 |
  | ---- | ------------ | ------ | ------ |
  | data | 数据目录节点 | object | -      |

```js
const data = {
  children: undefined,
  dataId: 104,
  description: '湖北省4326',
  disableCheckbox: false,
  extend: {
    // 扩展属性
    checked: false, // 默认是否加载
    legend: '', // 图例
    location: true, // 勾选时是否跳转
    roll: true, // 是否用于卷帘
    selfAdaptio: false // 是否参与地表自动透明
  },
  gdbps: '',
  guid: '104',
  icon: '',
  ip: '192.168.82.91',
  layerProperty: {
    alpha: 100, // 初始透明度
    enableModelStretch: false, // 是否开启模型拉伸
    enableModelSwitch: false, // 是否开启多模态切换
    enablePopup: false, // 是否开启拾取
    fillClip: false, // 是否支持剖切封边
    hasSectionGeometry: false, // 是否有剖切几何
    luminanceAtZenith: 0.2, // 亮度比例
    maximumScreenSpaceError: 16, // 模型精细度
    offset: -2, // 模型拉伸偏移量
    scaleX: 1, // 模型x轴缩放比例
    scaleY: 1, // 模型x轴缩放比例
    scaleZ: 1 // 模型x轴缩放比例
  },
  level: 1,
  name: '湖北省4326',
  opacity: 1,
  port: '8089',
  serverName: 'Map:湖北省4326',
  serverType: 5,
  serverURL: '',
  tokenKey: '',
  tokenValue: ''
}

const { dataId, extend } = data
// dataId是必须参数，其他参数，需要更新哪个就加上哪个
api.updateData({ dataId, extend })
```

## imagesUpload

- **类型** `Function`
- **详细** 图片上传
- **参数**

  | 参数 | 说明         | 类型   | 默认值 |
  | ---- | ------------ | ------ | ------ |
  | data | 图片文件对象 | object | -      |

## getFrameNoByCoord

- **类型** `Function`
- **详细** 根据坐标获取图幅号
- **参数**

  | 参数      | 说明       | 类型   | 默认值 |
  | --------- | ---------- | ------ | ------ |
  | ip        | 服务 IP    | string | -      |
  | port      | 服务 Port  | string | -      |
  | lon       | 经度       | number | -      |
  | lat       | 纬度       | number | -      |
  | scale     | 比例尺     | number | -      |
  | originSrs | 源参考系   | string | -      |
  | destSrs   | 目标参考系 | string | -      |

```js
const {
  data: { frameNo }
} = await api.getFrameNoByCoord(
  this.frameConfig.ip,
  this.frameConfig.port,
  this.coordInDefaultCRS[0],
  this.coordInDefaultCRS[1],
  this.scale,
  this.crs,
  baseConfigInstance.config.projectionName
)
```

## getFrameExtentByNo

- **类型** `Function`
- **详细** 根据图幅号获取图幅范围
- **参数**

| 参数      | 说明       | 类型   | 默认值 |
| --------- | ---------- | ------ | ------ |
| ip        | 服务 IP    | string | -      |
| port      | 服务 Port  | string | -      |
| frameNo   | 图幅号     | string | -      |
| originSrs | 源参考系   | string | -      |
| destSrs   | 目标参考系 | string | -      |

```js
const {
  data: { XMin, YMin, XMax, YMax }
} = await api.getFrameExtentByNo(
  this.frameConfig.ip,
  this.frameConfig.port,
  val,
  baseConfigInstance.config.projectionName,
  baseConfigInstance.config.projectionName
)
```

## getFrameNoList

- **类型** `Function`
- **详细** 获取图幅号列表
- **参数**

| 参数       | 说明             | 类型   | 默认值 |
| ---------- | ---------------- | ------ | ------ |
| ip         | 服务 IP          | string | -      |
| port       | 服务 Port        | string | -      |
| xMin       | 指定范围的 xMin  | number | -      |
| yMin       | 指定范围的 yMin  | number | -      |
| xMax       | 指定范围的 xMax  | number | -      |
| yMax       | 指定范围的 yMax  | number | -      |
| scale      | 指定比例尺       | number | -      |
| pageNumber | 页码数           | number | -      |
| pageSize   | 每页包含的数据数 | number | -      |
| keyword    | 关键字           | string | -      |
| originSrs  | 源参考系         | string | -      |
| destSrs    | 目标参考系       | string | -      |

```js
const { content, totalElements } = await api.getFrameNoList(
  this.frameConfig.ip,
  this.frameConfig.port,
  this.frameConfig.gdbp,
  xMin,
  yMin,
  xMax,
  yMax,
  scale,
  pageNumber - 1,
  pageSize,
  keyword,
  baseConfigInstance.config.projectionName,
  baseConfigInstance.config.projectionName
)
```

## getScriptList

- **类型** `Function`
- **详细** 获取态势推演脚本列表
- **参数**

| 参数 | 说明      | 类型   | 默认值 |
| ---- | --------- | ------ | ------ |
| ip   | 服务 IP   | string | -      |
| port | 服务 PORT | string | -      |
| name | 服务名    | string | -      |

## getScriptById

- **类型** `Function`
- **详细** 根据脚本 ID 获取态势推演脚本
- **参数**

| 参数 | 说明      | 类型   | 默认值 |
| ---- | --------- | ------ | ------ |
| ip   | 服务 IP   | string | -      |
| port | 服务 PORT | string | -      |
| name | 服务名    | string | -      |
| id   | 脚本 id   | string | -      |

## saveScriptById

- **类型** `Function`
- **详细** 根据脚本参数，保存/更新态势推演脚本
- **参数**

| 参数         | 说明                                 | 类型   | 默认值 |
| ------------ | ------------------------------------ | ------ | ------ |
| ip           | 服务 IP                              | string | -      |
| port         | 服务 PORT                            | string | -      |
| name         | 服务名                               | string | -      |
| scriptParams | 脚本参数，里面必须包含 scriptId 属性 | object | -      |

## removeScriptById

- **类型** `Function`
- **详细** 根据脚本 id，删除态势推演脚本
- **参数**

| 参数 | 说明      | 类型   | 默认值 |
| ---- | --------- | ------ | ------ |
| ip   | 服务 IP   | string | -      |
| port | 服务 PORT | string | -      |
| name | 服务名    | string | -      |
| id   | 脚本 id   | string | -      |

## getSymbolLibsById

- **类型** `Function`
- **详细** 根据脚本 id，获取符号库列表
- **参数**

| 参数 | 说明      | 类型   | 默认值 |
| ---- | --------- | ------ | ------ |
| ip   | 服务 IP   | string | -      |
| port | 服务 PORT | string | -      |
| name | 服务名    | string | -      |
| id   | 脚本 id   | string | -      |
