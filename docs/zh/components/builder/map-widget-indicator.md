# 微件指示器

标识微件的组件，比如：图标、按钮或其他元素，这里提供`MpMapWidgetButton`，它基于[MpButton](/zh/components/common/button.html)和[WidgetInfoMixin](/zh/api/reference/widget-info-mixin.html)实现。

## 代码演示

```html
<template>
  <mp-map-widget-button :widget="..." />
</template>
```

## API

### MpMapWidgetButton

#### 属性

参数同[WidgetInfoMixin](/zh/api/reference/widget-info-mixin.html)，核心参数为 widget。

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| widget | 微件对象 | Object | -      |

#### 事件

| 事件名称 | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| click    | 按钮点击后触发 | () => {} |
