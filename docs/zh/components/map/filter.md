# 过滤器

提供对属性表的结果进行过滤查询。

## 代码演示

```vue
<template>
  <mp-filter :queryParams="queryParams" @finish="onFinish" />
</template>

<script>
export default {
  data() {
    return {
      queryParams: {
        gdbp:
          'gdbp://MapGisLocal/ClientTheme/ds/epsg4326/sfcls/湖北省市级区划2',
        ip: '192.168.21.191',
        layerIndex: '1',
        port: '6163',
        serverName: 'Hubei4326',
        serverType: 5
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

### MpFilter

#### 属性

| 参数        | 说明     | 类型   | 默认值 |
| ----------- | -------- | ------ | ------ |
| queryParams | 查询参数 | Object | -      |

#### 事件

| 事件名称 | 说明                 | 回调参数      |
| -------- | -------------------- | ------------- |
| finish   | 构建查询条件结束事件 | (where) => {} |
