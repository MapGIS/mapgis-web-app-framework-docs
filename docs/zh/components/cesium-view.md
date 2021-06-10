# MpCesiumView 场景视图

加载场景的组件。

## 代码演示

```html
<template>
  <mp-cesium-view
    v-show="mapRender === cesiumRender"
    :document="document"
    :map-style="style"
    :lib-path="cesium/Cesium.js"
    :plugin-path="cesium/webclient-cesium-plugins.js"
    v-bind="mapOptions"
  />
</template>
```

## API

### MpCesiumView

#### 属性

| 参数       | 说明                               | 类型   | 默认值 |
| ---------- | ---------------------------------- | ------ | ------ |
| document   | 文档对象                           | Object | -      |
| mapStyle   | 地图样式，可参考 Mapbox 的原生样式 | Object | -      |
| libPath    | Cesium 库的路径                    | String | -      |
| pluginPath | Cesium 插件的路径                  | String | -      |
