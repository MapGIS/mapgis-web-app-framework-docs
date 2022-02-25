# 弹出框内容

弹出框内容展示组件，用于列表显示要素属性，和传感器信息。

## 代码演示

```vue
<template>
  <mp-popup-attribute
    :properties="properties"
    :dataStoreIp="dataStoreIp"
    :dataStorePort="dataStorePort"
  />
</template>

<script>
export default {
  data() {
    return {
      properties: {
        Euid: '000000000000N36V3240755210025426000000000000202011060002',
        FID: 10,
        周长: '56.6841904611654',
        图层: '0',
        层高: '2.8',
        房屋类型: '居民楼',
        楼层: '7',
        面积: '130.80758171965'
      },
      dataStoreIp: '192.168.96.101',
      dataStorePort: '9014'
    }
  }
}
</script>
```

## API

### MpPopupAttribute

#### 属性

| 参数           | 说明                  | 类型     | 默认值 |
| -------------- | --------------------- | -------- | ------ |
| properties     | 属性对象              | Object   | {}     |
| dataStoreIp    | dataStore 服务的 Ip   | String   | ''     |
| dataStorePort  | dataStore 服务的 Port | String   | ''     |
| getVideoStatus | 获取视频投放状态      | Function | {}     |
