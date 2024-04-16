# AppManager

应用管理，负责应用的加载。

```js
import { AppManager } from '@mapgis/web-app-framework'
```

## getInstance

- **描述**：获取全局单例

```js
AppManager.getInstance()
```

## loadConfig

- **类型** `Function`
- **描述**：异步加载配置。
- **参数**

  | 参数          | 描述                       | 类型   | 默认值 |
  | :------------ | :------------------------- | :----- | :----- |
  | baseAPI       | API 基地址                 | string | -      |
  | appConfigPath | 应用配置相对于基地址的 url | string | -      |
  | appAssetsPath | 应用资源相对于基地址的 url | string | -      |
  | request       | axios 实例                 | object | -      |
  | publicPath    | 部署应用包的是基本 URL     | string | -      |

```js
await AppManager.getInstance().loadConfig(
  window._CONFIG['domainURL'],
  `${
    window._CONFIG['apiPathServicesPrefix']
  }/system/AppResourceServer/app/config`,
  `${window._CONFIG['apiPathServicesPrefix']}/system/AppResourceServer/`,
  request,
  process.env.VUE_APP_CONTEXT_PATH
)
this.application = AppManager.getInstance().getApplication()
```

## getApplication

- **类型** `Function`
- **描述**：返回加载后的应用对象。
- **返回值**：应用对象。

## getAppConfig

- **类型** `Function`
- **描述**：返回应用配置。
- **返回值**：[应用配置](/zh/config/app.html)。

## getRequest

- **类型** `Function`
- **描述**：返回基于 `baseAPI` 的请求对象。
- **返回值**：请求对象（axios）。

## saveConfig

- **类型** `Function`
- **详细** 保存[公共配置](https://osmapgis.gitee.io/mapgis-pan-spatial-map-docs/zh/config/common/base.html)。目前公共配置有：基础配置、行政区划配置、图幅号配置。
- **参数**

  | 参数 | 说明             | 类型   | 默认值 |
  | ---- | ---------------- | ------ | ------ |
  | data | 要保存的配置信息 | object | -      |

```js
api
  .saveConfig({
    name: 'base',
    config: config
  })
  .then(() => {
    console.log('更新基础配置成功')
  })
  .catch(() => {
    console.log('更新基础配置失败')
  })
```
