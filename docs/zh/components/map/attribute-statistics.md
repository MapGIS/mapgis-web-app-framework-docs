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

| 参数                | 说明                           | 类型   | 可选值                                                               | 默认值    | 版本 |
| ------------------- | ------------------------------ | ------ | -------------------------------------------------------------------- | --------- | ---- |
| queryParams         | 查询参数                       | object |                                                                      |           |      |
| beginColor          | 起始颜色(用于计算渐变颜色数组) | string |                                                                      | '#ff0000' |      |
| endColor            | 结束颜色(用于计算渐变颜色数组) | string |                                                                      | '#0000ff' |      |
| groupFieldProp      | 分组字段                       | string |                                                                      |           |      |
| statisticsFieldProp | 统计字段                       | string |                                                                      |           |      |
| statisticsTypeProp  | 统计类型                       | string | sum(求和)/avg(平均值)/ max(最大值)/min(最小值)/count(计数)/var(方差) | sum       |      |
