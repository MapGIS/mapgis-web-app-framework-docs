# 展示

在应用中，我们会有一些将内容固定展示在某处的需求，比如查询的结果、分析的结果或者其他任意你想要查看的内容，这里我们提供了一个通用的展示面板，专门用来展示各类信息。

## 核心概念

### 展示

展示 IExhibition 是一个名词，表示一块需要显示的内容，展示由`唯一标识`、`名称`、`描述`和`展示组件`构成。

```js
export interface IExhibition {
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

你可以定义自己的展示，增加更多信息。在这里，我们默认提供了属性表展示 IAttributeTableExhibition 和属性表列表展示 IAttributeTableListExhibition，他们都进行了扩展，拥有自己的选项 IAttributeTableOption。

```js
export interface IFields {
  // 名称
  name: string
  // 可见性
  visible: boolean
  // 标题
  title: string
}

export interface IAttributeTableOption {
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

export interface IAttributeTableExhibition extends IExhibition {
  // 选项
  option: IAttributeTableOption
}

export interface IAttributeTableListExhibition extends IExhibition {
  // 选项
  options: IAttributeTableOption[]
}
```

ExhibitionList 可以统一管理所有的展示，默认只有一个展示处于激活状态。

```js
// 展示列表
export class ExhibitionList {
  // 展示列表
  exhibitions: IExhibition[] = []

  // 激活的展示 Id
  activeExhibitionId = ''

  /**
   * @description 添加展示
   * @param exhibition 要添加的展示
   * @returns
   */
  addExhibition(exhibition: IExhibition) {
    if (this.exhibitions.length > 0) {
      const index = this.exhibitions.findIndex(
        (item) => item.id === exhibition.id
      )
      if (index > -1) {
        // 已经存在相同id的展示，进行替换
        this.exhibitions.splice(index, 1, exhibition)
        this.activeExhibitionId = exhibition.id as string
        return
      }
    }

    this.exhibitions.push(exhibition)
    this.activeExhibitionId = this.exhibitions[this.exhibitions.length - 1]
      .id as string
  }

  /**
   * @description 移除展示
   * @param exhibitionId 要移除的展示id
   */
  removeExhibition(exhibitionId: string) {
    let isLastExhibition = false
    const index = this.exhibitions.findIndex((item) => {
      return item.id === exhibitionId
    })

    if (index > -1) {
      isLastExhibition = index === this.exhibitions.length - 1

      this.exhibitions.splice(index, 1)

      if (this.exhibitions.length > 0) {
        if (this.activeExhibitionId === exhibitionId) {
          if (isLastExhibition) {
            // 被删除的是最后一个激活的，仍旧设置最后一个为激活
            this.activeExhibitionId = this.exhibitions[
              this.exhibitions.length - 1
            ].id as string
          } else {
            // 被删除的不是最后一个激活的，直接设置下一个为激活
            this.activeExhibitionId = this.exhibitions[index].id as string
          }
        }
      } else {
        this.activeExhibitionId = ''
      }
    }
  }
}

// 展示列表
export default new ExhibitionList()
```

为了更方便地跟展示面板交互，处理来自展示面板的相应，提供了[ExhibitionMixin](/zh/components/mixin/exhibition-mixin.html)供展示使用。

### 展示控制器

展示控制器用来管理展示，当我们需要将展示在展示面板中呈现时，就需要借助展示控制器来进行实现，只需要混入[ExhibitionControllerMixin](/zh/components/mixin/exhibition-controller-mixin.html)，进行[展示的添加](/zh/components/mixin/exhibition-controller-mixin.html#addexhibition)和[展示面板的打开](/zh/components/mixin/exhibition-controller-mixin.html#openexhibitionpanel)就能看到我们想要的内容。

### 关系

<img :src="$withBase('/images/exhibition.png')" alt="展示关系">

## 如何使用

### 定义自己的展示

实现 IExhibition 接口。

### 定义自己的展示组件

展示组件，需要混入[ExhibitionMixin](/zh/components/mixin/exhibition-mixin.html)，并拥有属性`exhibition`，展示面板在创建展示组件时，会传入这个关联的展示对象。

### 呈现展示

要添加展示的组件，需要混入[ExhibitionControllerMixin](/zh/components/mixin/exhibition-controller-mixin.html)，然后 addExhibition 和 openExhibitionPanel。

下面是查看属性和查询展示的示例代码：

```js
const { ip, port, docName } = parent._parseUrl(parent.url)
const exhibition: IAttributeTableExhibition = {
  id: `${parent.title} ${layer.title} ${layer.id}`,
  name: `${layer.title} 属性表`,
  description: `${parent.title} ${layer.title}`,
  option: {
    id: layer.id,
    name: layer.title,
    ip: ip || baseConfigInstance.config.ip,
    port: Number(port || baseConfigInstance.config.port),
    serverType: parent.type,
    layerIndex: layer.id,
    serverName: docName,
    serverUrl: parent.url
  }
}

this.addExhibition(new AttributeTableExhibition(exhibition))
this.openExhibitionPanel()
```

```js
const exhibition: IAttributeTableListExhibition = {
  id: `${mapData.id}`,
  name: `${mapData.title} 查询结果`,
  description: '',
  options: []
}

const subLayers = mapData.allSublayers
subLayers.forEach(layer => {
  if (!layer.visible) {
    return
  }
  exhibition.options.push({
    id: layer.id,
    name: layer.title,
    ip: ip || baseConfigInstance.config.ip,
    port: Number(port || baseConfigInstance.config.port),
    serverType: mapData.type,
    layerIndex: layer.id,
    serverName: docName,
    serverUrl: mapData.url,
    geometry: geo
  })
})

this.addExhibition(new AttributeTableListExhibition(exhibition))
this.openExhibitionPanel()
```
