# 主题

主题是一个用户界面元素集合，它定义了 App 的外观，布局，app 导航，和 map 上基础 UI 组件（比如：比例尺、鹰眼图等）。
通过主题，可以打造个性化的应用界面、用户交互体验、和品牌样式。
主题元素主要包括：widget panel、style、布局。

<div style="width:100px">主题元素</div> | 定义
---|---
Panel | Panel是展示widget内容的UI窗口。可以定制特定主题上，具有特殊功能和样式的Panel。比如：你可以开发一个可以在屏幕上随意拖动，并且拥有紫色主题样式的Panel。通过主题Panel，widget开发者可以集中在开发widget内部功能，而不用担心widget怎么展示。一个主题可以包含多个Panels。
样式 | 一个主题可以包含多个样式。
布局 | 本质上来说，布局是一种规定UI元素在屏幕上的位置的app配置。

## 主题 manifest

```javascript
{
  // theme的名称
  "name": "全空间一张图经典主题",
  // theme的作者
  "author": "MapGIS",
  // theme的描述
  "description": "",
  // theme的组件名
  "component": "MpPanSpatialMapClassicTheme",

  // theme的样式集合
  "styles": [
    {
      // 样式名称
      "name": "dust-red",
      // 样式描述
      "description": "薄暮",
      // 主题颜色
      "color": "#f5222d",
      // 主题，描述布局、模式等
      "theme": "dark"
    },
    {
      "name": "volcano",
      "description": "火山",
      "color": "#fa541c",
      "theme": "dark"
    },
    {
      "name": "sunrise-yellow",
      "description": "日出",
      "color": "#fadb14",
      "theme": "dark"
    },
    {
      "name": "polar-green",
      "description": "极光绿",
      "color": "#3eaf7c",
      "theme": "dark"
    },
    {
      "name": "cyan",
      "description": "明青",
      "color": "#13c2c2",
      "theme": "dark"
    },
    {
      "name": "daybreak-blue",
      "description": "拂晓蓝",
      "color": "#1890ff",
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
      "name": "header",
      // 描述
      "description": "头部导航条",
      // 组件名称
      "component": "MpPanSpatialMapClassicHeader"
    },
    {
      "name": "toolbar",
      "description": "工具条",
      "component": "MpPanSpatialMapClassicToolbar",
      // widget最大数目，如果未设置，数目不限制
      "maxWidgets": 6
    },
    {
      "name": "left",
      "description": "左侧导航条",
      "component": "MpPanSpatialMapClassicLeft"
    },
    {
      "name": "footer",
      "description": "底部展示区域",
      "component": "MpPanSpatialMapFooter"
    }
  ]
}
```

## 主题样式

定义样式名称、描述和背景、字体。其中 color 指向主题颜色， theme 指向主题风格，这里的样式 name，会在 App 的配置 config.json 中用到。

## 主题内容区域

一个主题布局内部可能有多个内容区域，每个内容区域都可以放置多个 widget，来进行导航，可设置最大的 widget 数目，内容区域与在 App 的配置 app.json 中 contentWidgets.groups 下同名的组对应。

```javascript
// 比如manifest定义的content为launch，它将会对contentWidgets.groups下content名为launch的组提供导航能力
// themes/launchpad-theme/manifest.json
{
  ...
  "contents": [
    {
      // 对应的组名
      "name": "toolbar",
    }
  ]
  ...
}
```

```javascript
// 应用app.json
{
  ...
  // 内容widgets，由布局的内容区域去使用
  "contentWidgets": {
  // 内容widgets分为多组，每组对应布局中的一个内容区域（主题manifest.json中的contents）
    "groups": [
      {
        // 组名
        "content": "toolbar",
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

## 布局

布局是一个模板配置文件。虽然它和 app 的 config 文件使用一样的格式，但是它只是一个子集。

在布局中，使用 URI 和位置属性来定义 mapWidgets，使用 URL 来定义 contentWidgets。

那些只包含位置属性且定义了 placeholder 为 true 的 widget 被叫做占位空间，当配置的时候它允许加入一个 widget。

- **mapWidgets**: 地图 widgets，都是相对于 map 的，可以定义占位空间，对于 off-panel，设计器可以设置 visible，可以进行拖动（只要 dragble 不为 false）。
- **contentWidgets**：内容 widgets，用来供页面导航使用，加入的 widget 必须以 group 的形式存在，添加到布局的 content 中。

```javascript
{
  "mapWidgets": {
    "widgets": [
      // 默认该主题布局配置了地图模式切换按钮，在地图容器的左下角，距离左边10px，距离下边36px
      {
        "uri": "widgets/map-mode-picker",
        "position": {
          "anchor": "bottom-left",
          "horizontalOffset": 10,
          "verticalOffset": 36
        }
      },
      // 默认该主题布局配置了缩放按钮，在地图容器的左下角，距离左边10px，距离下边78px
      {
        "uri": "widgets/zoom",
        "position": {
          "anchor": "bottom-left",
          "horizontalOffset": 10,
          "verticalOffset": 78
        }
      },
      // 默认该主题布局配置了比例尺，在地图容器的右下角
      {
        "uri": "widgets/legend",
        "position": {
          "anchor": "bottom-right",
          "horizontalOffset": 10,
          "verticalOffset": 0
        }
      },
      // 默认该主题布局配置了综合查询，在地图容器的左下角
      {
        "uri": "widgets/comprehensive-query",
        "position": {
          "anchor": "top-left",
          "horizontalOffset": 10,
          "verticalOffset": 10
        }
      },
      // 下面5个是占位空间
      {
        "position": {
          "anchor": "top-left",
          "horizontalOffset": 10,
          "verticalOffset": 52
        },
        "placeholder": true
      },
      {
        "position": {
          "anchor": "top-left",
          "horizontalOffset": 52,
          "verticalOffset": 52
        },
        "placeholder": true
      },
      {
        "position": {
          "anchor": "top-left",
          "horizontalOffset": 94,
          "verticalOffset": 52
        },
        "placeholder": true
      },
      {
        "position": {
          "anchor": "top-left",
          "horizontalOffset": 136,
          "verticalOffset": 52
        },
        "placeholder": true
      },
      {
        "position": {
          "anchor": "top-left",
          "horizontalOffset": 178,
          "verticalOffset": 52
        },
        "placeholder": true
      }
    ]
  },

  "contentWidgets": {
    "groups": [
      {
        "content": "header",
        "widgets": []
      },
      {
        "content": "left",
        "widgets": [],
        "panel": {
          "relativeTo": "content"
        }
      },
      {
        "content": "toolbar",
        "widgets": []
      }
    ]
  }
}

```
