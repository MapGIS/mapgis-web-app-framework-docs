# ExhibitionControllerMixin

展示面板控制器混入。

## data

| 参数           | 说明             | 类型   | 可选值 | 默认值                 | 版本 |
| -------------- | ---------------- | ------ | ------ | ---------------------- | ---- |
| exhibitionList | 展示面板列表对象 | object |        | exhibitionListInstance |      |

## computed

### exhibitions

- **类型**：`Object`
- **描述**：展示列表，只能 get。

### activeExhibitionId

- **类型**：`String`
- **描述**：激活的展示 Id，支持 get 和 set

## methods

### addExhibition

- **描述**：添加展示
- **参数**：展示对象

### removeExhibition

- **描述**：根据展示 Id 移除展示
- **参数**：展示对象 Id

### openExhibitionPanel

- **描述**：打开展示面板

### closeExhibitionPanel

- **描述**：关闭展示面板

### switchExhibitionPanel

- **描述**：切换展示面板打开和关闭
