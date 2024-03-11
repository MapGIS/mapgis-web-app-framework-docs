# ExhibitionMixin

展示面板混入。

## data

| 参数               | 说明                   | 类型    | 可选值 | 默认值 | 版本 |
| ------------------ | ---------------------- | ------- | ------ | ------ | ---- |
| isExhibitionActive | 展示面板是否为激活状态 | boolean |        | true   |      |

## methods

### resizeExhibition

- **描述**：调整展示大小，由展示面板调用

### activateExhibition

- **描述**：激活展示，由展示面板调用

### deActivateExhibition

- **描述**：不激活展示，由展示面板调用

### closeExhibition

- **描述**：关闭展示，由展示面板调用

### onResize

- **描述**：大小调整时，展示组件内部响应

### onActive

- **描述**：激活时，展示组件内部响应

### onDeActive

- **描述**：不激活时，展示组件内部响应

### onClose

- **描述**：关闭时，展示组件内部响应
