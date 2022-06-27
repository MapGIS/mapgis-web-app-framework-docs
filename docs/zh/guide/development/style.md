# 样式

MapGIS Web App Framework 是基于[ant-design-vue](https://github.com/vueComponent/ant-design-vue)来打造的，所以主题样式的变化也直接采用的是 ant-design-vue 的机制。

可参考[定制主题](https://www.antdv.com/docs/vue/customize-theme-cn)，另外[MapGIS 全空间一张图](https://github.com/mapgis/mapgis-pan-spatial-map)借鉴 Ant Design Vue 社区引入了一套完整的主题样式定制方案。

## 样式配置

对于使用者来说，只需要关注主题色`color` 和主题方案 `theme` 即可。

```js
{
  // 主题颜色
  "color": "#1890ff",
  // 主题，描述布局、模式等
  "theme": "dark"
}
```
