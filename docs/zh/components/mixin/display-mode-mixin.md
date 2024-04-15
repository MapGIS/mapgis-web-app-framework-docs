# DisplayModeMixin

地图加载模式混入。提供当前地图加载模式(二维模式、三维模式或者二三维一体模式)。

在二维模式下，是不会加载场景相关的引用，比如 Cesium.js，如果微件里有场景相关的代码，则需要混入这个对象，进行相关处理，比如在只加载二维的情况下，不运行与场景相关的代码。比如在要素查询、测量等微件中，就混入了这个对象，并对与场景相关的代码进行了处理。

同样在三维模式下，是不会加载二维相关的引用，比如 mapbox。需同上做类似处理。

## computed

| 参数             | 说明               | 类型    | 可选值 | 默认值 | 版本 |
| ---------------- | ------------------ | ------- | ------ | ------ | ---- |
| mapDisplayOnly   | 是否只加载二维     | boolean |        |        |      |
| globeDisplayOnly | 是否只加载三维     | boolean |        |        |      |
| hasMapDisplay    | 是否会加载二维     | boolean |        |        |      |
| hasGlobeDisplay  | 是否会加载三维     | boolean |        |        |      |
| bothDisplay      | 是否为二三维一体化 | boolean |        |        |      |

- **示例**

```vue
<template>
  <div>
    <mapgis-measure
      ref="mapgisMeasure"
      v-if="is2DMapMode && hasMapDisplay"
      :enableControl="true"
      :isAdvanceControl="true"
      :editable="false"
      :measureMethod="measureMethod"
      :featureConfig="featureConfig"
    />
    <mapgis-3d-measure
      ref="mapgis3dMeasure"
      :featureConfig="featureConfig"
      v-if="!is2DMapMode && hasGlobeDisplay"
    />
  </div>
</template>
```
