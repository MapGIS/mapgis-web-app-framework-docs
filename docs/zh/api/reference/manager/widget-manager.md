# WidgetManager

微件管理，负责微件状态的管理。

```js
import { WidgetManager } from '@mapgis/web-app-framework'
```

## getInstance

- **描述**： 获取全局单例。

```js
WidgetManager.getInstance()
```

## openWidget

- **描述**：打开并激活微件，先设置微件状态为 `OPENED`，再设置微件状态为 `ACTIVE`。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

```js
const currentWidget = this.widgets.find(widget => widget.id === key)
if (currentWidget) {
  WidgetManager.getInstance().triggerWidgetOpen(currentWidget)
}
```

## activateWidget

- **描述**：激活微件，只处理打开状态下的微件，设置其状态为 `ACTIVE`。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

## deActivateWidget

- **描述**：将激活微件设置为打开状态`OPENED`。

## isWidgetActive

- **描述**：判断微件状态是否为 `ACTIVE`。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

```js
WidgetManager.getInstance().isWidgetActive(widget)
```

## isWidgetVisible

- **描述**：判断微件状态是否为 `OPENED`。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

```js
if (WidgetManager.getInstance().isWidgetVisible(widget)) {
  WidgetManager.getInstance().closeWidget(widget)
}
```

## closeWidget

- **描述**：设置微件状态为 `CLOSED`，如果该微件处于激活状态，会先设置其状态为`OPENED`，然后再设置为 `CLOSED`。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

```js
if (WidgetManager.getInstance().isWidgetVisible(widget)) {
  WidgetManager.getInstance().closeWidget(widget)
}
```

## triggerWidgetOpen

- **描述**：切换微件打开和关闭。
- **参数**

  | 参数   | 描述 | 类型   | 默认值 |
  | :----- | :--- | :----- | :----- |
  | widget | 微件 | Object | -      |

  ```js
  WidgetManager.getInstance().triggerWidgetOpen(
    this.widgets.find(val => {
      return val.id === key
    })
  )
  ```

## operateWidget

- **描述**：操作微件。
- **参数**

  | 参数     | 描述              | 类型   | 默认值 |
  | :------- | :---------------- | :----- | :----- |
  | widgets  | 微件集合          | Array  | -      |
  | activeId | 需要激活的微件 ID | string | -      |

  ```js
  const widget = this.widget.children.find(item => item.id === val)
  if (widget) {
    WidgetManager.getInstance().operateWidget(this.widget.children, val)
  }
  ```
