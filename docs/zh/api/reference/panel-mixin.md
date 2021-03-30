# PanelMixin

继承自 [AppMixin](/zh/api/reference/app-mixin.html)，面板混入，提供展示的微件集合、模式、位置、微件的状态和可见性控制等功能。

## props

### widgets

- **类型**：`Array<Object>`
- **详细**：微件列表。

### relativeTo

- **类型**：`string`
- **默认值**：`map`
- **详细**：指定弹出面板相对的元素（map/content）。

### mode

- **类型**：`string`
- **默认值**：`single`
- **详细**：显示模式（single/multi），只有 relativeTo 为 map 才有效。

### position

- **类型**：`Object`
- **默认值**：

```js
{
  anchor: 'top-right',
  horizontalOffset: 0,
  verticalOffset: 0,
  top: 0,
  bottom: 0
}
```

- **详细**：

面板弹出位置，只有 relativeTo 为 map 才有效。
可参考 [app.json](/zh/guide/introduction/config.html#app-json)

### styles

- **类型**：`Object`
- **默认值**：

```js
{
  expand: false,
  width: null,
  height: null
}
```

- **详细**：

面板样式。
可参考 [app.json](/zh/guide/introduction/config.html#app-json)

## computed

### widgetsInPanel

- **类型**：`Function`
- **参数**:
  - `{string} rel` 弹出面板相对的元素（map/content），同 relativeTo。
- **用法**

在 template 可按如下方式使用：

```js
v-for="widget in widgetsInPanel()"
或
v-for="widget in widgetsInPanel('content')"
```

### isWidgetActive

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件对象。
- **返回值**：微件是否激活。

### isWidgetVisible

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件对象。
  - `{string} rel` 弹出面板相对的元素（map/content），同 relativeTo。
- **返回值**：微件是否可见。

## methods

### activateWidget

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件对象。
- **详细**：激活微件。

### updateWidgetVisible

- **类型**：`Function`
- **参数**：

  - `{boolean} visible` 可见性。
  - `{Object} widget` 微件对象。

- **详细**：更新微件可见性，当可见性为 false 时，关闭微件
