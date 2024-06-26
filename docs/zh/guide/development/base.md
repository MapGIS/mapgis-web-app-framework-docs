# 基础

## 框架混入关系图

<img :src="$withBase('/images/framework-mixin-relationship-diagram.png')" alt="框架混入关系图">

[AppMin](/zh/components/mixin/app-mixin.html)：应用基础混入。提供框架运行所需信息，主要包含 application 对象（主题、微件、document 对象、logo、标题等信息）、地图渲染方式、地图切换方法等。

[MapMixin](/zh/components/mixin/map-mixin.html)：地图混入。通过**inject**的方式获取地图对象(map)、场景视图对象(viewer)、地图引擎对象(mapbox、cesium),以及 vueCesium 对象(vueCesium)。

[DisplayModeMixin](/zh/components/mixin/display-mode-mixin.html)： 地图加载模式混入。提供当前地图加载模式(二维模式、三维模式或者二三维一体模式)。

[ThemeMixin](/zh/components/mixin/theme-mixin.html)： 主题混入，继承自 AppMin 和 DisplayModeMixin。通过**provide**的方式给子孙组件提供地图对象(map)、场景视图对象(viewer)、地图引擎对象(mapbox、cesium),以及 vueCesium 对象(vueCesium)；提供微件状态更新、微件对应区域内容解析等方法。

[ThemeContentMixin](/zh/components/mixin/theme-content-mixin.html)：主题内容区域混入，继承自 AppMin。提供主题内容区域内微件的解析以及控制微件的显示隐藏等方法。

[PanelMixin](/zh/components/mixin/panel-mixin.html)：面板混入，继承自 AppMin 和 DisplayModeMixin。提供展示面板的微件集合、模式、位置、微件的状态和可见性控制等功能

[WidgetInfoMixin](/zh/components/mixin/widget-info-mixin.html)：微件信息混入，继承自 AppMin。提供微件的基础信息。

[WidgetMixin](/zh/components/mixin/widget-mixin.html)：微件混入，继承自 WidgetInfoMixin 和 MapMixin。提供微件的状态管理，通过微件状态的变化自定义了钩子函数，可以在钩子函数内处理业务逻辑。

[ExhibitionControllerMixin](/zh/components/mixin/exhibition-controller-mixin.html)：展示面板控制器混入。提供控制面板的打开关闭等操作方法。

[ExhibitionMixin](/zh/components/mixin/exhibition-mixin.html)：展示面板混入。提供控制面板内容加载等相关操作方法。

## 应用流程

<img :src="$withBase('/images/framework-application-process-diagram.png')" alt="框架应用流程图">

### 应用流程解析

#### 启动应用并加载应用配置

[mp-app-loader](/zh/components/builder/app-loader.html) 组件负责接收 application，然后提供给所有的子组件，只要任何组件混入 [app-mixin](/zh/components/mixin/app-mixin.html)，或者自己 inject getApplication，都可以拿到 application，以及 app-mixin 属性信息里的其他配置相关数据，比如 theme、document 等。

[app.json](/zh/config/app.html) 是应用全局配置，**包含应用基础配置、文档配置、微件配置等，可通过 [AppManager](/zh/components/mixin/manager.html) 进行加载，一次性加载完毕**，作为整个应用的数据流，贯穿于整个应用中。**可以先熟悉 app.json 内部结构，再回来看后面的内容。**

> 在引用 MpAppLoader 组件时，会同时引用 AppManager 来获取应用全局配置，并赋值给 application 参数，再将 application 参数赋值给 MpAppLoader 组件。
> MpAppLoader 组件接收到 application，然后提供给所有的子组件。

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

#### 主题和布局

\_themeComponent\_表示 theme 对象`(从 app.json 中获取)`所关联的主题清单中的组件。通过获取这个主题组件名称，动态创建该组件，并将该组件作为应用根组件，负责承载所有的内容区域布局、地图微件以及弹框面板的布局，其中地图微件和弹框面板由插槽引入。**主题组件可自定义。**

```json
{
  // 主题,app.json里的theme字段
  "theme": {
    // 主题名称，指向themes/name主题，对应自定义的主题组件名称
    "name": "pan-spatial-map-classic-theme",

    // 可选，系统主题风格，如果不存在，则使用customStyle
    "style": "night",

    // 可选，自定义主题风格，必须跟style至少存在一个
    "customStyle": {
      "color": "#1890ff",
      "theme": "night"
    }
  }
}
```

#### 地图微件

[mp-map-widget-indicator](/zh/components/builder/map-widget-indicator.html) 包含微件位置，微件图标，微件内容。地图微件可以是不带面板的微件、带面板的微件和占位微件，比如放大、缩小、二三维切换、综合查询，图例等。

