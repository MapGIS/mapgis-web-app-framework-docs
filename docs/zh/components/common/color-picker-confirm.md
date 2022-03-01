# 颜色选择器带确认按钮

基于 Sketch/Chrome 的颜色选择器,带确定/取消按钮。用于颜色设置。

## 代码演示

```vue
<template>
  <mp-color-picker-confirm v-model="color" :border-radius="false" />
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

### MpColorPickerConfirm

#### 属性

| 参数         | 说明                         | 类型    | 默认值            |
| ------------ | ---------------------------- | ------- | ----------------- |
| type         | 颜色选择器类型 sketch/chrome | String  | 'chrome'          |
| colorType    | 颜色格式 hex/rgb/rgba        | String  | 'rgb'             |
| size         | 尺寸 large/small             | String  | 'small'           |
| disabled     | 是否禁用                     | Boolean | false             |
| border       | 是否带边框                   | Boolean | true              |
| borderRadius | 是否平滑边框                 | Boolean | true              |
| defaultValue | 默认显示值                   | String  | 'rgb(24,144,255)' |
| value        | 值                           | String  | -                 |

#### 事件

| 事件名称 | 说明       | 回调参数      |
| -------- | ---------- | ------------- |
| input    | 更新后的值 | (value) => {} |
| change   | 更新后的值 | (value) => {} |
