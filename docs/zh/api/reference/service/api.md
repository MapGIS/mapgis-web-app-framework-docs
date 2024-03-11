# api

## getConfig

- **类型** `Function`
- **详细** 获取公共配置
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

## getWidgetConfig

- **类型** `Function`
- **详细** 获取微件配置
- **参数**

  | 参数 | 说明   | 类型   | 默认值 |
  | ---- | ------ | ------ | ------ |
  | name | 微件名 | string | -      |

```js
const config = await api.getWidgetConfig('city-grow')
```

## saveWidgetConfig

- **类型** `Function`
- **详细** 修改微件配置
- **参数**

  | 参数 | 说明     | 类型   | 默认值 |
  | ---- | -------- | ------ | ------ |
  | data | 微件配置 | string | -      |

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

## imagesUpload

- **类型** `Function`
- **详细** 图片上传

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
