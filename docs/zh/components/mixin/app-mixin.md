# AppMixin

应用基础混入，提供 applicaiton（应用对象）、designTime（设计时状态）、document（文档）、theme（主题）、mapRender（渲染引擎）、地图模式切换、属性表开关等功能。

如果微件中需要上述内容，可以引入该混入，就可以在微件中直接使用混入中的属性、方法、钩子函数。比如图层列表微件等。

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

- **用法**：在组件里，可通过该方法进行地图模式切换。比如在二维地图模式下，勾选加载三维模型数据时，可通过该方法直接切换到场景视图模式。

```vue
<template>
  <div />
</template>

<script>
import { AppMixin } from '@mapgis/web-app-framework'

export default {
  mixins: [AppMixin],
  data() {
    return {
      is2DMapMode: fasle
    }
  },
  methods: {
    onShowData(item) {
      // 地图模型需要切换时，直接调用switchMapMode方法
      if (this.is2DMapMode !== item.is2DMapMode) {
        this.switchMapMode()
      }
    }
  }
}
</script>
```

### onMapModeChanged

- **描述**：钩子函数，在地图模式发生改变后调用，混入者可覆盖该方法实现自己的业务。

- **示例**

```vue
<template>
  <div />
</template>

<script>
import { AppMixin } from '@mapgis/web-app-framework'

export default {
  mixins: [AppMixin],
  data() {
    return {
      is2DMapMode: fasle,
      center: [114, 30],
      zoom: 5
    }
  },
  methods: {
    onMapModeChanged() {
      if (!this.is2DMapMode) {
        const { lng, lat } = this.center
        this.sceneController.cameraSetView({
          destination: this.sceneController.getCartesian3FromDegrees(
            lng,
            lat,
            this.height
          )
        })
      } else {
        this.map.jumpTo({
          center: this.center,
          zoom: this.zoom - 1
        })
      }
    }
  }
}
</script>
```
