# 地图微件指示器

mp-map-widget-indicator 组件负责各类地图微件的管理，包括不带面板的微件、带面板的微件和占位微件，比如放大、缩小、二三维切换、综合查询等。

```vue
<!--地图微件 -->
<template v-if="mapWidgets">
  <mp-map-widget-indicator
    v-for="(widget, i) in visibleMapWidgets"
    :key="i"
    :widget="widget"
  />
</template>
```

标识微件的组件，比如：图标、按钮或其他元素，这里提供`MpMapWidgetButton`按钮组件，它基于[MpButton](/zh/components/common/button.html)和[WidgetInfoMixin](/zh/api/reference/builder/widget-info-mixin.html)实现；`MpMapWidgetIcon`图标按钮,它基于[MpButton](/zh/components/common/button.html)和[WidgetInfoMixin](/zh/api/reference/builder/widget-info-mixin.html)实现；`MpMapWidgetPlaceholder`占位符组件，它基于和[WidgetInfoMixin](/zh/api/reference/builder/widget-info-mixin.html)实现。

## 代码演示

```vue
<template>
  <!--按钮组件 -->
  <mp-map-widget-button :widget="..." />
  <!--或者 -->
  <!--图标按钮组件 -->
  <mp-map-widget-icon :widget="..." />
  <!--或者 -->
  <!--占位符组件 -->
  <mp-map-widget-placeholder :widget="..." />
</template>
```

## API

### MpMapWidgetButton

#### 属性

参数同[WidgetInfoMixin](/zh/api/reference/builder/widget-info-mixin.html)，核心参数为 widget。

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| widget | 微件对象 | Object | -      |

#### 事件

| 事件名称 | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| click    | 按钮点击后触发 | () => {} |

### MpMapWidgetIcon

属性和事件同 MpMapWidgetButton。

### MpMapWidgetPlaceholder

#### 属性

参数同[WidgetInfoMixin](/zh/api/reference/builder/widget-info-mixin.html)，核心参数为 widget。

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| widget | 微件对象 | Object | -      |
