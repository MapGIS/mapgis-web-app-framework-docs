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
