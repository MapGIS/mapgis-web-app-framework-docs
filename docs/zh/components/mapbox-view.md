# MpMapboxView 地图视图

加载地图的组件。

## 代码演示

```html
<template>
  <mp-mapbox-view
    v-show="mapRender === mapboxRender"
    :document="document"
    :map-style="style"
    v-bind="mapOptions"
  />
</template>
```

## API

### MpMapboxView

#### 属性

| 参数     | 说明                               | 类型            | 默认值                |
| -------- | ---------------------------------- | --------------- | --------------------- |
| document | 文档对象                           | Object          | -                     |
| mapStyle | 地图样式，可参考 Mapbox 的原生样式 | Object          | -                     |
| center   | 地图中心坐标                       | [Object, Array] | { lng: 114, lat: 30 } |
| zoom     | 地图缩放级                         | Number          | 4                     |
