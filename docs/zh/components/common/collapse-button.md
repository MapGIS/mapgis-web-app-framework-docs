# 折叠按钮

点击按钮，可以折叠/展开的内容区域。

## 代码演示

```vue
<template>
  <mp-collapse-button :direction="'right'">
    <div>展示内容</div></mp-collapse-button
  >
</template>
```

## API

### MpCollapseButton

#### 属性

| 参数      | 说明                               | 类型    | 默认值  |
| --------- | ---------------------------------- | ------- | ------- |
| direction | 按钮显示位置 left/right/top/bottom | String  | 'right' |
| collapsed | 是否默认折叠                       | Boolean | false   |
| zIndex    | zIndex                             | Number  | 1       |

#### 事件

| 事件名称         | 说明     | 回调参数      |
| ---------------- | -------- | ------------- |
| update:collapsed | 折叠事件 | (value) => {} |
