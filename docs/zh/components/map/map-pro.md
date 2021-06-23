# 地图视图

加载地图或场景的组件。

## 代码演示

```html
<template>
  <mp-web-map-pro :document="document" :map-style="style" v-bind="mapOptions" />
  <mp-web-scene-pro
    :document="document"
    :map-style="style"
    :lib-path="cesiumLibPath"
    :plugin-path="cesiumPluginPath"
    v-bind="mapOptions"
  />
</template>
```

## API

### MpWebMapPro

#### 属性

| 参数     | 说明                               | 类型            | 默认值                |
| -------- | ---------------------------------- | --------------- | --------------------- |
| document | 文档对象                           | Object          | -                     |
| mapStyle | 地图样式，可参考 Mapbox 的原生样式 | Object          | -                     |
| center   | 地图中心坐标                       | [Object, Array] | { lng: 114, lat: 30 } |
| zoom     | 地图缩放级                         | Number          | 4                     |

### MpWebScenePro

#### 属性

| 参数       | 说明                               | 类型   | 默认值 |
| ---------- | ---------------------------------- | ------ | ------ |
| document   | 文档对象                           | Object | -      |
| mapStyle   | 地图样式，可参考 Mapbox 的原生样式 | Object | -      |
| libPath    | Cesium 库的路径                    | String | -      |
| pluginPath | Cesium 插件的路径                  | String | -      |
