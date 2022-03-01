# 微件跳转路由

微件跳转路由

## 代码演示

```vue
<template>
  <mp-widget-routers :mode="mode" :widgetRouters.sync="widgetRouters" />
</template>

<script>
export default {
  data() {
    return {
      mode: 'normal',
      widgetRouters: [
        {
          component: 'MpLayerListContainer',
          props: {
            widgetInfo: {
              assetsUrl: 'http://localhost:8015/widgets/layer-list',
              config: undefined,
              dragable: true,
              icon: '<svg />',
              id: 'widget_3e8667b6-71ce-492d-be6f-f8193360b4d2',
              label: '图层列表',
              openAtStart: false,
              position: {
                anchor: 'top-left',
                horizontalOffset: 0,
                verticalOffset: 0
              },
              properties: {
                '2D': true,
                '3D': true,
                hasConfig: false,
                hasSettingPage: true,
                inPanel: true,
                settingUiComponent: ''
              },
              uri: 'widgets/layer-list',
              visible: true
            }
          }
        }
      ]
    }
  }
}
</script>
```

## API

### MpTreeSelect

#### 属性

| 参数          | 说明                 | 类型    | 默认值   |
| ------------- | -------------------- | ------- | -------- |
| widgetRouters | 跳转路由数组         | Array   | []       |
| mode          | 窗口状态             | String  | 'normal' |
| openHeader    | 是否需要开启头部导航 | Boolean | true     |

#### 事件

| 事件名称             | 说明     | 回调参数      |
| -------------------- | -------- | ------------- |
| update:widgetRouters | 更新路由 | (value) => {} |
