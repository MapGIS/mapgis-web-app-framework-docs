# PanelMixin

继承自 [AppMixin](/zh/api/reference/app-mixin.html)，面板混入，提供展示的微件集合、模式、位置、微件的状态和可见性控制等功能。

## props

### widgets

- **类型**：`Array<Object>`
- **描述**：微件列表
- **默认值**：[]。

### relativeTo

- **类型**：`string`
- **描述**：指定弹出面板相对的元素（map/content）。
- **默认值**：`map`

### mode

- **类型**：`string`
- **描述**：显示模式（single/multi），只有 relativeTo 为 map 才有效。
- **默认值**：`single`

### position

- **类型**：`Object`
- **描述**：面板弹出位置，只有 relativeTo 为 map 才有效。可参考 [app.json](/zh/guide/introduction/config.html#app-json)
- **默认值**

```js
{
  anchor: 'top-right',
  horizontalOffset: 0,
  verticalOffset: 0,
  top: 0,
  bottom: 0
}
```

### styles

- **类型**：`Object`
- **描述**：面板样式。可参考 [app.json](/zh/guide/introduction/config.html#app-json)
- **默认值**：

```js
{
  expand: false,
  width: null,
  height: null
}
```

## computed

### widgetsInPanel

- **参数**

  | 参数 | 描述                                             | 类型   | 默认值 |
  | :--- | :----------------------------------------------- | :----- | :----- |
  | rel  | 弹出面板相对的元素（map/content），同 relativeTo | string | -      |

- **用法**
  在 template 可按如下方式使用：

```js
v-for="widget in widgetsInPanel()"
或
v-for="widget in widgetsInPanel('content')"
```

### isWidgetActive

- **返回值**：微件是否激活。
- **参数**

  | 参数   | 描述     | 类型   | 默认值 |
  | :----- | :------- | :----- | :----- |
  | widget | 微件对象 | Object | -      |

### isWidgetVisible

- **返回值**：微件是否可见。
- **参数**

  | 参数   | 描述                                             | 类型   | 默认值 |
  | :----- | :----------------------------------------------- | :----- | :----- |
  | widget | 微件对象                                         | Object | -      |
  | rel    | 弹出面板相对的元素（map/content），同 relativeTo | Object | string |

## methods

### activateWidget

- **描述**：激活微件。
- **参数**

  | 参数   | 描述     | 类型   | 默认值 |
  | :----- | :------- | :----- | :----- |
  | widget | 微件对象 | Object | -      |

### updateWidgetVisible

- **描述**：更新微件可见性，当可见性为 false 时，关闭微件。
- **参数**

  | 参数    | 描述     | 类型    | 默认值 |
  | :------ | :------- | :------ | :----- |
  | visible | 可见性。 | boolean | -      |
  | widget  | 微件对象 | Object  | -      |
