# ProjectionTransformationUtil

## projectPoints

- **类型** `Function`
- **详细** 坐标投影
- **参数**

| 参数       | 说明                                          | 类型       | 默认值 |
| ---------- | --------------------------------------------- | ---------- | ------ |
| points     | 点坐标集                                      | number[][] | -      |
| originSrs  | 源参考系                                      | string     | -      |
| destSrs    | 目标参考系(默认使用基础配置的 projectionName) | string     | -      |
| ip         | 服务 IP (默认使用基础配置的 ip)               | string     | -      |
| port       | 服务 Port (默认使用基础配置的 port)           | string     | -      |
| serverName | 服务名(默认使用基础配置的 serverName)         | string     | -      |
| gdbName    | gdbp 地址(默认使用基础配置的 gdbName)         | number     | -      |
| userName   | 服务用户名(默认使用基础配置的 userName)       | number     | -      |
| password   | 服务用户密码(默认使用基础配置的 password)     | number     | -      |

```js
import { ProjectionTransformationUtil } from '@mapgis/web-app-framework'

const { data } = await ProjectionTransformationUtil.projectPoints(
  [[Number(xTemp), Number(yTemp)]],
  this.crs,
  this.defaultCrs
)
```
