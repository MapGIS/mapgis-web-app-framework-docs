# 配置

## 目录结构

```text
|── app.json                   # 描述App内容
|── app                        # 应用目录
    |── configs                # 应用配置目录，主要用来存放设置过的widget的config.json
       |── xxx                 # 单个widget（跟widget同名）
           |── config.json     # widget配置文件，会在应用的config.json中引用
    |── images                 # 应用图片目录，用来存放应用默认logo和其他图片资源
    |── widgets                # widget目录
       |── xxx                 # 单个widget（跟widget同名）
           |── manifest.json   # 描述widget内容
           |── config.json     # 描述widget配置
           |── images          # widget图片目录，用来存放widget图标等
    |── themes                 # theme目录
       |── xxx                 # 单个主题
           |── manifest.json   # 描述主题内容
           |── layout.json     # 描述主题布局
           |── images          # 主题图片目录，用来存放主题图标等
```

## 命名规范

所有文件应该使用 kebab-case。

## Widget

### widget 类型

支持两种类型的 widget：in-panel 和 off-panel，每个 widget 都有一个 openAtStart 控制其是否初始打开。

1. **In-panel**，需要在一个 panel 中打开的
2. **Off-panel**，不需要在 panel 中打开

### 所需文件

最少情况下，一个 widget 只有 1 个 manifest 文件。

### Widget manifest

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

### 使 Widget 可配置

要使 widget 可配置，需要两个步骤

1. widget 中有一个配置文件 config.json
2. 配置 manifest.json 文件中的 properties. hasConfig 为 true

最佳实践是，如果一个 widget 可配置，就需要提供一个配置 UI，让其可以在应用中有自己专属的配置页面。请遵循下面 widget 的约定：

1. 配置 manifest.json 文件中的 properties. hasSettingPage 为 true
2. 配置 manifest.json 文件中的 properties. settingUiComponent

## 主题

主题是一个用户界面元素集合，它定义了 App 的外观，布局，app 导航，和 map 上基础 UI 组件（比如：比例尺、鹰眼图等）。
通过主题，可以打造个性化的应用界面、用户交互体验、和品牌样式。
主题元素主要包括：widget panel、style、布局。

<div style="width:100px">主题元素</div> | 定义
---|---
Panel | Panel是展示widget内容的UI窗口。可以定制特定主题上，具有特殊功能和样式的Panel。比如：你可以开发一个可以在屏幕上随意拖动，并且拥有紫色主题样式的Panel。通过主题Panel，widget开发者可以集中在开发widget内部功能，而不用担心widget怎么展示。一个主题可以包含多个Panels。
样式 | 一个主题可以包含多个样式。
布局 | 本质上来说，布局是一种规定UI元素在屏幕上的位置的app配置。

### 主题 manifest

```javascript
{
  // theme的名称
  "name": "启动器主题",
  // theme的作者
  "author": "MapGIS",
  // theme的描述
  "description": "",
  // theme的组件名
  "component": "LaunchpadTheme",

  // theme的样式集合
  "styles": [
    {
      // 样式名称
      "name": "blue",
      // 样式描述
      "description": "蓝色风格",
      // 主题颜色
      "color": "#1890ff",
      // 主题，描述布局、模式等
      "theme": "dark"
    },
    {
      "name": "golden-purple",
      "description": "酱紫",
      "color": "#722ed1",
      "theme": "dark"
    },
    {
      "name": "magenta",
      "description": "法式洋红",
      "color": "#eb2f96",
      "theme": "dark"
    },
    {
      "name": "dark",
      "description": "暗蓝",
      "color": "#1890ff",
      "theme": "night"
    }
  ],
  // theme的布局内容区域集合，通过内容区域把widget分组
  "contents": [
    {
      // 对应的组名
      "name": "launch",
      // 描述
      "description": "发射台",
      // 组件名称
      "component": "",
      // widget最大数目，如果未设置，数目不限制
      "maxWidgets": 1
    }
  ]
}
```

### 主题样式

定义样式名称、描述和背景、字体。其中 color 指向主题颜色， theme 指向主题风格，这里的样式 name，会在 App 的配置 config.json 中用到。

### 主题内容区域

一个主题布局内部可能有多个内容区域，每个内容区域都可以放置多个 widget，来进行导航，可设置最大的 widget 数目，内容区域与在 App 的配置 config.json 中 contentWidgets.groups 下同名的组对应。

