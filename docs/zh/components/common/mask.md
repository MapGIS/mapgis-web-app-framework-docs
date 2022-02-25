# 遮罩层

可遮盖到任意区域。

## 代码演示

```vue
<template>
  <mapgis-ui-mask
    v-if="useMask"
    :parentDivClass="'cesium-map-wrapper'"
    :loading="true"
    :text="'分析中...'"
  ></mapgis-ui-mask>
</template>
```

## API

### MpMask

#### 属性

| 参数           | 说明                          | 类型    | 默认值             |
| -------------- | ----------------------------- | ------- | ------------------ |
| parentDivClass | 要添加遮罩的 dom 元素的 class | String  | 'mp-map-container' |
| loading        | 进度条                        | Boolean | false              |
| percent        | 进度百分比                    | Number  | 0                  |
| text           | 遮罩层显示的提示信息          | String  | '分析中...'        |
