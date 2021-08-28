# 开始使用

## 写在前面

MapGIS Web App Framework 是一个面向 WebGIS 应用的的解决方案，它基于 [vue](https://github.com/vuejs/vue), [typescript](https://www.typescriptlang.org/), [ant-design-vue](https://github.com/vueComponent/ant-design-vue)和[MapGIS Client for JavaScript](https://github.com/MapGIS/WebClient-JavaScript)实现。

本项目使用了最新的前端技术栈，提供了基于微件技术的应用框架和丰富的地图功能组件，它可以帮助你快速搭建 WebGIS 应用。相信不管你的需求是什么，本项目都能帮助到你。

## 功能

```txt
- 常规组件
  - 组件
    - 图标
    - 按钮
    - 工具栏
    - 定位容器
    - 窗口

- 地图组件
  - 组件
    - 地图
      - 地图
      - 场景
    - 绘制
      - 绘制
      - 3d绘制
    - 标注
      - 标注
      - 3d标注
    - 标绘
      - 标绘
      - 3d标绘

- 搭建组件
  - 组件
    - 应用加载器
    - 应用搭建器
    - 地图容器
    - 微件指示器
      - 微件按钮
    - 地图面板
      - 地图面板
      - 内容面板
    - 窗口容器

  - 应用管理
    - 配置加载
    - 微件管理
    - 面板管理

  - 混入
    - 应用混入
    - 主题混入
    - 主题区域混入
    - 面板混入
    - 微件信息混入
    - 微件混入

- 模型
  - 对象
  - 文档
  - 目录
  - 要素
  - 元数据
  - 分析
  - 标绘

- 工具
  - 常规工具
  - 字符串工具
  - 数组工具
  - 对象工具
  - 时间工具
  - 颜色工具
  - DOM工具
```

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [typescript](https://www.typescriptlang.org/)、[vue](https://cn.vuejs.org/index.html)、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [ant-design-vue](https://github.com/vueComponent/ant-design-vue)，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 着手使用

```bash
# 安装
yarn add @mapgis/web-app-framework
```

完整引入，在 main.js 中写入以下内容：

```js
import Vue from 'vue'
import WebAppFrameworkUI from '@mapgis/web-app-framework'
import App from './App.vue'

Vue.use(WebAppFrameworkUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

以上代码便完成了 `WebAppFramework` 的引入。所有的组件都以 `MpXxx` 开头，完整组件列表如下：

```js
const components = [
  // common components
  MpIcon,
  MpButton,
  MpToolbar,
  MpToolbarSpace,
  MpToolbarCommand,
  MpToolbarCommandGroup,
  MpPlacement,
  MpWindow,

  // map components
  MpWebMapPro,
  MpWebScenePro,
  MpDrawPro,
  Mp3dDrawPro,
  MpMarkerPro,
  Mp3dMarkerPro,
  MpMarkerSetPro,
  Mp3dMarkerSetPro,
  MpMarkerPlotting,
  Mp3dMarkerPlotting,

  // builder components
  MpAppLoader,
  MpAppBuilder,
  MpMapContainer,
  MpMapWidgetButton,
  MpContentWidgetPanel,
  MpMapWidgetPanel,
  MpWindowWrapper
]
```

## 加载应用

```html
<template>
  <mp-app-loader :application="application" />
</template>
```

```js
<script>
import { AppManager } from '@mapgis/web-app-framework'

export default {
  data() {
    return {
      application: {},
      baseURL: '',
      configPath: '',
      assetsPath: '',
    }
  },
  async created() {
    await AppManager.getInstance().loadConfig(
      this.baseURL,
      this.configPath,
      this.assetsPath
    )

    this.application = AppManager.getInstance().getApplication()
  }
}
</script>
```

## Vue 生态圈

**首先了解这些 vue 生态圈的东西，会对你上手本项目有很大的帮助。**

1. [Vue Router](https://router.vuejs.org/) 是 vue 官方的路由。它能快速的帮助你构建一个单页面或者多页面的项目。

2. [Vuex](https://vuex.vuejs.org/) 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。它能解决你很多全局状态或者组件之间通信的问题。

3. [Vue Loader](https://vue-loader.vuejs.org) 是为 vue 文件定制的一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件。它能在开发过程中使用热重载来保持状态，为每个组件模拟出 scoped CSS 等等功能。不过大部分情况下你不需要对它直接进行配置，脚手架都帮你封装好了。

4. [Vue Test Utils](https://vue-test-utils.vuejs.org/) 是官方提供的一个单元测试工具。它能让你更方便的写单元测试。

5. [Vue Dev-Tools](https://github.com/vuejs/vue-devtools) Vue 在浏览器下的调试工具。写 vue 必备的一个浏览器插件，能大大的提高你调试的效率。

6. [Vue CLI](https://cli.vuejs.org/) 是官方提供的一个 vue 项目脚手架，本项目也是基于它进行构建的。它帮你分装了大量的 webpack、babel 等其它配置，让你能花更少的精力在搭建环境上，从而能更专注于页面代码的编写。不过所有的脚手架都是针对大部分情况的，所以一些特殊的需求还是需要自己进行配置。建议先阅读一遍它的文档，对一些配置有一些基本的了解。

7. [Vetur](https://github.com/vuejs/vetur) 是 VS Code 的插件. 如果你使用 VS Code 来写 vue 的话，这个插件是必不可少的。
