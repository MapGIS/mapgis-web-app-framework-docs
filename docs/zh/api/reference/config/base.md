# baseConfigInstance

## config

- **类型** `Object`
- **详细** 获取基本配置

```js
  // 引用
  import { baseConfigInstance } from '@mapgis/web-app-framework'

  // 从微件配置里获取ip
  get ip() {
    return this.widgetInfo.config.ip || baseConfigInstance.config.ip
  }

  // 从微件配置里获取port
  get port() {
    return this.widgetInfo.config.port || baseConfigInstance.config.ip
  }
```
