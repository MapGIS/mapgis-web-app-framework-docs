# MpPlacement 定位容器

用作指定位置显示。

## 代码演示

```html
<template>
  <mp-placement position="top-right" :offset="[10, 10]" :z-index="1" />
</template>
```

或

```html
<template>
  <mp-placement position="top-center" expand />
</template>
```

## API

### MpPlacement

#### 属性

| 参数     | 说明                                                                          | 类型                                                                                                                                  | 默认值         |
| -------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| position | 方位                                                                          | String：`top-right` `top-left` `bottom-right` `bottom-left` `top-center` `bottom-center` `center-right` `center-left` `center-center` | `bottom-right` |
| offset   | 偏移                                                                          | Array\<Number\>                                                                                                                       | -              |
| expand   | 是否展开（只对`top-center` `bottom-center` `center-right` `center-left`有效） | Boolean                                                                                                                               | -              |
| zIndex   | 层级                                                                          | Number                                                                                                                                | 1              |
