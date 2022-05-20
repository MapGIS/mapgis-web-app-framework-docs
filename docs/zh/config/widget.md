# Widget

## widget 类型

支持两种类型的 widget：in-panel 和 off-panel，每个 widget 都有一个 openAtStart 控制其是否初始打开。

1. **In-panel**，需要在一个 panel 中打开的
2. **Off-panel**，不需要在 panel 中打开

## 所需文件

最少情况下，一个 widget 只有 1 个 manifest 文件。

## Widget manifest

```javascript
{
  // widget的标识名称，需要与widget文件夹的名称一致
  "name": "比例尺",
  // widget的作者
  "author": "MapGIS",
  // widget的描述
  "description": "",
  // widget的组件名，如果inPanel为false，则表示widget本身UI，
  // 如果inPanel为true，其icon会显示到地图占位区域或内容区域中，widget本身UI会展示到Panel中
  "component": "",
  // widget图标,默认使用images/icon.svg
  "icon": "iconname",
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
    // 确定widget的窗口大小，默认为normal，可设置为normal（常规的，由panel决定）、max（最大化）
    "windowSize": "max",
    // 确定widget的窗口是否有边距，默认为true，可设置为false
    "hasPadding": false
  }
}
```

## 使 Widget 可配置

要使 widget 可配置，需要两个步骤

1. widget 中有一个配置文件 config.json
2. 配置 manifest.json 文件中的 properties. hasConfig 为 true

最佳实践是，如果一个 widget 可配置，就需要提供一个配置 UI，让其可以在应用中有自己专属的配置页面。请遵循下面 widget 的约定：

1. 配置 manifest.json 文件中的 properties. hasSettingPage 为 true
2. 配置 manifest.json 文件中的 properties. settingUiComponent
