# eventBus

Vue 事件总线

```
import Vue from 'vue'

export default new Vue()
```

```vue
<template>
  <div></div>
</template>

<script lang="ts">
import {
  LayerType,
  WidgetMixin,
  eventBus,
  events
} from '@mapgis/web-app-framework'

export default {
  name: 'MpBufferAnalysis',
  mixins: [WidgetMixin],

  methods: {
    addNewLayer(XXX) {
      this.resultData = { XXX }
      eventBus.$emit(events.ADD_DATA_EVENT, this.resultData)
    }
  }
}
</script>
```

```js
// 监听事件示例
eventBus.$on(events.ADD_DATA_EVENT, function(resultData) {
  // 添加数据
  console.log(resultData)
})
```

### 内置的事件

### SCENE_LOADED_ON_MAP

- **详细** 三维图层(场景服务、M3D 服务、3DTiles、地形服务、三维标绘服务、KML、CZML)加载完毕事件。
- **参数**

  | 参数    | 说明    | 类型   | 默认值 |
  | ------- | ------- | ------ | ------ |
  | layerId | 图层 ID | string |        |

### PLOT_LAYER_LOADED

- **详细** 标绘图层加载完毕事件。
- **参数**

  | 参数    | 说明    | 类型   | 默认值    |
  | ------- | ------- | ------ | --------- |
  | layerId | 图层 ID | string |           |
  | vueKey  | vueKey  | string | 'default' |

### ADD_DATA_EVENT

- **详细** 添加数据事件。非添加数据微件通过该事件向添加数据微件发送图层服务信息，添加数据微件接收到图层服务信息，可对这些图层服务进行管理，比如将图层服务添加到地图视图，控制图层的显示隐藏，以及编辑和删除图层服务。
- **参数**

  | 参数 | 说明     | 类型   | 默认值 |
  | ---- | -------- | ------ | ------ |
  | data | 数据信息 | object |        |

```js
// 示例1
const highlightStyle = {
  polygon: new FillStyle({
    width: 8,
    color: '#ffff00',
    opacity: 0.8,
    outlineColor: '#ff0000'
  })
}

const featureStyle = new FillStyle({
  color: '#ffff00',
  outlineColor: '#ff0000',
  outlineWidth: 3,
  opacity: 1
})

const data = {
  name: 'GeoJson图层', // 数据分类名
  description: '综合分析_结果图层', // 数据分类描述
  data: {
    name: this.destLayer, // 必须，服务名
    type: 'GeoJson', // 必须，图层类型，可参考 LayerType
    url: this.destLayer, // 必须，服务地址
    source: resultFeature, // 可选，数据源，geojson格式
    featureStyle: featureStyle, // 可选，图层要素样式
    highlightStyle: highlightStyle // 可选，高亮样式
  }
}

// 示例2
const data = {
  name: 'IGS图层',
  description: '功能仓库_结果图层',
  data: {
    type: 'IGSVector',
    url,
    name: `${this.funcParam.FlowName}_${nameStr}`
  }
}
```

### DELETE_DATA_EVENT

- **详细** 删除数据事件。非添加数据微件通过该事件向添加数据微件发送信息，需要删除哪些图层服务，添加数据微件删除对应的图层服务。
- **参数**

  | 参数 | 说明                                  | 类型   | 默认值 |
  | ---- | ------------------------------------- | ------ | ------ |
  | data | 数据信息，同 ADD_DATA_EVENT 里的 data | object |        |

### DATA_SELECTION_CHANGE_EVENT

- **详细** 数据数据目录节点勾选变化事件。
- **参数**

  | 参数            | 说明             | 类型    | 默认值 |
  | --------------- | ---------------- | ------- | ------ |
  | layerConfigNode | 数据目录节点信息 | object  |        |
  | isChecked       | 是否勾选         | boolean |        |

```js
const layerConfigNode = {
  children: undefined,
  dataId: 104,
  description: '湖北省4326',
  disableCheckbox: false,
  extend: {
    // 扩展属性
    checked: false, // 默认是否加载
    legend: '', // 图例
    location: true, // 勾选时是否跳转
    roll: true, // 是否用于卷帘
    selfAdaptio: false // 是否参与地表自动透明
  },
  gdbps: '',
  guid: '104',
  icon: '',
  ip: '192.168.82.91',
  layerProperty: {
    alpha: 100, // 初始透明度
    enableModelStretch: false, // 是否开启模型拉伸
    enableModelSwitch: false, // 是否开启多模态切换
    enablePopup: false, // 是否开启拾取
    fillClip: false, // 是否支持剖切封边
    hasSectionGeometry: false, // 是否有剖切几何
    luminanceAtZenith: 0.2, // 亮度比例
    maximumScreenSpaceError: 16, // 模型精细度
    offset: -2, // 模型拉伸偏移量
    scaleX: 1, // 模型x轴缩放比例
    scaleY: 1, // 模型x轴缩放比例
    scaleZ: 1 // 模型x轴缩放比例
  },
  level: 1,
  name: '湖北省4326',
  opacity: 1,
  port: '8089',
  serverName: 'Map:湖北省4326',
  serverType: 5,
  serverURL: '',
  tokenKey: '',
  tokenValue: ''
}
```

### DATA_CATALOG_SELECT

