# flex 布局的行控件

flex 布局的行控件。

## 代码演示

```vue
<template>
  <mp-row-flex :span="[6, 18]" label="单个时间" label-align="right">
    <a-input-number v-model="duration" :min="1" />
  </mp-row-flex>
</template>

<script>
export default {
  data() {
    return {
      duration: 1000
    }
  }
}
</script>
```

## API

### MpRowFlex

#### 属性

| 参数         | 说明                                                                                                                                                   | 类型         | 默认值       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------ |
| type         | 布局类型 horizontal/vertical                                                                                                                           | String       | 'horizontal' |
| align        | flex 布局下的垂直对齐方式 top/middle/bottom                                                                                                            | String       | 'middle'     |
| justify      | flex 布局下的水平排列方式 start/end/center/space-between/space-around                                                                                  | String       | 'start'      |
| gutter       | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]（1.5.0 后支持）。 | Array/Number | 0            |
| span         | 栅格占位格数，为 0 时相当于 display: none                                                                                                              | Array        | [5, 19]      |
| colon        | 是否加冒号                                                                                                                                             | Boolean      | true         |
| title        | 标题                                                                                                                                                   | String       | -            |
| label        | 标签                                                                                                                                                   | String       | -            |
| labelWidth   | 标签宽度                                                                                                                                               | Number       | -            |
| labelAlign   | 标签对齐方式 left/center/right                                                                                                                         | String       | 'left'       |
| contentAlign | 内容对齐方式 left/center/right                                                                                                                         | String       | 'left'       |
