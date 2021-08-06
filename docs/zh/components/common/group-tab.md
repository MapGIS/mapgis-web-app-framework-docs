# 分组

提供分组功能，左侧有一个 border。

## 代码演示

```html
<template>
  <div>
    <mp-group-tab title="我是分组名" />
    <mp-group-tab
      title="我是分组名"
      size="small"
      :has-top-margin="false"
      :has-bottom-margin="false"
    />
    <mp-group-tab title="我是分组名">
      <div slot="handle">
        操作
      </div>
    </mp-group-tab>
    <mp-group-tab title="我是分组名">
      <div slot="handle">
        操作
      </div>
    </mp-group-tab>
    <mp-group-tab>
      <div slot="title">我是分组名</div>
      <div slot="handle">
        操作
      </div>
    </mp-group-tab>
  </div>
</template>
```

## API

### MpGroupTab

#### 属性

| 参数            | 说明               | 类型                                        | 默认值 |
| --------------- | ------------------ | ------------------------------------------- | ------ |
| title           | 标题               | String                                      | -      |
| size            | 大小               | String：`large`、`default`、`small`、`mini` | mini   |
| hasTopMargin    | 是否有上面的外边距 | Boolean                                     | true   |
| hasBottomMargin | 是否有下面的外边距 | Boolean                                     | true   |

#### 插槽

| 名称   | 说明   |
| ------ | ------ |
| title  | 标题   |
| handle | 工具区 |
