# 应用加载器

加载应用的组件。

## 代码演示

```vue
<template>
  <mp-app-loader :application="application" />
</template>

<script>
import { AppManager } from '@mapgis/web-app-framework'

export default {
  data() {
    return {
      application: {}
    }
  },
  computed: {},
  async created() {
    await AppManager.getInstance().loadConfig(
      window._CONFIG['domainURL'],
      `${
        window._CONFIG['apiPathServicesPrefix']
      }/system/AppResourceServer/app/config`,
      `${window._CONFIG['apiPathServicesPrefix']}/system/AppResourceServer/`,
      request,
      process.env.VUE_APP_CONTEXT_PATH
    )
    this.application = AppManager.getInstance().getApplication()
  }
}
</script>
```

或

```vue
<template>
  <mp-app-loader :application="application" design-time />
</template>

<script>
import { AppManager } from '@mapgis/web-app-framework'

export default {
  data() {
    return {
      application: {}
    }
  },
  computed: {},
  async created() {
    await AppManager.getInstance().loadConfig(
      window._CONFIG['domainURL'],
      `${
        window._CONFIG['apiPathServicesPrefix']
      }/system/AppResourceServer/app/config`,
      `${window._CONFIG['apiPathServicesPrefix']}/system/AppResourceServer/`,
      request,
      process.env.VUE_APP_CONTEXT_PATH
    )
    this.application = AppManager.getInstance().getApplication()
  }
}
</script>
```

## API

### MpAppLoader

#### 属性

| 参数        | 说明                                                             | 类型    | 可选值 | 默认值 | 版本 |
| ----------- | ---------------------------------------------------------------- | ------- | ------ | ------ | ---- |
| application | 应用对象                                                         | object  |        |        |      |
| designTime  | 是否是设计时,主要用于后面开放的 builder 功能使用，暂时不需要关注 | boolean |        | false  |      |
