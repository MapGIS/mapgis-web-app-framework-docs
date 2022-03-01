# 属性统计

提供对图层要素属性进行统计的功能，并以 echart 统计图标的形式展示统计结果，支持下载统计结果(csv 或者 json 文件)。

## 代码演示

```vue
<template>
  <mp-attribute-statistics :queryParams="queryParams" />
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
  }
}
</script>
```

## API

### MpAttributeStatistics

#### 属性

| 参数        | 说明                           | 类型   | 默认值    |
| ----------- | ------------------------------ | ------ | --------- |
| queryParams | 查询参数                       | Object | -         |
| beginColor  | 起始颜色(用于计算渐变颜色数组) | String | '#ff0000' |
| endColor    | 结束颜色(用于计算渐变颜色数组) | String | '#0000ff' |
