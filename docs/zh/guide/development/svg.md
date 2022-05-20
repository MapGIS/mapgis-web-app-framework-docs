# 图标

## 图标使用方式

### 图像图标

可设置为图像 URL。

- 应用 logo

```js
// app.json
// 可选，应用logo，默认值为images/app-logo.svg
"logo": "images/logo.png",
```

- 微件 icon

```js
// app.json
// 可选，如果没有设置，使用widget目录内图标（manifest.json指向的icon）
"icon": "images/xxx.svg",
```

### 内嵌 svg（**支持修改颜色**）

可设置为 svg 的内容。

- 应用 logo

```
// app.json
"logo": "<svg class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><defs><style/></defs><path d=\"M89.6 554.667H0c21.333 247.466 217.6 448 469.333 465.066V934.4C268.8 917.333 106.667 755.2 89.6 554.667zm0-85.334C106.667 268.8 268.8 106.667 469.333 89.6V4.267C221.867 21.333 21.333 221.867 0 469.333h89.6zm844.8 0h85.333c-17.066-247.466-217.6-448-465.066-465.066V89.6C755.2 106.667 917.333 268.8 934.4 469.333zm0 85.334C913.067 755.2 755.2 917.333 554.667 934.4v85.333c247.466-21.333 448-217.6 469.333-465.066h-89.6z\"/><path d=\"M213.333 384l128-42.667L435.2 435.2 597.333 256l213.334 106.667v298.666l-170.667-64-170.667 128-128-85.333-128 85.333z\"/></svg>",

```

- 微件 icon

```
// widgets/xxx/manifest.json
"icon": "<svg class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"><defs><style/></defs><path d=\"M64 384h320V64H64v320zM0 0h448v448H0V0zm64 896h320V576H64v320zM0 512h448v448H0V512zm576 64v320h320V576H576zm-64-64h448v448H512V512zm64-448v320h320V64H576zM512 0h448v448H512V0z\"/></svg>",
```

## 图标使用流程

### 使用图像图标流程

配置好应用图标和微件图标包括其他需要的图标，放到相应的目录内，默认情况下对于微件，在混入[WidgetInfoMixin](/zh/api/reference/widget-info-mixin.html)或[WidgetMixin](/zh/api/reference/widget-mixin.html)后，可以直接`widgetInfo.icon`：

```js
<mp-icon :icon="widgetInfo.icon"/>
```

### 使用 svg 图标流程

#### 1. 处理 svg 图标

> 因为对 svg 有如下限制：
>
> - 不要在\<svg\>标签上使用“height”/“width”属性（这会阻止 QIcon 处理尺寸的方式）
> - 默认情况下，所有\<path\>都会应用“fill: currentColor” CSS； 如果您不想这样做，则将 fill="none"添加到\<path\>标记中
>
> 所以在得到 svg 图标的时候**不要带有颜色**，并且还需要使用工具对其进行优化，推荐使用`svgo`。

#### 2. 放置 svg 内容到相应位置

#### 3. 默认情况下对于微件，在混入[WidgetInfoMixin](/zh/api/reference/widget-info-mixin.html)或[WidgetMixin](/zh/api/reference/widget-mixin.html)后，可以直接`widgetInfo.icon`。

## 更多信息

请参考[MpIcon](/zh/components/icon.html)。
