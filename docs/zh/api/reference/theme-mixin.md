# ThemeMixin

继承自 [AppMixin](/zh/api/reference/app-mixin.html)，主题混入，提供内容区域列表、内容区域组件和内容区域属性等功能。

## provide

提供 map、mapbox、webGlobe、Cesium 给所有的子组件使用，通常微件会混入[MapMixin](/zh/api/reference/map-mixin.html)，这样可以直接拿到这几个对象。

### map

- **类型**：`Object`
- **详细**：二维地图对象。

### mapbox

- **类型**：`Object`
- **详细**：MapBox 库。

### webGlobe

- **类型**：`Object`
- **详细**：三维场景对象。

### Cesium

- **类型**：`Object`
- **详细**：Ceisum 库。

## methods

### parseContentComponent

- **类型**：`Function`
- **参数**：
  - `{string} content` 内容区域名称。
- **详细**：解析内容区域组件名称。
- **用法**：

```js
// 在主题组件里，可通过该方法返回header区域对应的组件，然后采用动态组件去渲染。
this.parseContentComponent('header')
```

### parseContentProps

- **类型**：`Function`
- **参数**：
  - `{string} content` 内容区域名称。
- **详细**：解析内容区域组件属性。
- **示例**：

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
