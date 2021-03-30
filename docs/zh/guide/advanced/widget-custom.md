# 微件定制

根据[微件规范](/zh/guide/introduction/config.html#widget)，需要在 widgets 目录内定义微件各文件，在清单中指定微件的各属性，对于微件组件，需要混入 [WidgetMixin](/zh/api/reference/widget-mixin.html)

## 自定义不带面板的微件

> 指定 manifest.json/properties/inPanel 为 true

按钮微件（比如放大、缩小等）

```html
<template>
  <mp-map-widget-button
    class="mp-widget-zoom-in"
    :widget="widget"
    @click="onClickWidget"
  />
</template>
```

其他 UI 微件（比如比例尺、鹰眼、搜索框）

```html
<template>
  <div class="mp-widget-scalebar">比例尺</div>
</template>
```

## 自定义带面板的微件

> 指定 manifest.json/properties/inPanel 为 true

```html
<template>
  <div class="mp-widget-basemap-manager">底图管理</div>
</template>
```
