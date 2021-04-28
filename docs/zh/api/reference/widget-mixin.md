# WidgetMixin

继承自 [WidgetInfoMixin](/zh/api/reference/widget-info-mixin.html) 和 [MapMixin](/zh/api/reference/map-mixin.html)，微件混入，提供微件的状态管理功能。

## events

### update-widget-state

- **参数**：
  - `{Object} widget` 更新状态的微件。
  - `{string} newState` 新状态。
  - `{string} oldState` 旧状态。
- **使用说明**：

微件状态变化后，发出`update-widget-state`事件，可在面板中进行响应或继续转发，其中 newState 和 oldState 可以与 WidgetState 进行比较。

## methods

### onOpen

- **类型**：`Function`
- **详细**：微件打开时。

### onClose

- **类型**：`Function`
- **详细**：微件关闭时。

### onActive

- **类型**：`Function`
- **详细**：微件激活时。

### onDeActive

- **类型**：`Function`
- **详细**：微件不激活时。

### onResize

- **类型**：`Function`
- **参数**：
  - `{number} width` 窗口宽度。
  - `{number} height` 窗口高度。
- **详细**：微件大小被手动调整时，如果微件所在的面板不支持大小调整，则不会响应，如果不支持高度调整，则高度为 undefined。

### onWindowSize

- **类型**：`Function`
- **参数**：
  - `{string} mode` 窗口模式。
- **详细**：微件切换最大和常规模式时，`max`：最大化；`normal`：常规，如果微件所在的面板不支持窗口模式切换，则不会响应。
