# WidgetInfoMixin

继承自 [AppMixin](/zh/components/mixin/app-mixin.html)，微件信息混入，提供微件的基础信息。

## props

| 参数   | 说明   | 类型   | 可选值 | 默认值 | 版本 |
| ------ | ------ | ------ | ------ | ------ | ---- |
| widget | 微件。 | object |        |        |      |

## computed

| 参数       | 说明                                                                                                                                                    | 类型   | 可选值 | 默认值 | 版本 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ | ---- |
| widgetInfo | 微件信息，包括 id、uri、label、icon、config、assetsUrl、position、openAtStart、visible、dragable、properties 等。可参考 [app.json](/zh/config/app.html) | object |        |        |      |

```js
// widgetInfo 示例
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

## methods

### parsePostion

- **描述**：解析微件位置。
- **返回值**：微件的位置。
- **参数**

  | 参数   | 描述     | 类型   | 默认值 |
  | :----- | :------- | :----- | :----- |
  | widget | 微件对象 | object | -      |

### parseProperties

- **描述**：解析微件属性。
- **返回值**：微件的属性。
- **参数**

  | 参数   | 描述     | 类型   | 默认值 |
  | :----- | :------- | :----- | :----- |
  | widget | 微件对象 | object | -      |

### parseIcon

- **描述**：解析微件图标。
- **返回值**：微件的图标。
- **参数**

  | 参数   | 描述     | 类型   | 默认值 |
  | :----- | :------- | :----- | :----- |
  | widget | 微件对象 | object | -      |

### parseLabel

- **描述**：解析微件名称。
- **返回值**：微件的名称。
- **参数**

  | 参数   | 描述     | 类型   | 默认值 |
  | :----- | :------- | :----- | :----- |
  | widget | 微件对象 | object | -      |

### parseComponent

- **描述**：解析微件对应的组件。
- **返回值**：微件对应的组件。
- **参数**

  | 参数   | 描述     | 类型   | 默认值 |
  | :----- | :------- | :----- | :----- |
  | widget | 微件对象 | object | -      |

### parseLoadScript

- **描述**：解析微件对应的 js 文件。
- **返回值**：微件路径和微件名。
- **参数**

  | 参数       | 描述                                                       | 类型   | 默认值 |
  | :--------- | :--------------------------------------------------------- | :----- | :----- |
  | fileName   | 文件字段名(jsFile、cssFile、settingJsFile、settingCssFile) | string | -      |
  | compareStr | 文件名                                                     | string | -      |

  ### loadScript

- **描述**：加载微件对应的 js 文件。
- **参数**

  | 参数 | 描述     | 类型   | 默认值 |
  | :--- | :------- | :----- | :----- |
  | url  | 微件对象 | object | -      |
  | id   | 微件对象 | object | -      |

  ### loadStyle

- **描述**：加载微件对应的 css 文件。
- **返回值**：微件对应的组件。
- **参数**

  | 参数 | 描述     | 类型   | 默认值 |
  | :--- | :------- | :----- | :----- |
  | url  | 微件对象 | object | -      |
  | id   | 微件对象 | object | -      |
