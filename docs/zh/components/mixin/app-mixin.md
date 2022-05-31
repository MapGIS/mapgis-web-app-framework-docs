# AppMixin

应用基础混入，提供 applicaiton（应用对象）、designTime（设计时状态）、document（文档）、theme（主题）、mapRender（渲染引擎）、地图模式切换、属性表开关等功能。

## data

### mapboxRender

- **类型**：`String`
- **描述**： MapBox 渲染器类型。

### cesiumRender

- **类型**：`String`
- **描述**： Cesium 渲染器类型。

## computed

### application

- **类型**：`Object`
- **描述**：应用对象。

### designTime

- **类型**：`Boolean`
- **描述**：是否是设计时。

### theme

- **类型**：`Object`
- **描述**：应用主题。

### document

- **类型**：`Object`
- **描述**：应用文档，支持设置。

### baseUrl

- **类型**：`string`
- **描述**：应用基础 url，与 baseAPI 相关。

### appConfigUrl

- **类型**：`string`
- **描述**：应用配置 url，由 baseAPI 和 appConfigPath 拼接而成。

```
`${this.application.baseAPI}${this.application.appConfigPath}`
```

### appAssetsUrl

- **类型**：`string`
- **描述**：应用资源 url，由 baseAPI 和 appAssetsPath 拼接而成。

```
`${this.application.baseAPI}${this.application.appAssetsPath}`
```

### appLogo

- **类型**：`string`
- **描述**：应用 logo，如果是内联 svg，直接返回，否则，由 appAssetsUrl 和 logo 拼接而成。

```
`${this.appAssetsUrl}${this.application.logo}`
```

### mapRender

- **类型**：`string`
- **描述**：地图渲染器，支持设置，设置后，会调用`onMapModeChanged`方法。

### is2DMapMode

- **类型**：`boolean`
- **描述**：是否是 2D 渲染器。

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
