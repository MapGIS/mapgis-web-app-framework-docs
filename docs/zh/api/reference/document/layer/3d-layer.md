# 三维图层抽像类

## Rectangle3D

三维包围盒

```js
import { Rectangle3D } from '@mapgis/web-app-framework'
const rectangle3D = new Rectangle3D(xmin, ymin, zmin, xmax, ymax, zmax)
```

### getGeometryType

- **描述**：返回几何类型。
- **返回值**：'Rect3D'

### toString

- **描述**：将 Rectangle3D 对象(json 对象)转为字符串对象
- **返回值**：Rectangle3D 对应的字符串对象。

## Point3D

三维点

```js
import { Point3D } from '@mapgis/web-app-framework'
const geometry = new Point3D(x, y, z)
```

### getGeometryType

- **描述**：返回几何类型。
- **返回值**：'Point3D'

### toString

- **描述**：将 Point3D 对象(json 对象)转为字符串对象
- **返回值**：Point3D 对应的字符串对象。

## Layer3D

三维图层类，主要用来判断图层是否为三维图层

```js
import { Layer3D } from '@mapgis/web-app-framework'
if (layer instanceof Layer3D) {
}
```

### fullExtent

- **类型**：`Rectangle3D`
- **描述**：图层范围，可 get/set。
