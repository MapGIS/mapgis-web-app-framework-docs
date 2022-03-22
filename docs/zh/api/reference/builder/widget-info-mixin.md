# WidgetInfoMixin

继承自 [AppMixin](/zh/api/reference/app-mixin.html)，微件信息混入，提供微件的基础信息。

## props

### widget

- **类型**：`Object`
- **描述**：微件。

## computed

### widgetInfo

- **类型**：`Object`
- **描述**：微件信息，包括 id、uri、label、icon、config、assetsUrl、position、openAtStart、visible、dragable、properties 等。可参考 [app.json](/zh/guide/introduction/config.html#app-json)

```js
{
  id,
    uri,
    // 解析后的label
    label,
    // 解析后的icon
    icon,
    // 解析后的config
    config,
    // 拼接后的资源url
    assetsUrl,
    position,
    openAtStart,
    visible,
    dragable,
    // 解析后的微件属性
    properties
}
```
