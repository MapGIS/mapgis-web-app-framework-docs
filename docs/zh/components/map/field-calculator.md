# 自定义查询

提供对图层要素属性进行自定义查询，用户输入特定的条件查询特定的数据。

## 代码演示

```vue
<template>
  <mp-field-calculator :queryParams="queryParams" @finish="onFinish" />
</template>

<script>
export default {
  data() {
    return {
      queryParams: {
        id: '中国地级市x 37ee717c-5f7e-40a9-a45a-55273a7d2fca',
        name: '中国地级市x 自定义查询',
        option: {
          DNSName: '',
          gdbp: 'gdbp://MapGisLocal/专题图数据/sfcls/中国地级市x',
          id: '37ee717c-5f7e-40a9-a45a-55273a7d2fca',
          ip: '192.168.21.191',
          isDataStoreQuery: false,
          port: 6163,
          serverType: 6
        }
      }
    }
  },
  methods: {
    onFinish(where) {
      console.log(where)
    }
  }
}
</script>
```

## API

### MpFieldCalculator

#### 属性

| 参数        | 说明     | 类型   | 可选值 | 默认值 | 版本 |
| ----------- | -------- | ------ | ------ | ------ | ---- |
| queryParams | 查询参数 | object |        |        |      |

#### 事件

| 事件名称 | 说明                 | 回调参数      |
| -------- | -------------------- | ------------- |
| finish   | 构建查询条件结束事件 | (where) => {} |
