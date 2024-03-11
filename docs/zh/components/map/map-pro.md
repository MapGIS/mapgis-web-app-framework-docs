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

| 参数         | 说明                               | 类型            | 可选值 | 默认值                | 版本 |
| ------------ | ---------------------------------- | --------------- | ------ | --------------------- | ---- |
| document     | 文档对象                           | object          |        |                       |      |
| mapStyle     | 地图样式，可参考 Mapbox 的原生样式 | object          |        |                       |      |
| center       | 地图中心坐标                       | [object, array] |        | { lng: 114, lat: 30 } |      |
| zoom         | 地图缩放级                         | number          |        | 4                     |      |
| splitScreen  | 是否处于分屏阶段                   | boolean         |        | false                 |      |
| minimumLevel | 地图最小显示级别                   | number          |        | 0                     |      |
| maximumLevel | 地图最大显示级别                   | number          |        | 22                    |      |

### MpWebScenePro

#### 属性

| 参数       | 说明                               | 类型   | 默认值 |
| ---------- | ---------------------------------- | ------ | ------ |
| document   | 文档对象                           | Object | -      |
| mapStyle   | 地图样式，可参考 Mapbox 的原生样式 | Object | -      |
| libPath    | Cesium 库的路径                    | String | -      |
| pluginPath | Cesium 插件的路径                  | String | -      |

| 参数          | 说明                                                                                  | 类型   | 可选值        | 默认值 | 版本 |
| ------------- | ------------------------------------------------------------------------------------- | ------ | ------------- | ------ | ---- |
| document      | 文档对象                                                                              | object |               |        |      |
| libPath       | Cesium 库的路径                                                                       | string |               |        |      |
| pluginPath    | Cesium 插件的路径                                                                     | string |               |        |      |
| dataFlowList  | 数据流列表对象                                                                        | object |               |        |      |
| popupShowType | 弹出框显示位置。可设置`default`,弹出框显示在对应标注位置，和`right`，弹出框显示在右侧 | string | default/right |        |      |
| popupOverlay  | 右侧弹框对象                                                                          | object |               | {}     |      |
| minimumLevel  | 地图最小显示级别                                                                      | number |               | 0      |      |
| maximumLevel  | 地图最大显示级别                                                                      | number |               | 22     |      |

:::: tip
如何获取 document？
只需要在微件内部混入 widgetMixin 即可。

```vue
<template>
  <div></div>
</template>

<script lang="ts">
import {
  WidgetMixin,
  LayerType,
  IGSSceneSublayerType,
  LoadStatus,
  Objects
} from '@mapgis/web-app-framework'

const { ColorUtil } = Util

export default {
  name: 'MpProfileAnalysis',
  mixins: [WidgetMixin],
  watch: {
    document: {
      handler: 'getScenes',
      immediate: true,
      deep: true
    }
  },

  methods: {
    /**
     * 动态获取基础目录树上已勾选的三维数据
     */
    getScenes() {
      if (!this.document) return
      const layers = []
      this.document.defaultMap
        .clone()
        .getFlatLayers()
        .forEach((layer, index) => {
          if (layer.loadStatus === LoadStatus.loaded) {
            if (layer.type === LayerType.IGSScene) {
              if (layer.activeScene) {
                const { type } = layer.activeScene.sublayers[0]
                if (
                  type === IGSSceneSublayerType.elevation ||
                  type === IGSSceneSublayerType.modelCache
                ) {
                  // 获取地形和模型
                  layers.push(layer)
                }
              }
            } else if (layer.type === LayerType.STKTerrain) {
              layers.push(layer)
            }
          }
        })
      this.layers = layers
      if (layers.length > 0) {
        this.layer = layers[layers.length - 1]
      } else {
        this.layer = layers
        this.layer = null
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
```

```js
// 图层加载状态
export enum LoadStatus {
  notLoaded, // 没有加载过
  loading, // 正在加载
  loaded, // 加载成功
  failed // 加载失败
}

// 图层的类型
export enum LayerType {
  Unknown, // 未知
  Group, // 组图层
  Tile, // 瓦片服务图层
  MapImage, // 地图服务图层
  IGSTile, // IGServer瓦片服务图层
  IGSMapImage, // IGServer地图服务图层
  IGSVector, // IGServer矢量服务图层
  OGCWMTS, // OGCWMTS服务图层
  OGCWMS, // OGCWMS服务图层
  OGCWFS, // OGCWFS服务图层
  ArcGISTile, // ArcGIS瓦片服务图层
  ArcGISMapImage, // ArcGIS地图服务图层
  VectorTile, // 矢量瓦片图层
  WebTile, // 互联网服务图层
  CustomTile, // 自定义瓦片服务图层
  CustomMapImageLayer, // 自定义地图服务图层
  AMapMercatorEMap, // 高德电子地图
  AMapMercatorSatelliteMap, // 高德卫星影像图层
  AMapMercatorSatelliteAnnMap // 高德卫星影像图注记图层
  ModelCache, // 三维模型缓存图层,用于显示三维模型缓存。如：m3d(中地定义的模型缓存格式)，osgb(osgb格式的倾斜摄影模型)、3dTileset(cesium标准的模型缓存)
  Elevation, // 高程图层，用于接入地形服务
  IGSElevation, // IGS高程图层，用于接入IGS三维服务中的地形服务
  Scene, // IGS场景图层,用于对接IGS的三维场景服务
  IGSScene, // IGS场景图层,用于对接IGS的三维场景服务
  Graphics, // 覆盖物(临时绘制)图层
  DataFlow, // 数据流
  EsGeoCode, // 地理编码
  Feature, // 要素图层
  IGSFeature, // IGServer要素图层
  GeoJson, // geoJson图层
  IGSPanoramic, // IGS全景图层
  STKTerrain, // STK图层
  Plot, // 标绘图层
  KML, // KML
  KMZ, // KMZ
  CZML, // CZML
  OSM, // OSM
  IGSVector3D, // IGServer三维简单要素类图层
  NOSPATIALDATA // 非空间数据
}

// 缓冲区分析渲染方式
export enum RenderType {
  Unknown, // 未知
  CLIENT, // 客户端,指直接在前端绘制
  SERVER // 服务端，指通过IGS服务生成图层服务
}
```

::::
