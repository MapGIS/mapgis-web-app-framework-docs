# 管理类

## AppManager

应用管理，负责应用的加载。

### getInstance

- **类型**：`Function`
- **详细**：获取全局单例
- **用法：**

```js
AppManager.getInstance()
```

### loadConfig

- **类型**：`Function`
- **参数**：
  - `{string} baseAPI` API 基地址。
  - `{string} appConfigPath` 应用配置相对于基地址的 url。
  - `{string} appAssetsPath` 应用资源相对于基地址的 url。
- **详细**：异步加载配置。
- **用法：**

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

- **类型**：`Function`
- **返回值**：应用对象。
- **详细**：

返回加载后的应用对象。

### getRequest

- **类型**：`Function`
- **返回值**：请求对象（axios）。
- **详细**：

返回基于 `baseAPI` 的请求对象。

## WidgetManager

微件管理，负责微件状态的管理，应用全局只有一个微件处于激活状态。

### getInstance

- **类型**：`Function`
- **详细**： 获取全局单例。
- **用法：**

```js
WidgetManager.getInstance()
```

### openWidget

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件。
- **详细**：

打开并激活微件，先设置微件状态为 `OPENED`，再设置微件状态为 `ACTIVE`。

### activateWidget

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件。
- **详细**：

激活微件，只处理打开状态下的微件，设置其状态为 `ACTIVE`。

### deActivateWidget

- **类型**：`Function`
- **详细**：

将激活微件设置为打开状态`OPENED`。

### isWidgetActive

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件。
- **详细**：

判断微件状态是否为 `ACTIVE`。

### isWidgetVisible

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件。
- **详细**：

判断微件状态是否为 `OPENED`。

### closeWidget

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件。
- **详细**：

设置微件状态为 `CLOSED`，如果该微件处于激活状态，会先设置其状态为`OPENED`，然后再设置为 `CLOSED`。

### triggerWidgetOpen

- **类型**：`Function`
- **参数**：
  - `{Object} widget` 微件。
- **详细**：

切换微件打开和关闭。
