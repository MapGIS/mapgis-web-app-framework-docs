# MapMixin

地图混入，提供二三维地图对象和地图库对象。

在没有混入 WidgetMixin，但又需要用到地图对象和地图库对象时，可以使用该混入。比如结果集微件。

## inject

| 参数      | 说明            | 类型   | 可选值 | 默认值 | 版本 |
| --------- | --------------- | ------ | ------ | ------ | ---- |
| map       | 二维地图对象    | object |        |        |      |
| mapbox    | MapBox 库       | object |        |        |      |
| viewer    | 三维场景对象    | object |        |        |      |
| Cesium    | Ceisum 库       | object |        |        |      |
| vueCesium | Ceisum vue 对象 | object |        |        |      |

:::tip
主题微件中混入了 ThemeMixin，ThemeMixin 中通过**provide**的方式将 map、mapbox、viewer、Cesium、vueCesium 提供给所有的子孙组件使用，通常微件只需混入 MapMixin，即通过**inject**的方式直接拿到这几个对象。
:::
