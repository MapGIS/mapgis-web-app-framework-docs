# 卡片

基于 antd design vue 的 card 组件，提供一个带标题和功能按钮的卡片，标题和功能按钮都可以自定义。

## 代码演示

```vue
<template>
  <mp-card slot="overlay" :box-shadow="true" title="颜色设置" :tools="tools" />
</template>

<script>
export default {
  data() {
    return {
      tools: [
        {
          title: '新增',
          icon: 'plus',
          method: this.add
        },
        {
          title: '批量删除',
          icon: 'delete',
          method: this.batchRemove
        },
        {
          title: '确认',
          icon: 'check',
          method: this.confirm
        },
        {
          title: '关闭',
          icon: 'close',
          method: this.close
        }
      ]
    }
  },
  methods: {
    add() {},
    batchRemove() {},
    confirm() {},
    close() {}
  }
}
</script>
```

## API

### MpCard

#### 属性

| 参数      | 说明                                                | 类型    | 默认值  |
| --------- | --------------------------------------------------- | ------- | ------- |
| title     | 标题                                                | String  | ""      |
| tools     | 工具集                                              | Array   | []      |
| size      | card 的尺寸                                         | String  | 'small' |
| boxShadow | 是否有阴影                                          | Boolean | false   |
| bordered  | 是否有边框                                          | Boolean | false   |
| loading   | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | Boolean | false   |

#### 插槽

| 名称  | 说明           |
| ----- | -------------- |
| title | 自定义标题     |
| extra | 自定义功能按钮 |
