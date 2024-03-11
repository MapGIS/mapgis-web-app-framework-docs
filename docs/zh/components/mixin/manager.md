# 管理类

## AppManager

应用管理，负责应用的加载。

```js
import { AppManager } from '@mapgis/web-app-framework'
```

### getInstance

- **描述**：获取全局单例

```js
AppManager.getInstance()
```

### loadConfig

- **描述**：异步加载配置。
- **参数**

  | 参数          | 描述                       | 类型   | 默认值 |
  | :------------ | :------------------------- | :----- | :----- |
  | baseAPI       | API 基地址                 | string | -      |
  | appConfigPath | 应用配置相对于基地址的 url | string | -      |
  | appAssetsPath | 应用资源相对于基地址的 url | string | -      |

```js
AppManager.getInstance().loadConfig('', '/config.json', '/')
// 或
AppManager.getInstance().loadConfig('/api', '/config.json', '/')
// 或
AppManager.getInstance().loadConfig(
  'http://localhost:9015',
  '/config.json',
  '/'
)
```

### getApplication

- **描述**：返回加载后的应用对象。
- **返回值**：应用对象。

### getAppConfig

- **描述**：返回应用配置。
- **返回值**：应用配置。

### getRequest

- **描述**：返回基于 `baseAPI` 的请求对象。
- **返回值**：请求对象（axios）。

### saveConfig

- **描述**：保存配置。

## WidgetManager

微件管理，负责微件状态的管理。

```js
import { WidgetManager } from '@mapgis/web-app-framework'
```

### getInstance

- **描述**： 获取全局单例。

```js
WidgetManager.getInstance()
```

### openWidget

- **描述**：打开并激活微件，先设置微件状态为 `OPENED`，再设置微件状态为 `ACTIVE`。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

### activateWidget

- **描述**：激活微件，只处理打开状态下的微件，设置其状态为 `ACTIVE`。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

### deActivateWidget

- **描述**：将激活微件设置为打开状态`OPENED`。

### isWidgetActive

- **描述**：判断微件状态是否为 `ACTIVE`。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

### isWidgetVisible

- **描述**：判断微件状态是否为 `OPENED`。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

### closeWidget

- **描述**：设置微件状态为 `CLOSED`，如果该微件处于激活状态，会先设置其状态为`OPENED`，然后再设置为 `CLOSED`。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

### triggerWidgetOpen

- **描述**：切换微件打开和关闭。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

  ### operateWidget

- **描述**：操作微件。
- **参数**

  | 参数     | 描述              | 类型   | 默认值 |
  | :------- | :---------------- | :----- | :----- |
  | widgets  | 微件集合          | Array  | -      |
  | activeId | 需要激活的微件 ID | string | -      |

## PanelManager

负责展示面板管理。

```js
import { PanelManager } from '@mapgis/web-app-framework'
```

### getInstance

- **描述**： 获取全局单例。

```js
PanelManager.getInstance()
```

### addPanel

- **描述**：添加面板。
- **参数**

  | 参数  | 描述 | 类型   | 默认值 |
  | :---- | :--- | :----- | :----- |
  | panel | 面板 | Object | -      |

### removePanel

- **描述**：移除面板。
- **参数**

  | 参数  | 描述 | 类型   | 默认值 |
  | :---- | :--- | :----- | :----- |
  | panel | 面板 | Object | -      |

  ### getPanels

- **描述**：获取面板集合。
