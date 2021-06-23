# 窗口

基于 [MpPlacement](/zh/components/common/placement.html) 提供的专用于显示微件的窗口，支持大小调整、拖拽、收缩等操作，并且窗口大小能随着微件大小进行自适应调整。

:::tip

- 拖拽和调整大小，会基于父级定位元素（只要父元素的 position 不等于`static`）来操作，如果没有找到，则使用文档元素（`documentElement`）。
- 窗口整体高度，由内容高度+Header 高度（36px）。
- 窗口的 position 和 styles 选项和详细说明可查看[app.json](/zh/guide/introduction/config.html#app-json)。

```js
"position": {
  // 可选，面板位置锚点，默认值为top-right，可以设置为top-right、top-left、bottom-right、bottom-left、top-center、center-right、bottom-center、center-left、center-center
  "anchor": "top-right",
  // 可选，面板水平和垂直方向偏移,默认值为0（单位：像素）
  "horizontalOffset": 0,
  "verticalOffset": 0,
  // 可选，相对于主视图顶的距离，默认值为0（单位：像素），当height没有指定，且anchor为'bottom-left', 'bottom-right', 'bottom-center'时生效
  "top": 0,
  // 可选，相对于主视图底的距离，默认值为0（单位：像素），当height没有指定，且anchor为'top-left', 'top-right', 'top-center'时生效
  "bottom": 0
},
// 可选，面板样式
"styles": {
  // 可选，是否展开，当position.anchor为top-center、bottom-center、center-left、center-right、center-center时生效
  "expand": false,
  // 可选，面板内容宽度，如果没有传，可设置最小宽度和最大宽度并由内容自适应
  "width": 240,
  // 可选，面板内容高度，如果没有传，查看是否有top或bottom，如果有，将根据距离进行自适应，如果也没有，可设置最小高度和最大高度并由内容自适应
  "height": 480,
  // 可选，面板默认最小内容宽度，默认值240（单位：像素）
  "minWidth": 240,
  // 可选，面板默认最大内容宽度，默认值为100%，只支持像素单位设置
  "maxWidth": 240,
  // 可选，面板默认最小内容宽度，默认值48（单位：像素）
  "minHeight": 48,
  // 可选，面板默认最大内容宽度，默认值为100%，只支持像素单位设置
  "maxHeight": 48
}
```

:::

## 代码演示

```html
<template>
  <mp-window
    anchor="top-left"
    :horizontalOffset="10"
    :verticalOffset="10"
    title="我的窗口"
    icon="http://www.mapgis.com/wcs/Tpl/home/default/images/logo.jpg"
    :shrink-action="false"
    :full-screen-action="false"
    :z-index="2"
    :visible.sync="visible"
    drag-range
  >
    <template>
      窗口内容
    </template>
  </mp-window>
</template>
```

```js
<script>
export default {
  data() {
    return {
     visible: true
    }
  }
}
</script>
```

或

```html
<template>
  <mp-window
    anchor="top-right"
    :horizontalOffset="10"
    :verticalOffset="10"
    title="我的窗口"
    :visible.sync="visible"
    :width="480"
    :bottom="10"
  >
    <template>
      窗口内容
    </template>
  </mp-window>
</template>
```

## API

### MpWindow

#### 属性

| 参数             | 说明                                                              | 类型    | 默认值      |
| ---------------- | ----------------------------------------------------------------- | ------- | ----------- |
| anchor           | 窗口方位，同[position](/zh/components/placement.html#mpplacement) | String  | `top-right` |
| horizontalOffset | 水平偏移                                                          | Number  | 0           |
| verticalOffset   | 垂直偏移                                                          | Number  | 0           |
| expand           | 是否展开，同[expand](/zh/components/placement.html#mpplacement)   | Boolean | false       |
| title            | 显示标题                                                          | String  | ''          |
| icon             | 显示图标，同[icon](/zh/components/icon.html#mpicon)               | String  | -           |
| visible          | 是否显示                                                          | Boolean | -           |
| isFullScreen     | 是否全屏                                                          | Boolean | false       |
| width            | 内容宽度                                                          | Number  | -           |
| height           | 内容高度                                                          | Number  | -           |
| minWidth         | 内容最小宽度                                                      | Number  | -           |
| maxWidth         | 内容最大宽度                                                      | Number  | -           |
| minHeight        | 内容最小高度                                                      | Number  | -           |
| maxHeight        | 内容最大高度                                                      | Number  | -           |
| top              | 相对于主视图顶的距离                                              | Number  | -           |
| bottom           | 相对于主视图底的距离                                              | Number  | -           |
| dragable         | 是否允许拖拽                                                      | Boolean | true        |
| dragRange        | 是否窗口范围内拖动（true 表示，窗口边框不能出父级定位元素的边框） | Boolean | true        |
| resizable        | 是否调整窗口大小                                                  | Boolean | true        |
| shrinkAction     | 是否有收缩动作                                                    | Boolean | true        |
| fullScreenAction | 是否有全屏动作                                                    | Boolean | true        |
| closeAction      | 是否有关闭动作                                                    | Boolean | true        |
| hasPadding       | 是否有边距                                                        | Boolean | true        |
| zIndex           | 层级，同[zIndex](/zh/components/placement.html#mpplacement)       | Number  | 1           |

#### 事件

| 事件名称       | 说明                                                       | 回调参数               |
| -------------- | ---------------------------------------------------------- | ---------------------- |
| update:visible | 关闭按钮点击后触发                                         | (value) => {}          |
| resize         | 窗口大小手动调整后触发，如果高度不支持调整，则为 undefined | ({width,height}) => {} |
| window-size    | 窗口模式切换后触发，`max`：最大化；`normal`：常规          | (mode) => {}           |

#### 插槽

| 名称 | 说明                         |
| ---- | ---------------------------- |
| —    | 默认插槽，作为窗口的主体内容 |
