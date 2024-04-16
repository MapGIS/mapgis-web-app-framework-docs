# 展示模型

支持自定义展示面板里的内容，可参考@mapgis/mapgis-pan-spatial-map-widgets 里的 [AttributeTable.vue](https://gitee.com/osmapgis/MapGIS-Pan-Spatial-Map-Widgets/blob/10.6.8.10/src/components/AttributeTable/AttributeTable.vue)

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
  // 气泡框配置信息
  popupOption?: any
}
```

## IAttributeTableOption

```js
{
  // 唯一标识
  id?: string
  // 名称
  name: string
  // dataStore库名
  libName?: string
  // 是否是大数据查询
  isDataStoreQuery?: boolean
  // 是否是大数据查询
  DNSName?: string
  // 服务域名
  domain?: string
  // 服务IP
  ip?: string
  // 服务PORT
  port?: number
  // 服务类型
  serverType?: string
  // 服务名称
  serverName?: string
  // 搜索服务类型
  searchServiceType?: string
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
  // 查询结果类型
  f?: string
  // 是否是绑定二维地图文档的三维服务
  is3dBind2dData?: boolean
}
```

```js
/**
 * 查看属性
 */
async attributes(layer,parent) {
  const exhibition = { // 对应IExhibition
    id: `${parent.title} ${layer.title} ${layer.id}`,
    name: `${layer.title} 属性表`,
    description: `${parent.title} ${layer.title}`,
    option: { // 对应IAttributeTableOption
      id: layer.id,
      name: layer.title,
      isDataStoreQuery,
      DNSName,
      domain,
      ...ipPortObj,
      serverType: parent.type,
      layerIndex: layer.id,
      gdbp: layer.url,
      serverName: docName,
      serverUrl: parent.url,
      f: '',
    },
    popupOption: parent.extend?.popupOption,
  }
  if (exhibition) {
    this.addExhibition(new AttributeTableExhibition(exhibition))
    this.openExhibitionPanel()
  }
},
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