- **详细** 数据目录点击图层节点。
- **参数**

  | 参数   | 说明                                   | 类型   | 默认值 |
  | ------ | -------------------------------------- | ------ | ------ |
  | params | 数据目录节点对象和勾选状态(true/false) | object |        |

```js
const params = {
  node: layerConfigNode, // 同DATA_SELECTION_CHANGE_EVENT事件的layerConfigNode
  checked
}
```

### DATA_SELECTION_KEYS_CHANGE_EVENT

- **详细** 数据数据目录已勾选节点的 id 集合变化事件。
- **参数**

  | 参数 | 说明                             | 类型  | 默认值 |
  | ---- | -------------------------------- | ----- | ------ |
  | keys | 数据数据目录已勾选节点的 id 集合 | array |        |

### DATA_CATALOG_DATA_INFO

- **详细** 数据目录初始化时将数据目录配置信息传出。
- **参数**

  | 参数                    | 说明                                                                                                             | 类型   | 默认值 |
  | ----------------------- | ---------------------------------------------------------------------------------------------------------------- | ------ | ------ |
  | dataCatalogWidgetConfig | [数据数据目录配置信息](https://osmapgis.gitee.io/mapgis-pan-spatial-map-docs/zh/config/widget/data-catalog.html) | object |        |

### DATA_CATALOG_EXTEND_DATA_CHECK

- **详细** 数据目录勾选图层带有 extend 扩展属性时将数据节点信息传出。
- **参数**

  | 参数            | 说明                                                                   | 类型   | 默认值 |
  | --------------- | ---------------------------------------------------------------------- | ------ | ------ |
  | layerConfigNode | 数据目录节点信息,同 DATA_SELECTION_CHANGE_EVENT 事件的 layerConfigNode | object |        |

### DATA_CATALOG_EXTEND_DATA_UNCHECK

- **详细** 数据目录取消勾选图层带有 extend 扩展属性时将数据节点信息传出。
- **参数**

  | 参数            | 说明                                                                   | 类型   | 默认值 |
  | --------------- | ---------------------------------------------------------------------- | ------ | ------ |
  | layerConfigNode | 数据目录节点信息,同 DATA_SELECTION_CHANGE_EVENT 事件的 layerConfigNode | object |        |

### EXTEND_LAYER_REMOVE

- **详细** 移除扩展图层。非数据目录微件在移除扩展图层后发送该事件，数据目录微件接收该事件，取消勾选对应图层节点。
- **参数**

  | 参数 | 说明         | 类型  | 默认值 |
  | ---- | ------------ | ----- | ------ |
  | ids  | 图层 id 集合 | array |        |

### DATA_CATALOG_CHANGE_NODES

- **详细** 控制数据目录勾选/取消勾选节点，数据目录中会根据勾选/取消勾选节点，将图层添加到地图视图中/从地图视图中移除。
- **参数**

  | 参数      | 说明                       | 类型    | 默认值 |
  | --------- | -------------------------- | ------- | ------ |
  | ids       | 图层 id 集合               | array   |        |
  | isChecked | 勾选(true)/取消勾选(false) | boolean |        |

### UPLOAD_LEGEND_SUCCESS_EVENT

- **详细** 图例上传成功事件，在图例微件中会监听这个事件，然后更新图例显示。

### IMAGE_OPACITY_FACTOR_CHANGE

- **详细** 修改二维图层透明度系数。
- **参数**

  | 参数          | 说明              | 类型   | 默认值 |
  | ------------- | ----------------- | ------ | ------ |
  | opacityFactor | 透明度系数[0,100] | number |        |

### IMAGE_OPACITY_FACTOR_CHANGE

- **详细** 修改模型透明度系数。
- **参数**

  | 参数          | 说明              | 类型   | 默认值 |
  | ------------- | ----------------- | ------ | ------ |
  | opacityFactor | 透明度系数[0,100] | number |        |

### ATTRIBUTE_TABLE_CLICK_ROW

- **详细** 结果集表格单击行。
- **参数**

  | 参数   | 说明                                                                           | 类型   | 默认值 |
  | ------ | ------------------------------------------------------------------------------ | ------ | ------ |
  | params | 主要包含要素信息和[展示面板内容](/zh/api/reference/exhibition/exhibition.html) | object |        |

```js
const params = {
  fid, // 要素id
  feature, // geojson要素
  exhibition: this.exhibition // 展示面板内容
}
```

### ATTRIBUTE_TABLE_DOUBLE_CLICK_ROW

- **详细** 结果集表格双击行。
- **参数** 同 ATTRIBUTE_TABLE_CLICK_ROW 事件的参数

### MARKER_CLICK

- **详细** 标注点击事件。
- **参数**

  | 参数   | 说明                                           | 类型   | 默认值 |
  | ------ | ---------------------------------------------- | ------ | ------ |
  | marker | [标注信息](/zh/components/map/marker-pro.html) | object |        |

### DATA_CATALOG_CHECK_NODES

- **详细** 收藏夹/场景定格查看时勾选数据目录节点。
- **参数**

  | 参数              | 说明                       | 类型   | 默认值 |
  | ----------------- | -------------------------- | ------ | ------ |
  | checkKeys         | 节点 id 集合               | array  |        |
  | checkKeysRelation | 节点 id 与服务地址对应集合 | object |        |

### GET_LAYER_LIST_INFO

- **详细** 收藏夹获取当前图层列表数据。

### SCENE_CONFIG_INFO

- **详细** 收藏夹获取当前场景设置数据。
