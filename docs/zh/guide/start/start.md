# 快速上手

## 技术准备

MapGIS Web App Framework 使用了最新的前端技术，比如 [typescript](https://www.typescriptlang.org/)、[vue](https://cn.vuejs.org/index.html)、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [ant-design-vue](https://github.com/vueComponent/ant-design-vue)，使用之前，可提前了解和学习这些相关知识。

## 开发环境

本地需安装 [node.js](https://nodejs.org/zh-cn/)，并且 node 版本为 14.x.x。

## 安装

```bash
yarn add @mapgis/web-app-framework
# 或者
npm install --save @mapgis/web-app-framework
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

export default {
  props: {
    baseAPI: String,
    appConfigPath: String,
    appAssetsPath: String
  },
  data() {
    return {
      application: {}
    }
  },
  async created() {
    const appManager = AppManager.getInstance()

    // 加载应用
    await appManager.loadConfig(
      this.baseAPI,
      this.appConfigPath,
      this.appAssetsPath
    )

    // 获取应用（解析后的应用对象）
    this.application = appManager.getApplication()
  }
}
</script>
```
