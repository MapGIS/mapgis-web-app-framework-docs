# ThemeContentMixin

继承自 [AppMixin](/zh/components/mixin/app-mixin.html)，主题内容区域混入，提供内容区域对象、该内容区域微件列表、微件结构、展示版面和微件的图标与名称等功能，并能根据当前地图的模式自动关闭与模式不匹配的微件（比如：某个微件只能在 3D 模式下使用，当切换到 2D 时，会自动关闭）。

## props

| 参数            | 说明               | 类型    | 可选值 | 默认值 | 版本 |
| --------------- | ------------------ | ------- | ------ | ------ | ---- |
| content         | 内容区域名称。     | string  |        |        |      |
| widgets         | 微件列表。         | array   |        |        |      |
| widgetStructure | 微件结构。         | array   |        |        |      |
| panel           | 面板对象。         | object  |        |        |      |
| mapInitialized  | 地图是否初始完毕。 | boolean |        | false  |      |

## computed

| 参数                 | 说明                         | 类型  | 可选值 | 默认值 | 版本 |
| -------------------- | ---------------------------- | ----- | ------ | ------ | ---- |
| widgets2d            | 2D 微件列表。                | array |        |        |      |
| widgets3d            | 3D 微件列表。                | array |        |        |      |
| widgetStructure2d    | 2D 微件结构。                | array |        |        |      |
| widgetStructure3d    | 3D 微件结构。                | array |        |        |      |
| widgetStructureSider | 侧边栏微件结构。比如收藏夹。 | array |        |        |      |

## methods

### getWidgetIcon

- **描述**：获取微件的图标。
- **返回值**：微件的图标。
- **参数**

  | 参数   | 描述     | 类型   | 默认值 |
  | :----- | :------- | :----- | :----- |
  | widget | 微件对象 | Object | -      |

### getWidgetLabel

- **描述**：获取微件的名称。
- **返回值**：微件的名称。
- **参数**

  | 参数   | 描述     | 类型   | 默认值 |
  | :----- | :------- | :----- | :----- |
  | widget | 微件对象 | Object | -      |

### getWidgetProperties

- **描述**：获取微件的属性，来源于 manifest.json 的内容。
- **返回值**：微件的属性。
- **参数**

  | 参数   | 描述     | 类型   | 默认值 |
  | :----- | :------- | :----- | :----- |
  | widget | 微件对象 | Object | -      |

### onUpdateWidgetState

- **描述**：当微件状态更新时触发。
- **参数**

  | 参数 | 描述                                                       | 类型   | 默认值 |
  | :--- | :--------------------------------------------------------- | :----- | :----- |
  | e    | 微件状态更新事件对象，格式为`{widget, newState, oldState}` | Object | -      |

- **用法**：可重写该方法，实现对微件状态更新的监听，然后在组件内进行一些显示样式的同步，比如微件打开后，将按钮高亮，微件被关闭后，将按钮取消高亮。
- **示例**

```js
onUpdateWidgetState({ widget, newState, oldState }) {
  if (newState !== WidgetState.CLOSED) {
    this.selectWidgetId = widget.id
  } else {
    if (this.selectWidgetId == widget.id) {
      this.selectWidgetId = ''
    }
  }
}
```
