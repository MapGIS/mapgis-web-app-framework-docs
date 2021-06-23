# 标绘

提供标注绘制能力，支持传入一组标注，鼠标移动到标注上会自动高亮标注要素，同时弹出 popup 展示标注信息，其中`highlightStyle`需满足如下规范：

```js
{
  feature: {
    reg: {
      color: "rgba(255,255,0,0.5)",
    },
    line: {
      color: "rgba(255,0,0,1)",
      size: "3",
    },
  }
}
```

## 代码演示

```html
<template>
  <mp-marker-plotting :markers="..." :highlight-style="..." />
  <mp-3d-marker-plotting :markers="..." :highlight-style="..." />
</template>
```

## API

### MpMarkerPlotting

#### 属性

| 参数           | 说明                                                                                                   | 类型    | 默认值 |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------- | ------ |
| markers        | 标注列表                                                                                               | Array   | -      |
| fieldConfigs   | 字段配置，描述如何展示标注的属性信息                                                                   | Array   | -      |
| filterWithMap  | 是否跟随地图范围过滤，如果为是，会监听地图范围变化，然后在变化后发送'map-bound-change'事件             | Boolean | -      |
| fitBound       | 缩放范围，{ xmin, ymin, xmax, ymax }，在该范围变化时会自动缩放至                                       | Object  | -      |
| selectionBound | 选择集范围，{ xmin, ymin, xmax, ymax }，范围变化时，会查看该范围是否在地图范围内，在旧平移，不再就缩放 | Object  | -      |
| center         | 中心点，[x, y]，变化时地图会平移至该中心                                                               | Array   | -      |
| highlightStyle | 高亮样式                                                                                               | Object  | -      |

#### 事件

| 事件名称         | 说明                                                | 回调参数                      |
| ---------------- | --------------------------------------------------- | ----------------------------- |
| map-bound-change | 当 filterWithMap 为 true 时监听到地图范围变化会发送 | ({xmin,ymin,xmax,ymax}) => {} |

#### 插槽

| 名称  | 说明                                                         |
| ----- | ------------------------------------------------------------ |
| popup | 弹出框插槽，默认是以表格形式展示标注信息，可通过该插槽自定义 |

### Mp3dMarkerPlotting

#### 属性

| 参数           | 说明                                                                                                   | 类型    | 默认值 |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------- | ------ |
| markers        | 标注列表                                                                                               | Array   | -      |
| fieldConfigs   | 字段配置，描述如何展示标注的属性信息                                                                   | Array   | -      |
| filterWithMap  | 是否跟随地图范围过滤，如果为是，会监听地图范围变化，然后在变化后发送'map-bound-change'事件             | Boolean | -      |
| fitBound       | 缩放范围，{ xmin, ymin, xmax, ymax }，在该范围变化时会自动缩放至                                       | Object  | -      |
| selectionBound | 选择集范围，{ xmin, ymin, xmax, ymax }，范围变化时，会查看该范围是否在地图范围内，在旧平移，不再就缩放 | Object  | -      |
| center         | 中心点，[x, y]，变化时地图会平移至该中心                                                               | Array   | -      |
| highlightStyle | 高亮样式                                                                                               | Object  | -      |

#### 事件

| 事件名称         | 说明                                                | 回调参数                      |
| ---------------- | --------------------------------------------------- | ----------------------------- |
| map-bound-change | 当 filterWithMap 为 true 时监听到地图范围变化会发送 | ({xmin,ymin,xmax,ymax}) => {} |

#### 插槽

| 名称  | 说明                                                         |
| ----- | ------------------------------------------------------------ |
| popup | 弹出框插槽，默认是以表格形式展示标注信息，可通过该插槽自定义 |
