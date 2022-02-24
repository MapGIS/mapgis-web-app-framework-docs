# 展示面板

提供一个通用的展示面板，专门用来展示各类信息，比如查询的结果、分析的结果或者其他任意您想要查看的内容。

## 代码演示

```vue
<template>
  <mp-exhibition-panel
    :max-view-height="maxViewHeight"
    :init-open="initOpen"
    :closeable="closeable"
  />
</template>

<script>
export default {
  data() {
    return {
      maxViewHeight: 500,
      initOpen: true,
      closeable: trues
    }
  }
}
</script>
```

## API

### MpExhibitionPanel

#### 属性

| 参数          | 说明         | 类型    | 默认值 |
| ------------- | ------------ | ------- | ------ |
| maxViewHeight | 视图最大高度 | Number  | -      |
| initOpen      | 是否默认展开 | Boolean | -      |
| closeable     | 是否可关闭   | Boolean | -      |
