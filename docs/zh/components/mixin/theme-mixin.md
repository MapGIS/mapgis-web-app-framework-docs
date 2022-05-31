# ThemeMixin

继承自 [AppMixin](/zh/components/mixin/app-mixin.html)，主题混入，提供内容区域列表、内容区域组件和内容区域属性等功能。

## provide

提供 map、mapbox、viewer、Cesium,vueCesium 给所有的子组件使用，通常微件会混入[MapMixin](/zh/components/mixin/map-mixin.html)，这样可以直接拿到这几个对象。

### map

- **类型**：`Object`
- **描述**：二维地图对象。

### mapbox

- **类型**：`Object`
- **描述**：MapBox 库。

### viewer

- **类型**：`Object`
- **描述**：三维场景对象。

### Cesium

- **类型**：`Object`
- **描述**：Ceisum 库。

### vueCesium

- **类型**：`Object`
- **描述**：Ceisum vue 对象。

## methods

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

```js
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
    header: Object,
  },
  computed: {
    headerContentComponent() {
      return this.parseContentComponent('header')
    }
  }
}
</script>
```
