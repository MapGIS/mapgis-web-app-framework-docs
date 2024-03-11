# AppMixin

应用基础混入，提供 applicaiton（应用对象）、designTime（设计时状态）、document（文档）、theme（主题）、mapRender（渲染引擎）、地图模式切换、属性表开关等功能。

## data

| 参数         | 说明              | 类型   | 可选值 | 默认值 | 版本 |
| ------------ | ----------------- | ------ | ------ | ------ | ---- |
| mapboxRender | MapBox 渲染器类型 | string |        |        |      |
| cesiumRender | Cesium 渲染器类型 | string |        |        |      |

## computed

| 参数         | 说明                                                                          | 类型    | 可选值 | 默认值 | 版本 |
| ------------ | ----------------------------------------------------------------------------- | ------- | ------ | ------ | ---- |
| application  | 应用对象。                                                                    | object  |        |        |      |
| designTime   | 是否是设计时。                                                                | object  |        |        |      |
| theme        | 应用主题。                                                                    | object  |        |        |      |
| document     | 应用文档，支持设置。                                                          | object  |        |        |      |
| baseUrl      | 应用基础 url，与 baseAPI 相关。                                               | string  |        |        |      |
| appConfigUrl | 应用配置 url，由 baseAPI 和 appConfigPath 拼接而成。                          | string  |        |        |      |
| appAssetsUrl | 应用资源 url，由 baseAPI 和 appAssetsPath 拼接而成。                          | string  |        |        |      |
| appLogo      | 应用 logo，如果是内联 svg，直接返回，否则，由 appAssetsUrl 和 logo 拼接而成。 | string  |        |        |      |
| mapRender    | 地图渲染器，支持设置，设置后，会调用`onMapModeChanged`方法。                  | string  |        |        |      |
| is2DMapMode  | 是否是 2D 渲染器。                                                            | boolean |        |        |      |

## methods

### mergeProps

- **描述**：合并两个对象的属性，返回一个新的对象。
- **返回值**：合并后的对象
- **参数**：多个 props，多个对象的属性
- **示例**

```js
const props1 = {}
const props2 = {}
const props3 = this.mergeProps(props1, props2)
```

### switchMapMode

- **描述**：切换地图模式（在二维和三维之间切换，当前模式是在 MapBox 地图引擎和 Cesium 地图引擎下切换）。

### onMapModeChanged

- **描述**：地图模式发生改变后调用，混入者可覆盖该方法实现自己的业务。
