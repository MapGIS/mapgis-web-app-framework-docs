# 地图文档对象类 Document

地图文档对象。用于管理所有的地图服务。

## computed

### baseLayerMap

- **类型**：[Map](/zh/api/reference/document/map.html)
- **描述**：底图，为地图列表中的第 1 个。

### defaultMap

- **类型**：[Map](/zh/api/reference/document/map.html)
- **描述**：除底图的其他地图服务，为地图列表中的第 0 个。

## methods

### clone

- **描述**：创建一个深度克隆的 Document 对象。
- **返回值**：克隆后的 Document 对象。

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

::::
