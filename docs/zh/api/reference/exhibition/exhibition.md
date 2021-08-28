# 展示模型

## IFields

```js
{
  // 名称
  name: string
  // 可见性
  visible: boolean
  // 标题
  title: string
}
```

## IExhibition

```js
{
  // 唯一标识
  id?: string
  // 名称
  name: string
  // 描述
  description?: string
  // 全局组件名
  component?: string
}
```

## IAttributeTableOption

```js
{
  // 唯一标识
  id?: string
  // 名称
  name: string
  // 服务IP
  ip?: string
  // 服务PORT
  port?: number
  // 服务类型
  serverType?: string
  // 服务名称
  serverName?: string
  // 服务路径
  serverUrl?: string
  // gdbp地址，图层查询
  gdbp?: string
  // 图层索引，文档查询
  layerIndex?: string
  // 初始查询条件
  where?: string
  // 查询集合
  geometry?: Record<string, unknown>
  // 字段信息
  fields?: IFields[]
}
```

## IAttributeTableExhibition

```js
interface IAttributeTableExhibition extends IExhibition {
  // 选项
  option: IAttributeTableOption;
}
```

## IAttributeTableListExhibition

```js
// 选项
options: IAttributeTableOption[]
```

## AttributeTableExhibition

```js
class AttributeTableExhibition implements IAttributeTableExhibition
```

## AttributeTableListExhibition

```js
class AttributeTableListExhibition implements IAttributeTableListExhibition
```

## ExhibitionList

### exhibitions

- **类型**：`Object`
- **详细**：展示列表

### activeExhibitionId

- **类型**：`Object`
- **详细**：激活的展示 Id

### addExhibition

- **类型**：`Function`
- **详细**：添加展示

### removeExhibition

- **类型**：`Function`
- **详细**：根据展示 Id 移除展示
