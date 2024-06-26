# 微件

## 微件类型

支持两种类型的 widget：in-panel 和 off-panel，每个 widget 都有一个 openAtStart 控制其是否初始打开。

1. **In-panel**，即 inPanel 设置为 true，表示需要在一个 panel 中打开的
2. **Off-panel**，即 inPanel 设置为 false，表示不需要在 panel 中打开

## 所需文件

一般情况下，一个 widget 只有 1 个 manifest 文件。

## 微件 manifest

```javascript
{
  // widget的标识名称
  "name": "底图管理",
  // widget的作者
  "author": "MapGIS",
  // widget的描述
  "description": "",
  // widget的组件名，如果inPanel为false，则表示widget本身UI，
  // 如果inPanel为true，其icon会显示到地图占位区域或内容区域中，widget本身UI会展示到Panel中
  "component": "MpBasemapManager",
  // widget图标
  "icon": "<svg class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><defs><style/></defs><path d=\"M64 64h384v384H64zm512 0h384v384H576zM64 576h384v384H64zm512 0h384v384H576z\"/></svg>",
  // widget属性表
  "properties": {
    // 确定widget是否支持2D，默认为true
    "2D": true,
    // 确定widget是否支持3D，默认为false
    "3D": true,
    // 设置widget是否inPanel，如果不在一个panel中，widget会直接展示，默认为true
    "inPanel": false,
    // 设置为true的话，默认加载config文件，反之不加载，默认为true
    "hasConfig": false,
    // 设为为true的话，builder会加载setting页。如果为false并且widget可配置则展示一个Json编辑器
    "hasSettingPage": true,
    // 如果有setting页，settingUiComponent表示设置页ui的组件名
    "settingUiComponent": "",
    // 确定widget的窗口大小，默认为normal，可设置为normal（常规的，由panel决定）、max（最大化），可不设置
    "windowSize": "max",
    // 自定义widget面板的宽度，Number格式，在经典主题下工具条微件所属面板默认为320，左侧微件所属面板默认为280，可不设置
    "customWidth": 280
    // 确定widget的窗口是否有边距，默认为true，可设置为false，可不设置
    "hasPadding": false,
    // 设置微件是否懒加载，默认为false，当为true的时候，会在打开微件面板时才会去加载微件，可通过此特性控制初始加载的微件数和内存大小
    "lazyload": false,
    // 设置微件是否有UI，默认为true，当inPanel为false且hasUi也为false时，会自动加载该微件，并由内容区域负责该微件的标识和响应
    "hasUi": true
  }
}
```

## 使微件可配置

要使 widget 可配置，需要两个步骤

1. widget 中有一个配置文件 config.json
2. 配置 manifest.json 文件中的 properties. hasConfig 为 true

最佳实践是，如果一个 widget 可配置，就需要提供一个配置 UI，让其可以在应用中有自己专属的配置页面。请遵循下面 widget 的约定：

1. 配置 manifest.json 文件中的 properties. hasSettingPage 为 true
2. 配置 manifest.json 文件中的 properties. settingUiComponent
