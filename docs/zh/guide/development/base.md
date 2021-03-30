# 基础

## 组件关系

<img :src="$withBase('/images/components-relation.png')" alt="组件之间的关系">

## 应用流程

<img :src="$withBase('/images/app-flow.png')" alt="组件之间的关系">

### 1. 加载应用配置

[app.json](<(/zh/guide/introduction/config.html#app-json)>) 是应用全局配置，**包含应用基础配置、文档配置、微件配置等，可通过 [AppManager](/zh/api/reference/manager.html#appmanager) 进行加载，一次性加载完毕**，作为整个应用的数据流，贯穿于整个应用中。

### 2. 启动应用

[MpAppLoader](/zh/components/app-loader.html) 组件负责接收 application，然后提供给所有的子组件，只要任何组件混入 [AppMixin](/zh/api/reference/app-mixin.html)，或者自己 inject getApplication，都可以拿到 application，以及其他的 theme、document 等所有跟配置相关的数据。

### 3. 解析主题和布局

获取 theme 对象关联的主题清单中的组件名称，动态创建该组件，该组件作为应用根组件，负责承载所有的内容区域布局和地图微件以及弹框面板的布局，其中地图微件和弹框面板由插槽引入。

### 4. 内容区域解析

当动态给主题组件传入跟 theme 的 contents 有关的 contentWidgets 后，主题组件会动态创建这些内容区域组件，并同时传入 widgets、widgetStructure 等数据，由内容区域组件自己负责布局和管理。

### 5. 地图微件解析

MpMapWidgetContainer 组件负责各类地图微件的管理，包括不带面板的微件、带面板的微件和占位微件。

### 6. 地图微件面板解析

识别出 mapWidgets 中 panel 的组件名称，动态创建该组件，传入所有 widgets。该面板组件需要根据微件的位置计算出合适的面板位置。

### 7. 内容区域微件面板解析

识别出 contentWidgets.group[n]中 panel 的组件名称，动态创建该组件，传入所有 widgets。该面板组件需要根据配置的位置来进行展示，并考虑 relativeTo 和 mode 属性，如果 relativeTo 为 map，则展示在地图窗口上，如果为 content，则由内容区域组件自己去布局；对于 mode 属性，默认的内容区域面板为 single 模式，如果要支持 multi，需要自己提供面板来实现。

## 微件状态

共三种状态，`OPENED`、`ACTIVE`、`CLOSED`，分别表示打开、激活和关闭，对于不弹面板的微件来说，初始状态为 `OPENED`，像放大缩小按钮，因为可点击（虽不弹面板），所以点击后状态为 `ACTIVE`，一旦其他微件激活，它将重新变为 `OPENED`；对于可弹面板的微件来说，初始状态为 `CLOSED`，一旦面板弹出，状态变为 `OPENED`，如果该面板处于当前，则状态为 `ACTIVE`，一旦其他微件激活，它也将重新变为 `OPENED`，一旦面板被关闭，它的状态将变为 `CLOSED`，直到再次被打开。

### 源码定义

```js
const WidgetState = {
  OPENED: 'opened',
  ACTIVE: 'active',
  DEACTIVE: 'deActive',
  CLOSED: 'closed'
}
```

### 使用

```js
import { WidgetState } from '@mapgis/web-app-framework'

export default {
  data() {
    return {
      selectWidgetId: ''
    }
  },
  methods: {
    onUpdateWidgetState({ widget, newState, oldState }) {
      if (newState !== WidgetState.CLOSED) {
        this.selectWidgetId = widget.id
      } else {
        if (this.selectWidgetId == widget.id) {
          this.selectWidgetId = ''
        }
      }
    }
  }
}
```

## 面板状态

面板状态同微件状态，他们的状态是同步的，处于激活状态的面板，其 z-index 最大，所以会处于其他面板的顶端，默认情况下，点击面板任意位置都会将其激活。

## 地图模式

地图模式分为二维和三维，目前，二维地图模式下引擎为 mapbox，三维模式下为 cesium，只要混入了 [AppMixin](/zh/api/reference/app-mixin.html)，就可以通过获取 mapRender 来得到当前的引擎，或者通过 `is2DMapMode` 来判断当前是二维还是三维，如果要切换模式，调用 `switchMapMode` 可以轻松办到。

## 地图对象

默认主题混入对象，会监听地图容器对象地图的加载，不管是二维还是三维，监听完毕后会将二三维地图对象提供给主题的所有子组件，只要混入 [MapMixin](/zh/api/reference/map-mixin.html)，就可以拿到这些对象，对于 [WidgetMixin](/zh/api/reference/widget-mixin.html)，已经混入 [MapMixin](/zh/api/reference/map-mixin.html)，所以任意微件，均可拿到这些对象进行使用。

## 微件配置

因为各微件配置位于应用目录下各微件自身的目录内，名为 [`config.json`](/zh/guide/introduction/config.html#widget)，如果对初始配置有修改，会另外存储到应用目录下的 configs 下同微件名的目录下，微件配置会在应用加载的第一时间获取到，所以不是按需加载不是懒加载，在微件组件内，直接通过 config 属性就可以直接拿到这些配置数据。
