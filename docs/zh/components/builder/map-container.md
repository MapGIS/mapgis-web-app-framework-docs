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

| 参数             | 说明                                                                                                                                    | 类型   | 可选值        | 默认值 | 版本 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------- | ------ | ---- |
| mapOptions       | 地图选项，主要包含{mapStyle,center,zoom},可参考[地图视图组件](/zh/components/map/map-pro.html)mp-web-map-pro 和 mp-web-scene-pro 的属性 | object |               |        |      |
| cesiumLibPath    | Cesium 库的路径                                                                                                                         | string |               |        |      |
| cesiumPluginPath | Cesium 插件的路径                                                                                                                       | string |               |        |      |
| dataFlowList     | 数据流列表对象                                                                                                                          | object |               |        |      |
| popupShowType    | 弹出框显示位置。可设置`default`,弹出框显示在对应标注位置，和`right`，弹出框显示在右侧                                                   | string | default/right |        |      |
| dataStoreIp      | datastore 服务 ip                                                                                                                       | string |               |        |      |
| dataStorePort    | datastore 服务 port                                                                                                                     | string |               |        |      |
| minimumLevel     | 地图最小显示级别                                                                                                                        | number |               |        |      |
| maximumLevel     | 地图最大显示级别                                                                                                                        | number |               |        |      |
