# 开始使用

## 写在前面

MapGIS Web App Framework 是一个面向 WebGIS 应用的的解决方案，它基于 [vue](https://github.com/vuejs/vue), [typescript](https://www.typescriptlang.org/), [ant-design-vue](https://github.com/vueComponent/ant-design-vue)和[MapGIS Client for JavaScript](https://github.com/MapGIS/WebClient-JavaScript)实现。

本项目使用了最新的前端技术栈，提供了基于微件技术的应用框架和丰富的地图功能组件，它可以帮助你快速搭建 WebGIS 应用。相信不管你的需求是什么，本项目都能帮助到你。

## 功能

```txt
- 常规组件
  - 组件
    - 图标(icon)
    - 按钮(button)
    - 折叠按钮(collapse-button)
    - 工具栏(toolbar)
      - 工具栏(toolbar)
      - 工具栏间距(toolbar-space)
      - 工具栏标题(toolbar-title)
      - 工具栏功能按钮(toolbar-command)
      - 工具栏功能按钮集合(toolbar-command-group)
    - 定位容器(placement)
    - 窗口(window)
    - 卡片(card)
    - 多选框(checkbox)
      - 颜色多选框(color-checkbox)
      - 颜色多选框集合(color-checkbox-group)
      - 图片多选框(img-checkbox)
      - 图片多选框(img-checkbox-group)
    - 颜色选择器(color-picker)
    - 颜色选择器带确认按钮(color-picker-confirm)
    - 可编辑表格(editable-table)
    - 文件预览(file-preview)
    - 遮罩层(mask)
    - 弹出框内容面板(Popup-attribute)
    - 设置表单(setting-form)
    - 树选择(tree-select)
    - 微件跳转路由(widget-routers)
    - (adjust-line)
    - (group-tab)
    - (row-flex)
    - (spin)
    - (portal)

- 地图组件
  - 组件
    - 地图(map-pro)
      - 地图(web-map-pro)
      - 场景(web-scene-pro)
    - 绘制(draw-pro)
      - 绘制(draw-pro)
      - 3d绘制(3d-draw-pro)
    - 标注(marker-pro)
      - 标注(marker-pro)
      - (marker-set-pro)
      - 3d标注(3d-marker-pro)
      - (3d-marker-set-pro)
    - 标绘(marker-plotting)
      - 标绘(marker-plotting)
      - 3d标绘(3d-marker-plotting)
    - 属性统计(attribute-statistics)
    - 自定义查询(field-calculator)
    - 过滤器(filter)

- 搭建组件
  - 组件
    - 应用加载器(app-loader)
    - 应用搭建器(app-builder)
    - 地图容器(map-container)
    - 微件指示器(map-widget-indicator)
      - 微件按钮(map-widget-button)
    - 地图面板(map-panel)
      - 地图面板(map-widget-panel)
      - 内容面板(content-widget-panel)
    - 窗口容器(window-wrapper)
    - 展示面板(exhibition-panel)
  - 应用管理(managers)
    - 配置加载(app-manager)
    - 微件管理(widget-manager)
  - 混入(mixins)
    - 应用混入(app-mixin)
    - 主题混入(theme-mixin)
    - 主题区域混入(theme-content-mixin)
    - 面板混入(panel-mixin)
    - 微件信息混入(widget-info-mixin)
    - 微件混入(widget-mixin)
    - 地图混入(map-mixin)
    - 展示面板混入(exhibition-mixin)
    - 展示面板控制器混入(exhibition-controller-mixin)
  - 工具(utils)
    - 微件状态(widget-state)

- 模型
  - 对象(objects)
    - 角度转换(AngleConvert)
    - 投影变换(ProjectionTransformation)
    - 范围(Bound)
    - 几何(GeometryExp)
    - 场景控制器(SceneController)
  - 文档(document)
    - 图层(layer)
      - 图层(Layer)
      - 图层类型(LayerType)
      - 图层加载状态(LoadStatus)
    - 瓦片图层(tile-layer)
      - 瓦片图层(TileLayer)
      - 瓦片级别信息(LOD)
      - 瓦片切片信息(TileInfo)
    - 地图服务图层(map-image-layer)
      - 地图服务图层(MapImageLayer)
      - 子图层(Sublayer)
    - IGS瓦片服务图层(IGSTileLayer)
    - IGS地图服务图层(igs-map-image-layer)
      - IGS地图服务图层(IGSMapImageLayer)
      - 子图层(IGSSublayer)
    - IGS地图服务矢量图层(IGSVectorLayer)
    - 数据流图层(DataFlowLayer)
    - OGCWMTS服务图层(ogc-wmts-layer)
      - OGCWMTS服务图层(OGCWMTSLayer)
      - OGCWMTS服务图层子图层(WMTSSublayer)
      - 瓦片矩阵集(TileMatrixSet)
      - WMTSSublayer的样式信息(WMTSStyle)
      - 发布WMTS的厂商信息(WMTSCorporation)
    - OGCWMS服务图层(ogc-wms-layer)
      - OGCWMS服务图层(OGCWMSLayer)
      - OGCWMS服务图层子图层(WMSSublayer)
    - ArcGIS瓦片服务图层(ArcGISTileLayer)
    - ArcGIS地图服务图层(arcgis-map-image-layer)
      - ArcGIS地图服务图层(ArcGISMapImageLayer)
      - ArcGIS地图服务图层子图层(ArcGISSublayer)
    - 高德墨卡托地图服务图层(amap-layer)
      - 高德墨卡托电子地图图层(AMapMercatorEMapLayer)
      - 高德墨卡托卫星地图图层(AMapMercatorSatelliteMapLayer)
      - 高德墨卡托卫星注记地图图层(AMapMercatorSatelliteAnnMapLayer)
    - 矢量瓦片图层(VectorTileLayer)
    - 三维图层(3d-layer)
      - 三维包围盒(Rectangle3D)
      - 三维点(Point3D)
      - 三维图层抽像类(Layer3D)
    - IGS发布的三维场景服务(igs-scene-layer)
      - IGS发布的三维场景服务(IGSSceneLayer)
      - 三维场景服务图层子图层渲染类型枚举(IGSSceneSublayerRenderType)
      - 三维场景服务图层子图层类型枚举(IGSSceneSublayerType)
      - 三维场景服务对象(Scene)
      - 三维场景服务图层子图层(IGSSceneSublayer)
    - 三维模型缓存图层(model-cache-layer)
      - 三维模型缓存图层(ModelCacheLayer)
      - 三维模型缓存格式(ModelCacheFormat)
    - 要素图层(feature-layer)
      - 高程模式(ElevationMode)
      - 要素表达式信息(FeatureExpressionInfo)
      - 距离单位(LengthUnit)
      - 高程信息类(ElevationInfo)
      - 要素图层(FeatureLayer)
    - IGS矢量要素图层(IGSFeatureLayer)
    - GeoJSON图层(GeoJsonLayer)
    - 图形层(GraphicsLayer)
  - 目录(catalog)
    - 数据源(DataSourceCatalog)
    - 系统库(SystemLibraryCatalog)
    - 文档(DocumentCatalog)
    - 地图文档信息查询参数结构(DocInfoQueryParam)
    - 地图图层信息查询参数结构(LayerInfoQueryParam)
    - 地图文档信息CatalogLayer结构(MapInfoCatalogLayer)
    - 地图文档信息MapInfo结构(DocInfoMapInfo)
    - 地图文档信息结构(DocInfo)
  - 要素(feature)
    - IGS查询结果结构(feature)
      - XY结构(XY)
      - Arc结构(Arc)
      - Ring结构(Ring)
      - PntGeom结构(PntGeom)
      - LinGeom结构(LinGeom)
      - RegGeom结构(RegGeom)
      - FGeom结构(FGeom)
      - SFEleArray结构(FeatureIGSSFEle)
      - AttStruct结构(FeatureIGSAttStruct)
      - IGS查询结果结构(FeatureIGS)
    - GeoJSON结构(feature-geojson)
      - SpatialAttr结构(GMetaInfoGeoSpatialAttr)
      - MetaInfo Geometry结构(GMetaInfoGeometry)
      - MetaInfo结构(GMetaInfo)
      - CRS结构(GeoCRS)
      - Geometry结构(GGeometry)
      - Feature结构(GFeature)
      - GeoJSON结构(FeatureGeoJSON)
      - 获取GeoJSON要素的中心点坐标(getGeoJSONFeatureCenter)
      - 获取一组要素的中心(getGeoJSONFeaturesCenter)
      - 获取GeoJSON的外包矩形(getGeoJSONFeatureBound)
    - 要素转换(feature-convert)
    - 要素查询(feature-query)
      - 要素查询(FeatureQuery)
      - 要素查询参数结构(FeatureQueryParam)
      - 地名地址查询结果要素(GeoCodeFeature)
      - 地名地址查询结果要素集合(ESGeoCodeFeatures)
    - 要素编辑(FeatureEdit)
    - ArcGIS要素查询(arcgis-feature-query)
      - ArcGIS查询参数结构(ArcGISQueryParam)
      - ArcGIS要素查询(ArcGISFeatureQuery)
  - 元数据(metadata)
    - IGS元数据查询(metadata-query)
      - IGS元数据查询MetaDataQuery)
      - 元数据查询参数结构(MetadataQueryParam)
      - 元数据图层列表结构(LayerList)
      - 元数据图层结构(LayerTable)
      - 元数据结构(Metadata)
    - OGC元数据查询(OGCMetadataQuery)
    - ArcGIS元数据查询(ArcGISMetadataQuery)
    - 矢量瓦片元数据查询(VectorTileMetadataQuery)
  - 分析(analysis)
    - 属性统计(AttributeStatistic)
    - 工作流(workflow-analysis)
      - 工作流(WorkflowAnalysis)
      - 工作流执行参数结构(ExecuteWorkflowParam)
      - 工作流执行状态参数结构(WorkflowStatusParam)
  - 展示面板(exhibition)
    - 展示面板(exhibitionListInstance)
    - 展示面板结构(IExhibition)
    - 字段结构(IFields)
    - 属性表查询参数结构(IAttributeTableOption)
    - 属性表展示面板结构(IAttributeTableExhibition)
    - 属性表列表展示面板结构(IAttributeTableListExhibition)
    - 属性表展示面板(AttributeTableExhibition)
    - 属性表列表展示面板(AttributeTableListExhibition)
    - 展示列表(ExhibitionList)
  - 覆盖层(overlay)
    - 场景覆盖层(SceneOverlays)

- 工具
  - 常规工具(common-util)
  - 字符串工具(string-util)
  - 数组工具(array-util)
  - 对象工具(object-util)
  - 时间工具(time-util)
  - 颜色工具(color-util)
  - DOM工具(dom-util)
  - url工具(url-util)
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
  MpCard,
  MpEditableTable,
  MpRowFlex,
  MpToolbar,
  MpToolbarSpace,
  MpToolbarTitle,
  MpToolbarCommand,
  MpToolbarCommandGroup,
  MpPlacement,
  MpWindow,
  MpColorPicker,
  MpColorPickerConfirm,
  MpTreeSelect,
  MpSettingForm,
  MpGroupTab,
  MpAdjustLine,
  MpCollapseButton,
  MpMask,
  MpSpin,
  MpColorCheckboxGroup,
  MpColorCheckbox,
  MpImgCheckboxGroup,
  MpImgCheckbox,
  MpWidgetRouters,
  MpFilePreview,
  MpPopupAttribute,

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
  MpAttributeStatistics,
  MpFieldCalculator,
  MpFilter

  // builder components
  MpAppLoader,
  MpAppBuilder,
  MpMapContainer,
  MpMapWidgetButton,
  MpContentWidgetPanel,
  MpMapWidgetPanel,
  MpExhibitonPanel,
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
