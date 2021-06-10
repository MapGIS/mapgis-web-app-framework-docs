# MpMapWidgetButton 微件按钮

混入[WidgetInfoMixin](/zh/api/reference/widget-info-mixin.html)，具有 WidgetInfoMixin 一切选项，内部依赖于 [MpIcon](/zh/components/icon.html) 组件，会自动显示微件图标，并提示微件名称，您可以在自己的微件里面轻松地使用！

## 代码演示

```html
<template>
  <mp-map-widget-button
    class="mp-widget-zoom-in"
    :widget="widget"
    @click="onClickWidget"
  />
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
