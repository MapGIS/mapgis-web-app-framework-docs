# 展示

在应用中，我们会有一些将内容固定展示在某处的需求，比如查询的结果、分析的结果或者其他任意你想要查看的内容，这里我们提供了一个通用的展示面板，专门用来展示各类信息。

## 核心概念

### 展示

展示[IExhibition](/zh/api/reference/exhibition/exhibition.html#iexhibition)是一个名词，表示一块需要显示的内容，展示由`唯一标识`、`名称`、`描述`和`展示组件`构成。

你可以定义自己的展示，增加更多信息。在这里，我们默认提供了[属性表展示](/zh/api/reference/exhibition/exhibition.html#iattributetableexhibition)和[属性表列表展示](/zh/api/reference/exhibition/exhibition.html#iattributetablelistexhibition)，他们都进行了扩展，拥有自己的选项[IAttributeTableOption](/zh/api/reference/exhibition/exhibition.html#iattributetableoption)。

[ExhibitionList](/zh/api/reference/exhibition/exhibition.html#exhibitionlist)可以统一管理所有的展示，默认只有一个展示处于激活状态。

为了更方便地跟展示面板交互，处理来自展示面板的相应，提供了[ExhibitionMixin](/zh/api/reference/exhibition-mixin.html#exhibitionmixin)供展示使用。

### 展示控制器

展示控制器用来管理展示，当我们需要将展示在展示面板中呈现时，就需要借助展示控制器来进行实现，只需要混入[ExhibitionControllerMixin](/zh/api/reference/exhibition-controller-mixin.html#exhibitioncontrollermixin)，进行[展示的添加](/zh/api/reference/exhibition-controller-mixin.html#addexhibition)和[展示面板的打开](/zh/api/reference/exhibition-controller-mixin.html#openexhibitionpanel)就能看到我们想要的内容。

### 关系

<img :src="$withBase('/images/exhibition.png')" alt="展示关系">

## 如何使用

### 定义自己的展示

实现[IExhibition](/zh/api/reference/exhibition/exhibition.html#iexhibition)接口。

### 定义自己的展示组件

展示组件，需要混入[ExhibitionMixin](/zh/api/reference/exhibition-mixin.html#exhibitionmixin)，并拥有属性`exhibition`，展示面板在创建展示组件时，会传入这个关联的展示对象。

### 呈现展示

要添加展示的组件，需要混入[ExhibitionControllerMixin](/zh/api/reference/exhibition-controller-mixin.html#exhibitioncontrollermixin)，然后 addExhibition 和 openExhibitionPanel。

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
