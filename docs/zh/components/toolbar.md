# MpToolbar 工具栏

工具栏组件。

## 代码演示

### 基本用法

直接使用 MpToolbarCommand，中间使用 MpToolbarSpace 填充空白

```html
<template>
  <mp-toolbar>
    <mp-toolbar-command
      title="Add"
      icon="plus"
      @click="onAdd"
    />
    <mp-toolbar-command
      title="Edit"
      icon="edit"
      @click="onEdit"
    />
    <mp-toolbar-space>
    <mp-toolbar-command
      title="Setting"
      icon="setting"
      @click="onSetting"
    />
  </mp-toolbar>
</template>
```

### 命令组用法

使用命名组，组内可进行分割

```html
<template>
  <mp-toolbar size="small" :bordered="false">
    <mp-toolbar-command-group>
      <mp-toolbar-command
        title="Add"
        icon="plus"
        @click="onAdd"
      />
      <a-divider type="vertical" />
      <mp-toolbar-command
        title="Edit"
        icon="edit"
        @click="onEdit"
      />
    </mp-toolbar-command-group>
    <mp-space>
    <mp-toolbar-command
      title="Setting"
      icon="setting"
      @click="onSetting"
    />
  </mp-toolbar>
</template>
```

## API

### MpToolbar

#### 属性

| 参数     | 说明                                       | 类型    | 默认值  |
| -------- | ------------------------------------------ | ------- | ------- |
| size     | 组件大小，目前仅支持`small`和`非small`选项 | String  | default |
| bordered | 是否有上下边框                             | Boolean | true    |

### MpToolbarCommand

#### 属性

| 参数          | 说明                                                          | 类型    | 默认值 |
| ------------- | ------------------------------------------------------------- | ------- | ------ |
| title         | 标题，以 tip 形式显示                                         | String  | -      |
| icon          | 图标，支持 antd 的原生图标和 以`<svg` 开头的 svg 原生图片内容 | String  | -      |
| active        | 是否激活，激活状态下，以主色显示                              | Boolean | false  |
| disabled      | 是否禁用，禁用状态下不可点击                                  | Boolean | false  |
| hoverBordered | 鼠标 hover 时是否有边框                                       | Boolean | true   |

#### 事件

| 事件名称 | 说明       | 回调参数 |
| -------- | ---------- | -------- |
| click    | 点击后触发 | () => {} |

### MpToolbarCommandGroup

#### 属性

| 参数                         | 说明                                       | 类型    | 默认值 |
| ---------------------------- | ------------------------------------------ | ------- | ------ |
| removeFirstCommandLeftMargin | 是否移除工具栏命令组第一个命令左边的边距   | Boolean | true   |
| removeLastCommandRightMargin | 是否移除工具栏命令组最后一个命令右边的边距 | Boolean | true   |

### MpToolbarSpace
