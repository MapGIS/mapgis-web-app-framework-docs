# 应用搭建器

搭建应用的组件。

## 代码演示

```vue
<template>
  <mp-app-builder
    :baseAPI="baseAPI"
    :appConfigPath="appConfigPath"
    :appAssetsPath="appAssetsPath"
    :themes="themes"
    :widgets="widgets"
    @theme-change="onThemeChange"
    @save="onSaveApp"
  />
</template>

<script>
export default {
  data() {
    return {
      baseAPI: '',
      appConfigPath: '',
      appAssetsPath: '',
      themes: [],
      widgets: []
    }
  },
  created() {
    // 获取应用信息和可搭建的主题列表和微件列表
    this.baseAPI = xxx
    this.appConfigPath = xxx
    this.appAssetsPath = xxx
    this.themes = xxx
    this.widgets = xxx
  },
  methods: {
    onThemeChange({ theme, color }) {
      console.log('主题变化')
    },
    onSaveApp(appConfig) {
      console.log('保存配置')
    }
  }
}
</script>
```

## API

### MpAppBuilder

#### 属性

| 参数          | 说明                                                                            | 类型   | 默认值 |
| ------------- | ------------------------------------------------------------------------------- | ------ | ------ |
| baseAPI       | API 基地址，参考[AppManager](/zh/api/reference/builder/manager.html#loadconfig) | String | -      |
| appConfigPath | 应用配置相对于基地址的 url，同上                                                | String | -      |
| appConfigPath | 应用资源相对于基地址的 url，同上                                                | String | -      |
| themes        | 可搭建的主题列表，`[{name:xx}, {name:yy}, ...`                                  | Array  | -      |
| widgets       | 可搭建的微件列表，`[{name:xx}, {name:yy}, ...`]                                 | Array  | -      |

#### 事件

| 事件名称     | 说明               | 回调参数               |
| ------------ | ------------------ | ---------------------- |
| theme-change | 主题变化后响应     | ({theme, color}) => {} |
| save         | 保存应用配置时响应 | (appConfig) => {}      |
