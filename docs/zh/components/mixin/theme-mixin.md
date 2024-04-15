# ThemeMixin

继承自 [AppMixin](/zh/components/mixin/app-mixin.html)，主题混入，提供内容区域列表、内容区域组件和内容区域属性等功能。

一般在主题组件中混入 ThemeMixin，这些组件可以直接使用 AppMixin 、DisplayModeMixin、ThemeMixin 里的属性、方法和钩子函数。比如一张图经典主题里的 mp-pan-spatial-map-classic-theme。

## provide

提供 map、mapbox、viewer、Cesium、vueCesium 给所有的子孙组件使用，通常微件会混入[MapMixin](/zh/components/mixin/map-mixin.html)，这样可以直接拿到这几个对象。

| 参数      | 说明            | 类型   | 可选值 | 默认值 | 版本 |
| --------- | --------------- | ------ | ------ | ------ | ---- |
| map       | 二维地图对象    | object |        |        |      |
| mapbox    | MapBox 库       | object |        |        |      |
| viewer    | 三维场景对象    | object |        |        |      |
| Cesium    | Ceisum 库       | object |        |        |      |
| vueCesium | Ceisum vue 对象 | object |        |        |      |

## data

| 参数              | 说明                | 类型    | 可选值 | 默认值  | 版本 |
| ----------------- | ------------------- | ------- | ------ | ------- | ---- |
| mapboxInitialized | mapboxgl 是否已加载 | boolean |        | false   |      |
| cesiumInitialized | cesium 是否已加载   | boolean |        | false   |      |
| mapInitialized    | 底图是否已初始化    | boolean |        | false   |      |
| refSuffix         | 参考后缀            | string  |        | Content |      |

###

## methods

### onUpdateWidgetState

- **描述**：更新微件状态。
- **参数**

  | 参数        | 描述                                                                                            | 类型   | 默认值 |
  | :---------- | :---------------------------------------------------------------------------------------------- | :----- | :----- |
  | contentName | 内容名称                                                                                        | string | -      |
  | e           | 微件状态,WidgetState={OPENED: 'opened',ACTIVE: 'active', DEACTIVE: 'deActive',CLOSED: 'closed'} | string | -      |

- **用法**：在主题组件里，可通过该方法控制相应内容区域里的微件的状态。

```vue
<template>
  <mp-pan-spatial-map-side-panel
    v-if="maxSidePanelWidth && mapInitialized"
    v-bind="left.panel"
    :widgets="left.widgets"
    :widgetStructure="left.widgetStructure"
    :max-width="maxSidePanelWidth"
    @update-widget-state="onUpdateWidgetState('left', $event)"
  />
</template>

<script>
import { ThemeMixin } from '@mapgis/web-app-framework'

export default {
  mixins: [ThemeMixin]
}
</script>
```

### parseContentComponent

- **描述**：解析内容区域组件名称。
- **参数**

  | 参数    | 描述         | 类型   | 默认值 |
  | :------ | :----------- | :----- | :----- |
  | content | 内容区域名称 | string | -      |

- **用法**：在主题组件里，可通过该方法返回 header 区域对应的组件，然后采用动态组件去渲染。

```js
this.parseContentComponent('header')
```

### parseContentProps

- **描述**：解析内容区域组件属性。
- **参数**

  | 参数    | 描述         | 类型   | 默认值 |
  | :------ | :----------- | :----- | :----- |
  | content | 内容区域名称 | string | -      |

- **示例**

```vue
<template>
  <component
    :is="headerContentComponent"
    ref="headerContent"
    v-bind="parseContentProps('header')"
  />
</template>

<script>
import { ThemeMixin } from '@mapgis/web-app-framework'

export default {
  mixins: [ThemeMixin],
  props: {
    header: Object
  },
  computed: {
    headerContentComponent() {
      return this.parseContentComponent('header')
    }
  }
}
</script>
```
