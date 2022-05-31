# 微件定制

根据[微件规范](/zh/config/widget.html)，需要在 widgets 目录内定义微件各文件，在清单中指定微件的各属性，对于微件组件，需要混入 [WidgetMixin](/zh/components/mixin/widget-mixin.html)

## 自定义不带面板的微件

> 指定 manifest.json 中 properties 的 inPanel 属性 为 false

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

缩放微件的 manifest.json，properties 的 inPanel 属性 为 false

```json
{
  "name": "缩放",
  "author": "MapGIS",
  "description": "",
  "component": "MpZoom",
  "icon": "<svg class=\"icon\" viewBox=\"0 0 1040 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"203.125\" height=\"200\"><defs><style/></defs><path d=\"M48.703 359.52h861.59v120.528H48.703zm8.348 465.957h861.59v120.527H57.05z\"/><path d=\"M550.992 42.377l-2.822 744.545-120.528-.48 2.822-744.545z\"/></svg>",
  "properties": {
    "2D": true,
    "3D": true,
    "inPanel": false,
    "hasConfig": false,
    "hasSettingPage": false
  }
}
```

其他 UI 微件（比如比例尺、鹰眼、搜索框）

```html
<template>
  <div class="mp-widget-scalebar">比例尺</div>
</template>
```

## 自定义带面板的微件

> 指定 manifest.json 中 properties 的 inPanel 属性 为 true

```html
<template>
  <div class="mp-widget-basemap-manager">底图管理</div>
</template>
```

底图管理微件的 manifest.json，properties 的 inPanel 属性 为 true

```json
{
  "name": "底图管理",
  "author": "MapGIS",
  "description": "",
  "component": "MpBasemapManager",
  "icon": "<svg class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><defs><style/></defs><path d=\"M64 64h384v384H64zm512 0h384v384H576zM64 576h384v384H64zm512 0h384v384H576z\"/></svg>",
  "properties": {
    "2D": true,
    "3D": true,
    "inPanel": true,
    "hasConfig": true,
    "hasSettingPage": true,
    "settingUiComponent": ""
  }
}
```
