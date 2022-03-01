# 地图容器

加载地图或场景的组件，支持根据地图渲染器类型来自动切换。

## 代码演示

```vue
<template>
  <mp-map-container
    cesium-lib-path="cesium/Cesium.js"
    cesium-plugin-path="cesium/webclient-cesium-plugins.js"
    :map-options="mapOptions"
  />
</template>

<script>
export default {
  data() {
    return {
      mapOptions: {
        center: { lng: 114, lat: 30 },
        zoom: 8
      }
    }
  }
}
</script>
```

## API

### MpMapContainer

#### 属性

| 参数             | 说明                    | 类型   | 默认值 |
| ---------------- | ----------------------- | ------ | ------ |
| mapOptions       | 地图选型，{center,zoom} | Object | -      |
| cesiumLibPath    | Cesium 库的路径         | String | -      |
| cesiumPluginPath | Cesium 插件的路径       | String | -      |
| dataFlowList     | 数据流列表对象          | Object | -      |