```javascript
// 比如manifest定义的content为launch，它将会对contentWidgets.groups下content名为launch的组提供导航能力
// themes/launchpad-theme/manifest.json
{
  ...
  "contents": [
    {
      // 对应的组名
      "name": "launch",
    }
  ]
  ...
}
```

```javascript
// 应用config.json
{
  ...
  // 内容widgets，由布局的内容区域去使用
  "contentWidgets": {
  // 内容widgets分为多组，每组对应布局中的一个内容区域（主题manifest.json中的contents）
    "groups": [
      {
        // 组名
        "content": "launch",
        ...
      }
    ]
   }
  ...
}
```

同时也可以设置此区域内的 widget 结构，用于分组，可用于菜单和扩展列表。

```javascript
// 可选，定义widget结构，用于分类，形成菜单或扩展项
"widgetStructure": [
  {
    "id": "widget_2"
  },
  {
    "id": "folder_1",

    // 可选，类型：folder，默认为widget
    "type": "folder",

    // 图标
    "icon": "",

    // 名称
    "label": "",

    // 子widgets
    "children": [
      {
        "id": "widget_3"
      },
      {
        "id": "folder_1_1",
        "type": "folder",
        "icon": "",
        "label": "",

        "children": [
          {
            "id": "widget_4"
          }
        ]
      }
    ]
  }
],
```

以上会形成类似下面这样的结构，在设计器没有支持组编辑之前，只能通过手动修改文件。

```text
widget_2 | folder_1
           ── widget_3
           ── folder_1_1
              ── widget_4
```

### 布局

布局是一个模板配置文件。虽然它和 app 的 config 文件使用一样的格式，但是它只是一个子集。

在布局中，使用 URI 和位置属性来定义 mapWidgets，使用 URL 来定义 contentWidgets。

那些只包含位置属性且定义了 placeholder 为 true 的 widget 被叫做占位空间，当配置的时候它允许加入一个 widget。

- **mapWidgets**: 地图 widgets，都是相对于 map 的，可以定义占位空间，对于 off-panel，设计器可以设置 visible，可以进行拖动（只要 dragble 不为 false）。
- **contentWidgets**：内容 widgets，用来供页面导航使用，加入的 widget 必须以 group 的形式存在，添加到布局的 content 中。

```javascript
{
  "mapWidgets": {
    "widgets": [
      {
        "uri": "widgets/map-mode-picker",
        "position": {
          "anchor": "top-left",
          "horizontalOffset": 10,
          "verticalOffset": 10
        }
      },
      // 默认该主题布局配置了缩放按钮，在地图容器的左上角，距离左边10px，距离上边50px
      {
        "uri": "widgets/zoom",
        "position": {
          "anchor": "top-left",
          "horizontalOffset": 10,
          "verticalOffset": 50
        }
      },
      // 默认该主题布局配置了导航仪，在地图容器的右下角，且不允许拖拽改变位置
      {
        "uri": "widgets/Globe",
        "position": {
          "author": "bottom-right",
          "horizontalOffset": 0,
          "verticalOffset": 0
        },
        "dragable": false
      },
      // 下面3个是占位空间
      {
        "position": {
          "author": "top-right",
          "horizontalOffset": 20,
          "verticalOffset": 20
        },
        "placeholder": true
      },
      {
        "position": {
          "author": "top-right",
          "horizontalOffset": 20,
          "verticalOffset": 60
        },
        "placeholder": true
      },
      {
        "position": {
          "author": "top-right",
          "horizontalOffset": 20,
          "verticalOffset": 100
        },
        "placeholder": true
      }
    ]
  },

  "contentWidgets": {
    "groups": [
      {
        "name": "launch",
        "widgets": []
      }
    ]
  }
}

```

## App

### app.json

