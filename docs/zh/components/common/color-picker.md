# 颜色选择器

基于 Sketch 的颜色选择器。用于颜色设置。

## 代码演示

```vue
<template>
  <mp-color-picker v-model="color" />
</template>

<script>
export default {
  data() {
    return {
      color: 'rgb(64,169,255)'
    }
  }
}
</script>
```

## API

### MpColorPicker

#### 属性

| 参数         | 说明       | 类型    | 默认值             |
| ------------ | ---------- | ------- | ------------------ |
| color        | 颜色值     | String  | 'rgb(255,255,102)' |
| disableAlpha | 禁用透明度 | Boolean | true               |

#### 事件

| 事件名称 | 说明       | 回调参数      |
| -------- | ---------- | ------------- |
| input    | 更新后的值 | (value) => {} |
