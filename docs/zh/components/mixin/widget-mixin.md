# WidgetMixin

继承自 [WidgetInfoMixin](/zh/components/mixin/widget-info-mixin.html) 和 [MapMixin](/zh/components/mixin/map-mixin.html)，微件混入，提供微件的状态管理功能。

一般在微件中混入 WidgetMixin，这些微件可以直接使用 MapMixin、WidgetInfoMixin 和 AppMixin 里的属性、方法和钩子函数。比如测量、要素查询等微件。

## events

### update-widget-state

- **参数**

  | 参数     | 描述           | 类型   | 默认值 |
  | :------- | :------------- | :----- | :----- |
  | widget   | 更新状态的微件 | Object | -      |
  | newState | 新状态         | string | -      |
  | oldState | 旧状态         | string | -      |

- **使用说明**：微件状态变化后，发出`update-widget-state`事件，可在面板中进行响应或继续转发，其中 newState 和 oldState 可以与 WidgetState 进行比较。

## methods

### onOpen

- **描述**：微件打开时。

### onClose

- **描述**：微件关闭时。

### onActive

- **描述**：微件激活时。

### onDeActive

- **描述**：微件不激活时。

### onResize

- **描述**：微件大小被手动调整时，如果微件所在的面板不支持大小调整，则不会响应，如果不支持高度调整，则高度为 undefined。
- **参数**

  | 参数   | 描述     | 类型   | 默认值 |
  | :----- | :------- | :----- | :----- |
  | width  | 窗口宽度 | number | -      |
  | height | 窗口高度 | number | -      |

### onWindowSize

- **描述**：微件切换最大和常规模式时，`max`：最大化；`normal`：常规，如果微件所在的面板不支持窗口模式切换，则不会响应。
- **参数**

  | 参数 | 描述     | 类型   | 默认值 |
  | :--- | :------- | :----- | :----- |
  | mode | 窗口模式 | string | -      |
