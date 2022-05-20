# 快速上手

## 技术准备

由于本项目技术栈基于 [typescript](https://www.typescriptlang.org/)、[vue](https://cn.vuejs.org/index.html)、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [ant-design-vue](https://github.com/vueComponent/ant-design-vue)，因此需提前了解和学习这些相关知识。

## 开发环境

需本地安装 [node.js](https://nodejs.org/zh-cn/)，并且 node 版本为 14.x.x。

## 安装

```bash
npm install --save @mapgis/web-app-framework
# 或者
yarn add @mapgis/web-app-framework
```

在 main.js 中全局引入

```js
import Vue from 'vue'
import WebAppFramework from '@mapgis/web-app-framework'
import App from './App.vue'

Vue.use(WebAppFramework)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## 加载应用

```vue
<template>
  <mp-app-loader :application="application" />
</template>

<script>
import { AppManager } from '@mapgis/web-app-framework'
import { getAppInfo } from '@/services/user'
import { BASE_URL } from '@/services/api'
import { request } from '@/utils/request'

export default {
  data() {
    return {
      application: {}
    }
  },
  async created() {
    try {
      const appInfo = await getAppInfo()
      await AppManager.getInstance().loadConfig(
        BASE_URL,
        appInfo.data.configPath,
        appInfo.data.assetsPath,
        request
      )
      // 通过 AppManager 获取应用全局配置，并赋值给 application 参数
      this.application = AppManager.getInstance().getApplication()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
```