```javascript
// 这个文件描述应用配置信息
{
  //可选，地图名称
  "name": "黑夜地图",
  //可选，当前激活图层
  "current": {
    "id": "地铁注记",
    "type": "VectorTile",
    "name": "地铁"
  },
  // 可选，背景图层
  "backgrounds": [
    {
      "title": "OSM地图",
      "name": "OSM街道地图",
      "id": "osmstreets",
      "key": "osmstreets",
      "icon": "icon-background",
      "type": "background",
      "tileUrl": "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
      "imgUrl": "https://user-images.githubusercontent.com/23654117/56859980-16e31c80-69c4-11e9-9e15-0980bd7ff947.png"
    }
  ],
  // 可选，图标配置
  "sprite": "http://localhost:6163/igs/rest/mrms/vtiles/sprite",
  // 可选，字体配置
  "glyphs": "http://localhost:6163/igs/rest/mrms/vtiles/fonts/{fontstack}/{range}.pbf",
  // 可选，地图引擎，默认值为mapboxgl
  "maprender": "mapboxgl",
  // 可选，地图范围
  "bounds": {
    "west": 140.633011765174,
    "south": 70.06446685647148,
    "east": 73.8138337900829,
    "north": 80.58786997831027
  },
  // 可选，地图坐标参考系统
  "crs": {
    "epsg": "EPSG:4326"
  },
  // 可选，地图图层列表
  "layers": [
    {
      "title": "栅格瓦片",
      "name": "栅格瓦片",
      "key": "栅格瓦片组图层",
      "id": "栅格瓦片组图层",
      "description": "栅格瓦片",
      "info": "栅格瓦片",
      "icon": "icon-group",
      "type": "GroupLayer",
      "children": [{}],
      "layout": {
        "visible": false
      }
    }
  ],
  // 可选，地图数据源
  "sources": {
    "IGServer": {
      "name": "IGServer",
      "type": "VectorTile",
      "url": "http://localhost:6163/igs/rest/mrms/tile/OSM全中国经纬度/{z}/{y}/{x}?type=cpbf&returnError=false",
      "min": 0,
      "max": 24,
      "description": "IGServer矢量瓦片数据源测试案例."
    }
  },
  // 可选，服务集合
  "service": {},

  // 可选，应用logo，默认值为images/app-logo.svg
  "logo": "images/logo.png",
  // 可选，应用标题
  "title": "MapGIS Web Application",
  // 可选，应用副标题
  "subtitle": "A configurable web application",

  //可选. 应用包含的外链列表
  "links": [
    {
      "url": "http://www.smaryun.com",
      "label": "MapGIS Cloud"
    }
  ],

  // 必须，主题
  "theme": {
    // 主题名称，指向themes/name主题
    "name": "launchpad-theme",

    // 可选，系统主题风格，如果不存在，则使用customStyle
    "style": "blue",

    // 可选，自定义主题风格，必须跟style至少存在一个
    "customStyle": {
      "color": "#1890ff",
      "theme": "dark"
    }
  },

  // 地图widgets
  "mapWidgets": {
    // 可选，地图上所有inPanel为true的widget所展示的面板，显示位置根据widget自动计算弹出，
    // 如果不指定，使用系统默认面板MpMapWidgetPanel
    "panel": {
      // 面板组件名
      "component": "MpMapWidgetPanel",
      // 可选，显示模式（single/multi），只有relativeTo为map才有效
      // 如果没有指定，则默认为single
      "mode": "multi"
    },

    // widget
    "widgets": [
      {
        // widgetId，builder时动态生成
        "id": "widget_1",

        // widget标识
        "uri": "widgets/scalebar",

        // 可选，如果没有设置，使用widget目录内图标（manifest.json指向的icon）
        "icon": "",

        // 可选，如果没有设置，使用widget名称（manifest.json指向的name）
        "label": "",

        // 可选，widget位置，如果没有设置，默认是相对于map的left=0，top=0
        "position": {
          // 可选，widget位置锚点，默认值为top-left，可以设置为top-right、top-left、bottom-right、bottom-left、top-center、center-right、bottom-center、center-left、center-center
          "anchor": "top-left",
          // 可选，widget水平和垂直方向偏移,默认值为0
          "horizontalOffset": 0,
          "verticalOffset": 0
        },

        // 可选，如果没有设置，默认指向widget配置config.json（只要manifest.json的hasConfig为true）
        // 如果设置为字符串，表示自定义的config的位置，例："config": "configs/Scalebar/config.json"
        // 如果设置为对象，表示本widget实际的配置参数
        "config": {},

        // 可选，表示是否在应用启动的时候打开该widget，默认值为false
        // 只有对于能够在面板中展示的widget有效
        // 如果有多个在地图上的widget设置为true，只有第一个有效
        // 如果有多个在内容区域中的widget设置为true，由内容区域决定如何去打开
        "openAtStart": true,

        // 可选，表示能否在设计器中进行位置调整，默认为true
        // 对于某些widget，只能在固定位置，需要设置为false
        "dragable": false,

        // 可选，表示是否可见，默认为true，可以通过设置其为false，来进行隐藏
        "visible": false,

        // 可选，表示是否是占位微件，默认为false，占位微件一般在主题布局中定义，在搭建时进行定义
        "placeholder": true
      }
    ]
  },

  // 内容widgets，由布局的内容区域去使用
  "contentWidgets": {
    // 内容widgets分为多组，每组对应布局中的一个内容区域（主题manifest.json中的contents）
    "groups": [
      {
        // 组名
        "content": "launch",
        // 该内容区域包含的widget集合，可以有多个，因为内容区域中的widget只要inPanel为true，
        // 就会放到面板中显示，所以不需要指定position
        "widgets": [
          {
            // widgetId，builder时动态生成
            "id": "widget_2",

            // widget标识
            "uri": "widgets/scalebar",

            // 可选，如果没有设置，使用widget目录内图标（manifest.json指向的icon）
            "icon": "",

            // 可选，如果没有设置，使用widget名称（manifest.json指向的name）
            "label": ""
          }
        ],

        // 可选，定义widget结构，用于分类，形成菜单或扩展项
        "widgetStructure": [
          {
            "id": "widget_2"
          },
          {
            "id": "folder_1",

            // 可选，类型：folder，默认为widget
            "type": "folder",

            // 图标
            "icon": "",

            // 名称
            "label": "",

            // 子widgets
            "children": [
              {
                "id": "widget_3"
              },
              {
                "id": "folder_1_1",
                "type": "folder",
                "icon": "",
                "label": "",

                "children": [
                  {
                    "id": "widget_4"
                  }
                ]
              }
            ]
          }
        ],

        // 可选，该内容区域widgets中所有inPanel为true的widget所展示的面板
        // 如果没有指定，则使用系统默认模板MpContentWidgetPanel
        "panel": {
          // 面板组件名
          "component": "MpContentWidgetPanel",
          // 可选，指定弹出面板相对的元素（map/content）
          // 如果没有指定，则默认相对于map
          "relativeTo": "content",
          // 可选，显示模式（single/multi），只有relativeTo为map才有效
          // 如果没有指定，则默认为single
          "mode": "multi",
          // 可选，面板弹出位置，只有relativeTo为map才有效
          "position": {
            // 可选，面板位置锚点，默认值为top-right，可以设置为top-right、top-left、bottom-right、bottom-left、top-center、center-right、bottom-center、center-left、center-center
            "anchor": "top-right",
            // 可选，面板水平和垂直方向偏移,默认值为0（单位：像素）
            "horizontalOffset": 0,
            "verticalOffset": 0,
            // 可选，相对于主视图顶的距离，默认值为0（单位：像素），当height没有指定，且anchor为'bottom-left', 'bottom-right', 'bottom-center'时生效
            "top": 0,
            // 可选，相对于主视图底的距离，默认值为0（单位：像素），当height没有指定，且anchor为'top-left', 'top-right', 'top-center'时生效
            "bottom": 0
          },
          // 可选，面板样式
          "styles": {
            // 可选，是否展开，当position.anchor为top-center、bottom-center、center-left、center-right、center-center时生效
            "expand": false,
            // 可选，面板内容宽度，如果没有传，可设置最小宽度和最大宽度并由内容自适应
            "width": 240,
            // 可选，面板内容高度，如果没有传，查看是否有top或bottom，如果有，将根据距离进行自适应，如果也没有，可设置最小高度和最大高度并由内容自适应
            "height": 480,
            // 可选，面板默认最小内容宽度，默认值240（单位：像素）
            "minWidth": 240,
            // 可选，面板默认最大内容宽度，默认值为100%，只支持像素单位设置
            "maxWidth": 240,
            // 可选，面板默认最小内容宽度，默认值48（单位：像素）
            "minHeight": 48,
            // 可选，面板默认最大内容宽度，默认值为100%，只支持像素单位设置
            "maxHeight": 48
          }
        }
      }
    ]
  }
}
```
