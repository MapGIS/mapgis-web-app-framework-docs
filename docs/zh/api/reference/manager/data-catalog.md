# dataCatalogManagerInstance

dataCatalogManagerInstance 是 DataCatalogManager 的实例。

```js
import {
  dataCatalogManagerInstance,
  DataCatalogManager
} from '@mapgis/web-app-framework'
```

## getLayerConfigByID

- **类型** `Function`
- **详细** 根据节点的 id 获取对应的服务图层配置信息
- **参数**

  | 参数 | 说明                    | 类型   | 默认值 |
  | ---- | ----------------------- | ------ | ------ |
  | id   | 数据目录配置项中的 guid | string | -      |

- **用法**

```js
const layerConfig = dataCatalogManagerInstance.getLayerConfigByID(layer.id)
```

## generateLayerByConfig

- **类型** `Function`
- **详细** 静态方法，根据数据目录中图层节点的配置信息生成图层对象
- **参数**

  | 参数        | 说明         | 类型 | 默认值 |
  | ----------- | ------------ | ---- | ------ |
  | layerConfig | 图层配置信息 | any  | -      |

- **用法**

```js
const layer = DataCatalogManager.generateLayerByConfig(layerConfig)
// 或
const layer = dataCatalogManagerInstance.generateLayerByConfig(layerConfig)
```

## init

- **类型** `Function`
- **详细** 通过配置初始化管理对象
- **参数**

  | 参数              | 说明             | 类型 | 默认值 |
  | ----------------- | ---------------- | ---- | ------ |
  | dataCatalogConfig | 数据目录配置信息 | any  | -      |

- **用法**

```js
const config = await api.getWidgetConfig('data-catalog')
const appConfig = await AppManager.getInstance().getRequest()({
  url: this.application.appConfigPath,
  method: 'get'
})
// 使用新的app.json中的规范，判断this.application.data是否有且有值就替换this.widgetInfo.config.treeConfig.treeData
if (appConfig.data && appConfig.data.length > 0) {
  config.treeConfig.treeData = appConfig.data
}
dataCatalogManagerInstance.init(config)
```

## update

- **类型** `Function`
- **详细** 更新数据目录。数据目录有过滤功能,会过滤掉不可用配置项。当服务更新后,可通过该接口更新数据目录。

## getLayerConfigByName

- **类型** `Function`
- **详细** 根据节点的 name 获取对应的服务图层配置信息
- **参数**

  | 参数 | 说明                    | 类型   | 默认值 |
  | ---- | ----------------------- | ------ | ------ |
  | name | 数据目录配置项中的 name | string | -      |

- **用法**

```js
const layerConfig = dataCatalogManagerInstance.getLayerConfigByName(layer.name)
```

## getLayerConfigByServerUrlAndType

- **类型** `Function`
- **详细** 根据节点的 serverUrl 和 serverType 获取对应的服务图层配置信息
- **参数**

  | 参数 | 说明                                  | 类型   | 默认值 |
  | ---- | ------------------------------------- | ------ | ------ |
  | url  | 数据目录配置项中的 serverURL          | string | -      |
  | type | 数据目录配置项中的 serverType(需转化) | string | -      |

- **用法**

```js
private dataCatalogManager = dataCatalogManagerInstance

const node = this.dataCatalogManager.getLayerConfigByServerUrlAndType(url,type)
```

## getLayerConfigByServerNameAndType

- **类型** `Function`
- **详细** 根据节点的 serverName 和 serverType 获取对应的服务图层配置信息
- **参数**

  | 参数       | 说明                                  | 类型   | 默认值 |
  | ---------- | ------------------------------------- | ------ | ------ |
  | serverName | 数据目录配置项中的 serverName         | string | -      |
  | type       | 数据目录配置项中的 serverType(需转化) | string | -      |

- **用法**

```js
private dataCatalogManager = dataCatalogManagerInstance

const node = this.dataCatalogManager.getLayerConfigByServerNameAndType(serverName,type)
```

## hasRepeatedService

- **类型** `Function`
- **详细** 判断添加的数据是否在目录树中已存在
- **参数**

  | 参数 | 说明                     | 类型   | 默认值 |
  | ---- | ------------------------ | ------ | ------ |
  | data | 服务添加微件中添加的数据 | string | -      |

- **用法**

```js
private dataCatalogManager = dataCatalogManagerInstance

const hasRepeatedService = this.dataCatalogManager.hasRepeatedService(data)
```

## getDataCatalogTreeData

- **类型** `Function`
- **详细** 获取处理过的数据目录信息
- **用法**

```js
dataCatalogManagerInstance
  .getDataCatalogTreeData()
  .then(result => {
    this.catalogTreeData = this.handleCatalog(_cloneDeep(result))
    this.loading = false
  })
  .catch(() => {
    this.loading = false
  })
```
