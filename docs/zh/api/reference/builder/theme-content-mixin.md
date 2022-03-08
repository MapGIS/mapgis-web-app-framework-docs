# ThemeContentMixin

继承自 [AppMixin](/zh/api/reference/app-mixin.html)，主题内容区域混入，提供内容区域对象、该内容区域微件列表、微件结构、展示版面和微件的图标与名称等功能，并能根据当前地图的模式自动关闭与模式不匹配的微件（比如：某个微件只能在 3D 模式下使用，当切换到 2D 时，会自动关闭）。

## props

### content

- **类型**：`string`
- **详细**：内容区域名称。

### widgets

- **类型**：`Array<Object>`
- **详细**：微件列表。

### widgetStructure

- **类型**：`Array<Object>`
- **详细**：微件结构。

### panel

- **类型**：`Object`
- **详细**：面板对象。

### mapInitialized

- **类型**：`boolean`
- **默认值**：`false`
- **详细**：地图是否初始完毕。
- **用法**：

可根据地图初始的情况做一些额外的工作。

## computed

### widgets2d

- **类型**：`Array<Object>`
- **详细**：2D 微件列表。

### widgets3d

- **类型**：`Array<Object>`
- **详细**：3D 微件列表。

### widgetStructure2d

- **类型**：`Array<Object>`
- **详细**：2D 微件结构。

### widgetStructure3d

- **类型**：`Array<Object>`
- **详细**：3D 微件结构。

## methods

### getWidgetIcon

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件对象。
- **返回值**：微件的图标。
- **详细**：获取微件的图标。

### getWidgetLabel

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件对象。
- **返回值**：微件的名称。
- **详细**：获取微件的名称。

### getWidgetProperties

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件对象。
- **返回值**：微件的属性。
- **详细**：获取微件的属性，来源于 manifest.json 的内容。

### onUpdateWidgetState

- **类型**：`Function`
- **参数**：
  - `{Object} e` 微件状态更新事件对象，格式为`{widget, newState, oldState}`。
- **详细**：当微件状态更新时触发。
- **用法**：

可重写该方法，实现对微件状态更新的监听，然后在组件内进行一些显示样式的同步，比如微件打开后，将按钮高亮，微件被关闭后，将按钮取消高亮。

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