##### 地图微件面板

\_mapWidgetPanelComponent\_地图微件弹出面板集，通过识别出 app.json 里 mapWidgets 中 widgets 的组件名称，动态创建识别的组件。该面板组件需要根据微件配置的位置计算出微件面板合适的显示位置。比如图例微件。

```json
{
  "mapWidgets": {
    "widgets": [
      {
        "id": "widget_9b4aaff5-c4b1-4402-be60-d2cc4eca0476",
        "uri": "widgets/map-mode-picker",
        "position": {
          "anchor": "bottom-left",
          "horizontalOffset": 10,
          "verticalOffset": 36
        }
      },
      {
        "id": "widget_9832ede9-8e67-415e-8964-d97a363e247f",
        "uri": "widgets/zoom",
        "position": {
          "anchor": "bottom-left",
          "horizontalOffset": 10,
          "verticalOffset": 78
        }
      },
      {
        "id": "widget_0bea04e6-3f6a-4826-9f33-41d52628baef",
        "uri": "widgets/legend",
        "position": {
          "anchor": "bottom-right",
          "horizontalOffset": 10,
          "verticalOffset": 0
        }
      },
      {
        "id": "widget_f13b2780-8303-45f4-a6c6-6feda62eccf0",
        "uri": "widgets/comprehensive-query",
        "config": "configs/comprehensive-query/config.json",
        "position": {
          "anchor": "top-left",
          "horizontalOffset": 10,
          "verticalOffset": 10
        }
      },
      {
        "position": {
          "anchor": "top-left",
          "horizontalOffset": 10,
          "verticalOffset": 52
        },
        "placeholder": true
      }
    ]
  }
}
```

#### 内容区域

当动态给主题组件传入跟 theme 的 contents 有关的 contentWidgets 后，主题组件会动态创建这些内容区域组件，并同时传入 widgets、widgetStructure 等数据，由内容区域组件自己负责布局和管理。比如左侧导航栏，右上角工具栏，底部结果集。

##### 内容区域微件面板

\_contentWidgetPanelComponents\_内容微件的弹出面板集。根据 contentWidgets.group[n]中 widgets 的组件名称，动态创建识别的组件。该面板组件需要根据微件配置的位置来进行展示，并考虑 relativeTo 和 mode 属性，如果 relativeTo 为 map，则展示在地图窗口上，如果为 content，则由内容区域组件自己去布局（比如自定义主题里定义的导航栏，工具栏等）；对于 mode 属性，默认的内容区域面板为 single 模式，如果要支持 multi，需要自己提供面板来实现。

#### 地图容器

mp-map-container 是地图容器组件，内部包含二维地图容器 mp-web-map-pro 和三维地图容器 mp-web-scene-pro。各类地图数据的加载都在地图容器中处理。

## 微件状态

共三种状态，`OPENED`、`ACTIVE`、`CLOSED`，分别表示打开、激活和关闭。对于不弹面板的微件来说，初始状态为 `OPENED`，像放大缩小按钮，因为可点击（虽不弹面板），所以点击后状态为 `ACTIVE`，一旦其他微件激活，它将重新变为 `OPENED`；对于可弹面板的微件来说，初始状态为 `CLOSED`，一旦面板弹出，状态变为 `OPENED`，如果该面板处于当前，则状态为 `ACTIVE`，一旦其他微件激活，它也将重新变为 `OPENED`，一旦面板被关闭，它的状态将变为 `CLOSED`，直到再次被打开。

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

地图模式分为二维和三维，目前，二维地图模式下引擎为 mapbox，三维模式下为 cesium，只要混入了 [AppMixin](/zh/components/mixin/app-mixin.html)，就可以通过获取 mapRender 来得到当前的引擎，或者通过 `is2DMapMode` 来判断当前是二维还是三维，如果要切换模式，调用 `switchMapMode` 可以轻松办到。

## 地图对象

默认主题混入对象，会监听地图容器对象地图的加载，不管是二维还是三维，监听完毕后会将二三维地图对象提供给主题的所有子组件，只要混入 [MapMixin](/zh/components/mixin/map-mixin.html)，就可以拿到这些对象，对于 [WidgetMixin](/zh/components/mixin/widget-mixin.html)，已经混入 [MapMixin](/zh/components/mixin/map-mixin.html)，所以任意微件，均可拿到这些对象进行使用。

## 微件配置

因为各微件配置位于应用目录下各微件自身的目录内，名为 [`config.json`](/zh/config/widget.html)，如果对初始配置有修改，会另外存储到应用目录下的 configs 下同微件名的目录下，微件配置会在应用加载的第一时间获取到，所以不是按需加载不是懒加载，在微件组件内，直接通过 config 属性就可以直接拿到这些配置数据。
